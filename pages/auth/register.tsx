import { useForm, FieldError } from "react-hook-form";
import { ReactNode } from "react";
import Link from "next/link";

type FormValues = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function Register() {
  const { register, handleSubmit, errors, watch, setValue, control } = useForm<
    FormValues
  >({
    mode: "all",
  });
  const watchPassword = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  const renderFieldError = (
    fieldError: FieldError | undefined,
    message: string
  ): ReactNode | null => {
    console.log(fieldError);
    if (fieldError) {
      if (fieldError.type === "minLength") {
        return (
          <span className="text-red-400 text-sm font-medium">
            A senha precisa conter no mínimo 6 caracteres
          </span>
        );
      }
      return (
        <span className="text-red-400 text-sm font-medium">{message}</span>
      );
    }
    return null;
  };

  const validateConfirmedPassword = (value): boolean => {
    console.log(value, watchPassword, value === watchPassword);

    return value === watchPassword;
  };

  return (
    <div>
      <header className="flex justify-center items-center mt-4">
        <h1 className="font-header font-bold text-4xl ml-4">Cadastro</h1>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto mt-8 border-2 border-gray-400 border-solid rounded-lg p-6"
      >
        <label className="block">
          <span>Nome</span>
          <input
            type="text"
            name="email"
            ref={register({ required: true })}
            className="form-input mt-2 block w-full"
            placeholder="John Doe"
          />
          {renderFieldError(errors.name, "Por favor digite seu e-nome")}
        </label>

        <label className="block mt-4">
          <span>E-mail</span>
          <input
            type="email"
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
            ref={register({ required: true, minLength: 6 })}
            className="form-input mt-2 block w-full"
          />
          {renderFieldError(errors.password, "Por favor digite sua senha")}
        </label>

        <label className="block mt-4">
          <span>Confirmar Senha</span>
          <input
            type="password"
            name="confirmPassword"
            ref={register({
              required: true,
              validate: validateConfirmedPassword,
            })}
            className="form-input mt-2 block w-full"
          />
          {renderFieldError(
            errors.confirmPassword,
            "As senhas não são iguais."
          )}
        </label>

        <button
          className="block bg-land-green text-white font-header font-bold mx-auto mt-8 rounded px-4 py-2  hover:opacity-75"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
