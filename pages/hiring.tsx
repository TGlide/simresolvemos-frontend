import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import {
  Controller,
  FieldError,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { SendResume } from "../api/hiring";
import Spinner from "../components/shared/Spinner";
import { isValidNumber } from "../utils/number";

type FormValues = {
  name?: string;
  email?: string;
  phone?: string;
  resume?: FileList;
};

export default function Hiring() {
  const { register, handleSubmit, errors, watch, setValue, control } = useForm<
    FormValues
  >({
    mode: "all",
  });
  const watchResume = watch("resume");
  const [showPage, setShowPage] = useState(false);
  const router = useRouter();
  const [buttonLoading, setButtonloading] = useState(false);

  useEffect(() => {
    setShowPage(true);
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setButtonloading(true);

    SendResume({
      email: data.email,
      resume: data.resume,
      nome: data.name,
      telefone: data.phone,
    })
      .then((res) => {
        if (res.data.success) {
          toast.success("Currículo enviado!");
          router.push("/");
        } else {
          toast.error("Falha ao enviar o currículo! Tente novamente.");
        }
      })
      .catch(() => {
        toast.error("Falha ao enviar o currículo! Tente novamente.");
      })
      .finally(() => setButtonloading(false));
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

  if (!showPage) return null;

  return (
    <div>
      <header className="flex justify-center items-center mt-4">
        <img src="/vectors/people.svg" alt="Pessoas" className="w-18 h-18" />
        <h1 className="font-header font-bold text-2xl lg:text-4xl ml-4 mt-2">
          Trabalhe conosco
        </h1>
      </header>
      <p className="max-w-3xl mx-auto text-center text-sm opacity-75 mt-2">
        Na SimResolvemos você pode trabalhar de maneira autônoma e online. Quer
        fazer parte de nossa equipe? O processo é simples: preencha o formulário
        abaixo e se cadastre gratuitamente. Acesse os depoimentos em “Sobre nós”
        para saber mais sobre a experiência dos nossos professores/monitores
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto mt-8 mb-8 border-2 border-gray-400 border-solid rounded-lg p-6"
      >
        <label className="block">
          <span>Nome</span>
          <input
            type="text"
            name="name"
            ref={register({ required: true, maxLength: 100 })}
            className="form-input mt-2 block w-full"
            placeholder="John Doe"
          />
          {renderFieldError(errors.name, "Por favor digite seu nome")}
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
          <span>Telefone</span>
          <Controller
            type="text"
            name="phone"
            control={control}
            rules={{ required: true, validate: isValidNumber }}
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

        <label className="block mt-4 cursor-pointer text-sea-blue">
          <span className="block font-semibold text-sm underline">
            Enviar currículo
          </span>
          <input
            ref={register({ required: true })}
            type="file"
            name="resume"
            className="hidden"
          />
          <span className="text-sm flex items-center mt-1 font-bold">
            <img src="/vectors/file.svg" alt="Arquivos" className="w-4 mr-1" />
            {watchResume?.[0]?.name || "Nenhum arquivo selecionado."}
          </span>
          {renderFieldError(
            errors.resume as any,
            "Por favor envie seu currículo"
          )}
        </label>

        <button
          className="block bg-land-green text-white font-header font-bold mx-auto mt-8 rounded px-4 py-2 hover:opacity-75"
          type="submit"
          disabled={buttonLoading}
        >
          {buttonLoading ? <Spinner size={8} /> : "Enviar"}
        </button>
      </form>
    </div>
  );
}
