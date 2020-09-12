import InputMask from "react-input-mask";

import {
  useForm,
  FieldError,
  Controller,
  SubmitHandler,
} from "react-hook-form";
import { ReactNode, useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStoreActions, useStoreState } from "../../store";

import { RegisterUser, RegisterBody, VerifyUser } from "../../api/auth";
import { spawn } from "child_process";
import Spinner from "../../components/shared/Spinner";
import { formatTaskDataForApi } from "../../utils/tasks";
import { SendTask } from "../../api/tasks";
import { toast } from "react-toastify";

type FormValues = {
  name?: string;
  birthday?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  hasWhatsapp?: boolean;
};

export default function Register() {
  const [showPage, setShowPage] = useState(false);
  const [registerLoading, setRegisterLoading] = useState<boolean>(false);
  const [registerError, setRegisterError] = useState<undefined | string>(
    undefined
  );
  const [awaitingVerification, setAwaitingVerification] = useState<boolean>(
    false
  );
  const [verificationLoading, setVerficationLoading] = useState<boolean>(false);
  const [verificationError, setVerficationError] = useState<undefined | string>(
    undefined
  );
  const [token, setToken] = useState<string>("");

  const { register, handleSubmit, errors, watch, control, getValues } = useForm<
    FormValues
  >({
    mode: "all",
  });
  const watchPassword = watch("password");
  const router = useRouter();
  const { fromTask } = router.query;
  const login = useStoreActions((state) => state.user.login);
  const task = useStoreState((state) => state.task.data);

  const changeToken = (event: ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setRegisterError(undefined);
    setRegisterLoading(true);

    const registerBody: RegisterBody = {
      nome: data.name,
      sobrenome: "",
      nascimento: data.birthday,
      email: data.email,
      senha: data.password,
      telefone: data.phone,
      is_whatsapp: data.hasWhatsapp,
    };

    RegisterUser(registerBody)
      .then((res) => {
        if (res.data.success) {
          setAwaitingVerification(true);
        } else {
          setRegisterError(
            res.data.error?.[0] ||
              "Oops! Não conseguimos te cadastrar. Por favor, tente novamente, ou contate nosso suporte!"
          );
        }
      })
      .catch(() => {
        setRegisterError(
          "Oops! Não conseguimos te cadastrar. Por favor, tente novamente, ou contate nosso suporte!"
        );
      })
      .finally(() => setRegisterLoading(false));
  };

  const handleVerify = () => {
    setVerficationLoading(true);
    setVerficationError(undefined);

    const { email } = getValues();
    VerifyUser({ user_email: email, token: parseInt(token) })
      .then((res) => {
        if (res.data.success) {
          login({ data: { email } });

          if (fromTask) {
            const sendTaskData = formatTaskDataForApi(task, email);

            SendTask(sendTaskData)
              .then((res) => {
                if (res.data.success)
                  toast.success("Tarefa enviada com sucesso!");
                else
                  toast.error(
                    "Erro ao enviar a tarefa! Por favor, tente novamente."
                  );
              })
              .catch(() => {
                toast.error(
                  "Erro ao enviar a tarefa! Por favor, tente novamente."
                );
              })
              .finally(() => {
                router.push("/?authMessage=Cadastro concluído com sucesso!");
              });
          } else {
            router.push("/?authMessage=Cadastro concluído com sucesso!");
          }
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

  const renderFieldError = (
    fieldError: FieldError | undefined,
    message: string
  ): ReactNode | null => {
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
    return value === watchPassword;
  };

  useEffect(() => {
    setShowPage(true);
  }, []);

  if (!showPage) return null;

  return (
    <div>
      <header className="flex justify-center items-center mt-4">
        <h1 className="font-header font-bold text-4xl ml-4">Cadastro</h1>
      </header>

      {fromTask && (
        <p className="max-w-3xl mx-auto text-center text-sm opacity-75 mt-2">
          Faça seu cadastro, ou efetue seu{" "}
          <Link href="/auth/login?fromTask=true">
            <a className="text-sea-blue underline hover:opacity-75">login</a>
          </Link>{" "}
          para enviar a tarefa!
        </p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto mt-8 border-2 border-gray-400 border-solid rounded-lg p-6 mb-8"
      >
        <label className="block">
          <span>Nome</span>
          <input
            type="text"
            name="name"
            ref={register({ required: true })}
            className="form-input mt-2 block w-full"
            placeholder="John Doe"
          />
          {renderFieldError(errors.name, "Por favor digite seu nome")}
        </label>

        <label className="block mt-4">
          <span>Data de aniversário</span>
          <Controller
            as={<InputMask />}
            control={control}
            mask="99/99/9999"
            type="text"
            name="birthday"
            rules={{ required: true }}
            defaultValue=""
            className="form-input mt-2 block w-full"
          />
          {renderFieldError(
            errors.birthday,
            "Por favor digite seu aniversario"
          )}
        </label>

        <label className="block mt-4">
          <span>Telefone</span>
          <Controller
            type="text"
            name="phone"
            control={control}
            rules={{ required: true }}
            className="form-input mt-2 block w-full"
            placeholder="(21) 99999-9999"
            mask="(99) 99999-9999"
            defaultValue=""
            as={<InputMask />}
          />
          {renderFieldError(
            errors.phone,
            "Por favor digite um telefone para contato"
          )}
        </label>

        <label className="inline-flex items-center mt-4 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox text-land-green cursor-pointer"
            ref={register}
            name="hasWhatsapp"
          />
          <span className="ml-2">Possui Whatsapp?</span>
        </label>

        <label className="block mt-4">
          <span>Email</span>
          <input
            type="email"
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
          disabled={registerLoading}
          className="block bg-land-green text-white font-header font-bold mx-auto mt-8 rounded px-4 py-2  hover:opacity-75"
          type="submit"
        >
          {registerLoading ? <Spinner size={8} /> : "Cadastrar"}
        </button>

        {registerError && (
          <span className="block mx-auto mt-4 text-red-400 text-sm text-center">
            {registerError}
          </span>
        )}
      </form>

      {awaitingVerification && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="rounded bg-white p-8 max-w-sm">
            <h1 className="font-header text-lg text-center">
              Verifique seu email
            </h1>
            <p className="text-center break-normal text-xs mt-2">
              Nós enviamos um código de confirmação para seu email. Verifique
              sua caixa de entrada e digite o código abaixo.
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
      )}
    </div>
  );
}
