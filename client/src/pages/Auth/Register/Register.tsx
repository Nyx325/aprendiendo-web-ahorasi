import React, { useState } from "react";
import { Alert } from "../../../components";
import "./Register.css";

type ViewState = "idle" | "registering" | "error" | "succeed";

export const Register: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>("idle");

  const [emailInput, setEmailInput] = useState("");
  const [pwdInput, setPwdInput] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [pwdErr, setPwdErr] = useState("");

  const handleRegister = () => {
    const email = emailInput.trim();
    const pwd = pwdInput.trim();

    if (viewState === "error") return;
  };

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      >
        <legend>Sign-in</legend>
        <div>
          <Alert message={emailErr} type="alert" />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
        </div>
        <div>
          <Alert message={pwdErr} type="alert" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPwdInput(e.target.value)}
            required
          />
        </div>
        <button>Sign-in</button>
      </form>
    </main>
  );
};
