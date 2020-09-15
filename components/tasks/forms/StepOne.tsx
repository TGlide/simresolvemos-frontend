import { useForm, FieldError } from "react-hook-form";
import { ReactNode, FormEvent } from "react";
import StepLayout, { renderFieldError } from "./StepLayout";

export type StepOneFormValues = {
  taskType?: string;
  area?: string;
  subject?: string;
  level?: string;
};

type StepProps = {
  defaultValues?: StepOneFormValues;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function StepOne({ onSubmit, defaultValues }: StepProps) {
  const { register, handleSubmit, errors } = useForm<StepOneFormValues>({
    defaultValues,
    mode: "all",
  });

  return (
    <StepLayout onSubmit={handleSubmit(onSubmit)}>
      <label className="block">
        <span>Tipo de tarefa</span>
        <input
          type="text"
          name="taskType"
          ref={register({ required: true, maxLength: 100 })}
          className="form-input mt-2 block w-full"
          placeholder="Redação, dever de casa..."
        />
        {renderFieldError(
          errors.taskType,
          "Por favor especifique o tipo de tarefa"
        )}
      </label>
      <label className="block mt-4">
        <span>Grande área</span>
        <input
          type="text"
          name="area"
          ref={register({ required: true, maxLength: 50 })}
          placeholder="Engenharia, Direito..."
          className="form-input mt-2 block w-full"
        />
        {renderFieldError(errors.area, "Por favor especifique uma área")}
      </label>
      <label className="block mt-4">
        <span>Matéria</span>
        <input
          type="text"
          name="subject"
          ref={register({ required: true, maxLength: 50 })}
          placeholder="Cálculo, Fisiologia..."
          className="form-input mt-2 block w-full"
        />
        {renderFieldError(
          errors.subject,
          "Por favor especifique a matéria da tarefa"
        )}
      </label>
      <label className="block mt-4">
        <span>Nível</span>
        <input
          type="text"
          name="level"
          ref={register({ required: true, maxLength: 30 })}
          placeholder="Ensino Médio, Faculdade..."
          className="form-input mt-2 block w-full"
        />
        {renderFieldError(
          errors.level,
          "Por favor especifique o nível da tarefa"
        )}
      </label>
    </StepLayout>
  );
}
