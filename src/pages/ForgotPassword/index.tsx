import { useState } from "react";
import OtpVerification from "./components/OtpVerification";
import PasswordUpdate from "./components/PasswordUpdate";

const ForgotPassword = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  return (
    <main className="bg-linear-to-r from-[#5611F7] to-[#3D7EF6] h-dvh flex justify-center items-center p-6">
      {isVerified ? (
        <OtpVerification setIsVerified={setIsVerified} />
      ) : (
        <PasswordUpdate />
      )}
    </main>
  );
};

export default ForgotPassword;
