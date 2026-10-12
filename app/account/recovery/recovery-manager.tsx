"use client";

import { useActionState, useState } from "react";
import {
  deleteRecoveryKey,
  revealRecoveryKey,
  saveRecoveryKey,
  type RecoveryActionState,
} from "./actions";

const initialState: RecoveryActionState = { status: "idle" };

function Status({ state }: { state: RecoveryActionState }) {
  return state.message ? (
    <p
      className={`auth-message ${state.status === "error" ? "auth-message-error" : ""}`}
      role="status"
    >
      {state.message}
    </p>
  ) : null;
}

export default function RecoveryManager({
  hasKey,
  updatedAt,
  configured,
}: {
  hasKey: boolean;
  updatedAt: string | null;
  configured: boolean;
}) {
  const [mode, setMode] = useState<"status" | "save" | "delete">(
    hasKey ? "status" : "save",
  );
  const [saveState, saveAction, saving] = useActionState(
    saveRecoveryKey,
    initialState,
  );
  const [revealState, revealAction, revealing] = useActionState(
    revealRecoveryKey,
    initialState,
  );
  const [deleteState, deleteAction, deleting] = useActionState(
    deleteRecoveryKey,
    initialState,
  );
  const [copied, setCopied] = useState(false);

  if (!configured) {
    return (
      <div className="auth-message auth-message-error">
        Recovery storage is waiting for Supabase and server encryption
        configuration.
      </div>
    );
  }

  if (mode === "save") {
    return (
      <form action={saveAction} className="recovery-form">
        <label htmlFor="recoveryKey">Recovery key</label>
        <textarea
          id="recoveryKey"
          name="recoveryKey"
          rows={5}
          required
          minLength={16}
          maxLength={512}
          autoComplete="off"
          spellCheck={false}
          placeholder="Paste the complete recovery key shown by BitVault"
        />
        <label htmlFor="save-confirmation">
          Type <strong>SAVE</strong> to confirm
        </label>
        <input
          id="save-confirmation"
          name="confirmation"
          autoComplete="off"
          required
        />
        <div className="form-actions">
          <button className="button button-primary" disabled={saving}>
            {saving ? "Encrypting…" : hasKey ? "Replace saved key" : "Encrypt and save"}
          </button>
          {hasKey ? (
            <button
              className="text-button"
              type="button"
              onClick={() => setMode("status")}
            >
              Cancel
            </button>
          ) : null}
        </div>
        <Status state={saveState} />
      </form>
    );
  }

  if (mode === "delete") {
    return (
      <form action={deleteAction} className="recovery-form danger-form">
        <p>
          This removes the encrypted recovery key from your account. It does not
          change anything inside the Android app.
        </p>
        <label htmlFor="delete-confirmation">
          Type <strong>DELETE</strong> to confirm
        </label>
        <input id="delete-confirmation" name="confirmation" required />
        <div className="form-actions">
          <button className="button button-alarm" disabled={deleting}>
            {deleting ? "Deleting…" : "Delete saved key"}
          </button>
          <button
            className="text-button"
            type="button"
            onClick={() => setMode("status")}
          >
            Cancel
          </button>
        </div>
        <Status state={deleteState} />
      </form>
    );
  }

  return (
    <div className="recovery-status">
      <div className="key-status-line">
        <span>Stored state</span>
        <strong>Encrypted envelope verified</strong>
      </div>
      <div className="key-status-line">
        <span>Last updated</span>
        <strong>
          {updatedAt
            ? new Intl.DateTimeFormat(undefined, {
                dateStyle: "medium",
                timeStyle: "short",
              }).format(new Date(updatedAt))
            : "Just now"}
        </strong>
      </div>
      {revealState.recoveryKey ? (
        <div className="revealed-key">
          <span>Recovery key</span>
          <code>{revealState.recoveryKey}</code>
          <button
            className="text-button"
            type="button"
            onClick={async () => {
              await navigator.clipboard.writeText(revealState.recoveryKey ?? "");
              setCopied(true);
              window.setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? "Copied" : "Copy key"}
          </button>
        </div>
      ) : (
        <form action={revealAction}>
          <button className="button button-primary" disabled={revealing}>
            {revealing ? "Checking…" : "Reveal saved key"}
          </button>
        </form>
      )}
      <Status state={revealState} />
      <div className="form-actions">
        <button className="text-button" type="button" onClick={() => setMode("save")}>
          Replace key
        </button>
        <button
          className="text-button danger-link"
          type="button"
          onClick={() => setMode("delete")}
        >
          Delete key
        </button>
      </div>
    </div>
  );
}
