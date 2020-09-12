import { useForm, FieldError, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { useStoreActions } from "../../store";
import { LoginUser } from "../../api/auth";
import Spinner from "../../components/shared/Spinner";

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
  const router = useRouter();
  const { fromTask } = router.query;
  const login = useStoreActions((state) => state.user.login);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<undefined | string>(undefined);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoginError(undefined);
    setLoginLoading(true);
    LoginUser({ email: data.email, password: data.password })
      .then((res) => {
        if (res.data.success) {
          login({ data: { email: data.email } });
          if (fromTask) {
            alert("Task sent!");
          }
          router.push("/?authMessage=Login feito com sucesso!");
        } else {
          setLoginError(
            "Oops! Não conseguimos efetuar seu login. Por favor, verifique suas credenciais e tente novamente."
          );
        }
      })
      .catch(() => {
        setLoginError(
          "Oops! Não conseguimos efetuar seu login. Por favor, verifique suas credenciais e tente novamente."
        );
      })
      .finally(() => {
        setLoginLoading(false);
      });
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

      {fromTask && (
        <p className="max-w-3xl mx-auto text-center text-sm opacity-75 mt-2">
          Faça seu login, ou se{" "}
          <Link href="/auth/register?fromTask=true">
            <a className="text-sea-blue underline hover:opacity-75">cadastre</a>
          </Link>{" "}
          para enviar a tarefa!
        </p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto mt-8 border-2 border-gray-400 border-solid rounded-lg p-6"
      >
        <label className="block">
          <span>Email</span>
          <input
            disabled={loginLoading}
            type="text"
            name="email"
            ref={register({ required: true })}
            className="form-input mt-2 block w-full"
            placeholder="john.doe@mail.com"
          />
          {renderFieldError(errors.email, "Por favor digite seu email")}
        </label>

        <label className="block mt-4">
          <span>Senha</span>
          <input
            disabled={loginLoading}
            type="password"
            name="password"
            ref={register({ required: true })}
            className="form-input mt-2 block w-full"
          />
          {renderFieldError(errors.password, "Por favor digite sua senha")}
        </label>

        <button
          disabled={loginLoading}
          className="block bg-land-green text-white font-header font-bold mx-auto mt-8 rounded px-4 py-2  hover:opacity-75"
          type="submit"
        >
          {loginLoading ? <Spinner size={8} /> : "Entrar"}
        </button>
        {loginError && (
          <span className="block mx-auto mt-4 text-red-400 text-sm text-center">
            {loginError}
          </span>
        )}
      </form>

      <Link href={`/auth/register${fromTask ? "?fromTask=true" : ""}`}>
        <a className="block text-center mt-8 text-sea-blue underline hover:opacity-75">
          Não possui cadastro?
        </a>
      </Link>
    </div>
  );
}
