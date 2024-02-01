import React from "react";
import { GrClose } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import classEase from "classease";

const Notification = ({ type, message }) => {
  const status =
    type === "error" ? "Error!" : type === "success" ? "Success!" : "";

  return (
    <>
      <div
        className={classEase(
          "notification d-flex align-items-center",
          type === "error" ? "error" : ""
        )}
      >
        <div className="notification_icon me-4">
          {type === "error" ? (
            <GrClose />
          ) : type === "success" ? (
            <FaCheck />
          ) : (
            ""
          )}
        </div>
        <div className="notification_text">
          <h4 className="mb-0">{status}</h4>
          <p className="mb-0">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Notification;
