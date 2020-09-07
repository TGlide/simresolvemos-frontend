import { useForm, FieldError, Controller } from "react-hook-form";
import { useState, ReactNode, useEffect } from "react";
import InputMask from "react-input-mask";

type FormValues = {
  name?: string;
  email?: string;
  phone?: string;
  resume?: FileList;
};

export default function Tasks() {
  const { register, handleSubmit, errors, watch, setValue, control } = useForm<
    FormValues
  >({
    mode: "all",
  });
  const watchResume = watch("resume");

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

  useEffect(() => {
    console.log(watchResume);
  }, [watchResume]);

  return (
    <div>
      <header className="flex justify-center items-center mt-4">
        <img src="/vectors/people.svg" alt="Pessoas" className="w-18 h-18" />
        <h1 className="font-header font-bold text-4xl ml-4 mt-2">
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
        className="max-w-lg mx-auto mt-8 border-2 border-gray-400 border-solid rounded-lg p-6"
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
          <span>Telefone</span>
          <Controller
            type="text"
            name="phone"
            control={control}
            rules={{ required: true }}
            className="form-input mt-2 block w-full"
            placeholder="(21) 99999-9999"
            mask="(99) 99999-9999"
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
          <input ref={register} type="file" name="resume" className="hidden" />
          <span className="text-sm flex items-center mt-1 font-bold">
            <img src="/vectors/file.svg" alt="Arquivos" className="w-4 mr-1" />
            {watchResume?.[0]?.name || "Nenhum arquivo selecionado."}
          </span>
        </label>

        <button
          className="block bg-land-green text-white font-header font-bold mx-auto mt-8 rounded px-4 py-2 hover:opacity-75"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
