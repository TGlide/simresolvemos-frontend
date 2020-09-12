import { useForm, FieldError } from "react-hook-form";
import { ReactNode, FormEvent } from "react";
import Spinner from "../../shared/Spinner";

export type StepLayoutProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  buttonLoading?: boolean;
};

export const renderFieldError = (
  fieldError: FieldError | undefined,
  message: string
): ReactNode | null => {
  if (fieldError)
    return <span className="text-red-400 text-sm font-medium">{message}</span>;
  return null;
};

export default function StepLayout({
  onSubmit,
  children,
  buttonLoading,
}: StepLayoutProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-lg mx-auto mt-4 border-2 border-gray-400 border-solid rounded-lg p-6"
    >
      {children}
      <button
        className="block bg-land-green mx-auto mt-8 rounded-full p-2  hover:opacity-75"
        type="submit"
        disabled={buttonLoading}
      >
        {buttonLoading === true ? (
          <Spinner size={6} />
        ) : (
          <img src="/vectors/arrow-right.svg" alt="Próximo" />
        )}
      </button>
    </form>
  );
}
