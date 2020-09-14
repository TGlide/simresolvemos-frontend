import { useState, ChangeEvent } from "react";
import { VerifyUser } from "../../api/auth";
import Spinner from "../shared/Spinner";

export type VerifyModalProps = {
  email: string;
  verifyCallback: Function;
};

export default function VerifyModal({
  email,
  verifyCallback,
}: VerifyModalProps) {
  const [token, setToken] = useState<string>("");
  const [verificationLoading, setVerficationLoading] = useState<boolean>(false);
  const [verificationError, setVerficationError] = useState<undefined | string>(
    undefined
  );

  const changeToken = (event: ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const handleVerify = () => {
    setVerficationLoading(true);
    setVerficationError(undefined);

    VerifyUser({ user_email: email, token: parseInt(token) })
      .then((res) => {
        if (res.data.success) {
          verifyCallback();
        } else {
          setVerficationError("A verificação falhou! Tente novamente.");
        }
      })
      .catch(() => {
        setVerficationError("A verificação falhou! Tente novamente.");
      })
      .finally(() => {
        setVerficationLoading(false);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-10">
      <div className="rounded bg-white p-8 max-w-sm">
        <h1 className="font-header text-lg text-center">Verifique seu email</h1>
        <p className="text-center break-normal text-xs mt-2">
          Nós enviamos um código de confirmação para seu email. Verifique sua
          caixa de entrada e digite o código abaixo.
        </p>
        <label className="block mt-8 text-center">
          <span>Código</span>
          <input
            type="text"
            maxLength={5}
            className="form-input mt-2 block w-24 mx-auto text-center"
            value={token}
            onChange={changeToken}
          />
        </label>

        <button
          className="block bg-land-green text-white font-header mx-auto mt-8 rounded px-4 py-2 hover:opacity-75"
          type="submit"
          disabled={verificationLoading}
          onClick={handleVerify}
        >
          {verificationLoading ? <Spinner size={6} /> : "Verificar"}
        </button>

        {verificationError && (
          <span className="block mx-auto mt-4 text-red-400 text-sm text-center">
            {verificationError}
          </span>
        )}
      </div>
    </div>
  );
}
