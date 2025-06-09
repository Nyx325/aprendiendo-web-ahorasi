import React from "react";
import "./Alert.css";

import { AlertColors } from "./alert.config";

export type AlertType = "warning" | "alert" | "succeed" | "info";

export type AlertProps = {
  type: AlertType;
  message: string | undefined;
};

export const Alert: React.FC<AlertProps> = ({ type, message }) => {
  return (
    <>
      {message && (
        <div
          className="alert"
          role="alert"
          style={{
            backgroundColor: AlertColors[type],
          }}
        >
          {message}
        </div>
      )}
    </>
  );
};
