import { useForm, FieldError } from "react-hook-form";
import { ReactNode } from "react";
import Link from "next/link";

type FormValues = {
  email?: string;
  password?: string;
};

export default function Login() {
  const { register, handleSubmit, errors, watch, setValue, control } = useForm<
    FormValues
  >({
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const renderFieldError = (
    fieldError: FieldError | undefined,
    message: string
  ): ReactNode | null => {
    if (fieldError)
      return (
        <span className="text-red-400 text-sm font-medium">{message}</span>
      );
    return null;
  };

  return (
    <div>
      <header className="flex justify-center items-center mt-4">
        <h1 className="font-header font-bold text-4xl ml-4">Login</h1>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto mt-8 border-2 border-gray-400 border-solid rounded-lg p-6"
      >
        <label className="block mt-4">
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            ref={register({ required: true })}
            className="form-input mt-2 block w-full"
            placeholder="john.doe@mail.com"
          />
          {renderFieldError(errors.email, "Por favor digite seu e-mail")}
        </label>

        <label className="block mt-4">
          <span>Senha</span>
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
            className="form-input mt-2 block w-full"
          />
          {renderFieldError(errors.password, "Por favor digite sua senha")}
        </label>

        <button
          className="block bg-land-green text-white font-header font-bold mx-auto mt-8 rounded px-4 py-2  hover:opacity-75"
          type="submit"
        >
          Entrar
        </button>
      </form>

      <Link href="/auth/register">
        <a className="block text-center mt-8 text-sea-blue underline hover:opacity-75">
          Não possui cadastro?
        </a>
      </Link>
    </div>
  );
}
