import { useForm, FieldError } from "react-hook-form";
import { ReactNode, FormEvent, ChangeEvent, useState } from "react";
import StepLayout, { renderFieldError } from "./StepLayout";
import Tooltip from "../../shared/Tooltip";

type FormValues = {
  title?: string;
  description?: string;
  dueDate?: string;
  files?: FileList;
  wantVideo?: boolean;
};

type StepProps = {
  defaultValues?: FormValues;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function StepTwo({ onSubmit, defaultValues }: StepProps) {
  const { register, handleSubmit, errors, watch, setValue } = useForm<
    FormValues
  >({
    defaultValues,
    mode: "all",
  });
  const watchFiles = watch("files");
  const [filesError, setFilesError] = useState<boolean>(false);

  // Handlers
  const onFilesChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files.length > 10) {
      setFilesError(true);
    } else {
      setFilesError(false);
    }
  };

  return (
    <StepLayout onSubmit={handleSubmit(onSubmit)}>
      <label className="block ">
        <span>Título da tarefa</span>
        <input
          type="text"
          name="title"
          ref={register({ required: true })}
          className="form-input mt-2 block w-full"
        />
        {renderFieldError(
          errors.title,
          "Por favor especifique o título de tarefa"
        )}
      </label>
      <label className="block mt-4">
        <span>Descrição</span>
        <textarea
          name="description"
          ref={register({ required: true })}
          className="form-textarea mt-2 block w-full"
        />
        {renderFieldError(
          errors.description,
          "Por favor descreva brevemente a tarefa"
        )}
      </label>

      <label className="block mt-4 cursor-pointer text-sea-blue">
        <span className="block font-semibold text-sm underline">
          Selecionar arquivos
        </span>
        <input
          ref={register}
          onChange={onFilesChange}
          type="file"
          name="files"
          className="hidden"
          multiple
        />
        <span className="text-sm flex items-center mt-1 font-bold">
          <img src="/vectors/file.svg" alt="Arquivos" className="w-4 mr-1" />{" "}
          {watchFiles?.length || 0}
          /10
        </span>
        {filesError && (
          <span className="text-red-400 text-sm font-medium">
            Por favor, selecione no máximo 10 arquivos
          </span>
        )}
      </label>

      <label className="block mt-4">
        <span>Prazo de entrega</span>
        <input
          type="text"
          name="dueDate"
          ref={register({ required: true })}
          className="form-input mt-2 block w-full"
        />
        {renderFieldError(
          errors.dueDate,
          "Por favor especifique o prazo de entrega"
        )}
      </label>

      <label className="inline-flex items-center mt-4 cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox text-land-green"
          ref={register}
          name="want_video"
        />
        <span className="ml-2">Quero um vídeo explicativo</span>
        <Tooltip text="Vídeos explicativos feitos por nossos monitores para ajudar você a entender a questão que você está em dúvida. São vídeos claros e objetivos de 5 - 12 minutos.">
          <span className="flex justify-center items-center bg-land-green bg-opacity-75 rounded-full font-bold text-white w-6 h-6 ml-2 mt-px">
            ?
          </span>
        </Tooltip>
      </label>

      <label className="inline-flex items-start mt-4 cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox text-land-green mt-1"
          ref={register({ required: true })}
          name="agree_terms"
        />
        <span className="text-sm opacity-75 ml-2">
          Estou ciente que a tarefa será realizada usando de base as informações
          enviadas. Para que sua tarefa seja feita com excelência envie todas as
          informações corretas e necessárias.
        </span>
      </label>
    </StepLayout>
  );
}
