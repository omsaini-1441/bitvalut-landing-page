"use client";

import { createConfirmedAccount } from "./actions";
import { createClient } from "@/lib/supabase/client";
import { FormEvent, useState } from "react";

export default function LoginForm({
  nextPath,
  configured,
}: {
  nextPath: string;
  configured: boolean;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  const callbackUrl = () => {
    document.cookie = `bv-next=${encodeURIComponent(nextPath)}; Path=/; Max-Age=600; SameSite=Lax`;
    return `${window.location.origin}/auth/callback`;
  };

  async function signInWithGoogle() {
    const supabase = createClient();
    if (!supabase) return;
    setStatus("loading");
    setMessage("");
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: callbackUrl(),
        skipBrowserRedirect: true,
      },
    });
    if (error || !data.url) {
      setStatus("error");
      setMessage(error?.message ?? "Google sign-in did not start.");
      return;
    }
    window.location.assign(data.url);
  }

  async function signInWithPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const supabase = createClient();
    if (!supabase) return;
    setStatus("loading");
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (error) {
      setStatus("error");
      setMessage("That email and password did not match an account.");
      return;
    }
    window.location.assign(nextPath);
  }

  async function createAccount() {
    const supabase = createClient();
    if (!supabase) return;
    setStatus("loading");
    setMessage("");
    const created = await createConfirmedAccount(email, password);
    if (!created.ok) {
      setStatus("error");
      setMessage(created.message);
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (error) {
      setStatus("error");
      setMessage("The account was created, but sign-in did not finish. Try Sign in.");
      return;
    }
    window.location.assign(nextPath);
  }

  if (!configured) {
    return (
      <div className="auth-message auth-message-error">
        Supabase is not configured yet. Add the values from <code>.env.example</code>{" "}
        to <code>.env.local</code>, then restart the server.
      </div>
    );
  }

  return (
    <div className="login-controls">
      <button
        className="auth-provider"
        type="button"
        onClick={signInWithGoogle}
        disabled={status === "loading"}
      >
        <span className="google-g">G</span>
        Continue with Google
      </button>
      <div className="auth-divider">
        <span>or use a password</span>
      </div>
      <form onSubmit={signInWithPassword}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          minLength={8}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="At least 8 characters"
        />
        <div className="email-row">
          <button className="button button-stamp" disabled={status === "loading"}>
            {status === "loading" ? "Working…" : "Sign in"}
          </button>
          <button
            className="button button-primary"
            type="button"
            disabled={status === "loading"}
            onClick={createAccount}
          >
            Create account
          </button>
        </div>
        <p className="auth-footnote">
          No email is sent. The password is what opens this website account.
        </p>
      </form>
      {message ? (
        <p
          className={`auth-message ${status === "error" ? "auth-message-error" : ""}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
