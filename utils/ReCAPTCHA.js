import { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { constants } from "../lib/config";

const CustomReCAPTCHA = ({ onVerify, shouldReset, onAttempted }) => {
  const recaptchaRef = useRef(null);

  useEffect(() => {
    if (shouldReset && recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, [shouldReset]);

  const handleReCAPTCHAChange = async (captchaCode) => {
    onAttempted();

    if (!captchaCode) {
      onVerify(false);
      return;
    }

    const verificationResponse = await fetch("/api/recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ response: captchaCode }),
    });

    const verificationData = await verificationResponse.json();

    if (verificationData.success) {
      onVerify(true);
    } else {
      onVerify(false);
    }

    return;

    // const verificationResponse = await fetch(
    //   "https://www.google.com/recaptcha/api/siteverify",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: `secret=${constants?.RECAPTCHA_SECRET_KEY}&response=${captchaCode}`,
    //   }
    // );

    // const verificationData = await verificationResponse.json();

    // if (verificationData.success) {
    //   onVerify(true);
    // } else {
    //   onVerify(false);
    // }

    // return;
  };

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      size="normal"
      sitekey={constants.RECAPTCHA_SITE_KEY}
      onChange={handleReCAPTCHAChange}
    />
  );
};

export default CustomReCAPTCHA;
