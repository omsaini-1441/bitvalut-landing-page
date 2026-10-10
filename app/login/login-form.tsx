"use client";

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
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const callbackUrl = () =>
    `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`;

  async function signInWithGoogle() {
    const supabase = createClient();
    if (!supabase) return;
    setStatus("loading");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: callbackUrl() },
    });
    if (error) {
      setStatus("error");
      setMessage(error.message);
    }
  }

  async function sendMagicLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const supabase = createClient();
    if (!supabase) return;
    setStatus("loading");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: callbackUrl() },
    });
    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }
    setStatus("sent");
    setMessage("Check your inbox. Your secure sign-in link is on its way.");
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
        <span>or use email</span>
      </div>
      <form onSubmit={sendMagicLink}>
        <label htmlFor="email">Email address</label>
        <div className="email-row">
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
          <button className="button button-stamp" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Email me a link"}
          </button>
        </div>
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
