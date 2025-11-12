import { useState, useRef } from "react";

interface OtpVerificationProps {
  setIsVerified: React.Dispatch<SetStateAction<boolean>>;
}

const OtpVerification = ({ setIsVerified }: OtpVerificationProps) => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [isWaiting, setIsWaiting] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(30);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const startWaitingTimer = () => {
    const idInterval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(idInterval);
          setIsWaiting(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const otpValue = code.join("");

  return (
    <section className="bg-surface-light rounded-xl p-6 max-w-md w-full flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-3">
        <div className="mb-3 rounded-full bg-linear-to-r from-[#5611F7] to-[#3D7EF6] p-3">
          <i className="bi bi-mortarboard text-4xl text-primary-dark"></i>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-primary-light text-2xl font-bold">
            Verificar Código
          </p>
          <p className="text-muted-light text-sm text-center">
            Digite o código de 6 dígitos enviado para o seu email
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6 max-w-xs ">
        {code.map((num, i) => (
          <input
            key={i}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={num}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            className={`border border-outline-light text-center py-2 focus:outline-purple-700
    ${i === 0 ? "rounded-tl-xl rounded-bl-xl" : ""}
    ${i === 5 ? "rounded-tr-xl rounded-br-xl" : ""}`}
          />
        ))}
      </div>

      <div className="flex flex-col items-center">
        <p className="text-sm text-muted-light">Não recebeu o código?</p>
        {isWaiting ? (
          <p className="text-sm text-muted-light text-center">
            Aguarde {secondsLeft} segundos para solicitar outro codigo
          </p>
        ) : (
          <button className="text-md text-menuHighlightColor font-medium cursor-pointer">
            Reenviar código
          </button>
        )}
      </div>
      <button
        className="bg-linear-to-r from-[#5611F7] to-[#3D7EF6] text-primary-dark font-medium px-6 py-2 rounded-xl cursor-pointer"
        onClick={() => startWaitingTimer()}
      >
        Verificar código
      </button>
    </section>
  );
};

export default OtpVerification;
