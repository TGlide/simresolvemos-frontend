import { useForm, FieldError } from "react-hook-form";
import { useState, ReactNode } from "react";

export type FormValues = {
  taskType?: string;
  area?: string;
  subject?: string;
  level?: string;
  title?: string;
  description?: string;
  dueDate?: string;
};

export default function Tasks() {
  const stepTotal = 2;

  const [taskData, setTaskData] = useState<{ [key: string]: any }>({});
  const [stepNumber, setStepNumber] = useState(0);
  const { register, handleSubmit, errors } = useForm<FormValues>();

  // Handlers
  const onSubmit = (data: FormValues) => {
    if (stepNumber === stepTotal) return;

    const newTaskData = { ...taskData, ...data };
    setTaskData(newTaskData);

    const newStepNumber = stepNumber + 1;
    setStepNumber(stepNumber + 1);

    if (newStepNumber === stepTotal) {
      alert("End of form!");
    }
  };
  console.log(errors);

  // Renderers
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

  const renderFormFields = () => {
    switch (stepNumber) {
      case 0:
        return (
          <fieldset key={stepNumber}>
            <label className="block">
              <span className="text-gray-700">Tipo de tarefa</span>
              <input
                type="text"
                name="taskType"
                ref={register({ required: true })}
                className="form-input mt-1 block w-full"
              />
              {renderFieldError(
                errors.taskType,
                "Por favor especifique o tipo de tarefa"
              )}
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Grande área</span>
              <input
                type="text"
                name="area"
                ref={register({ required: true })}
                className="form-input mt-1 block w-full"
              />
              {renderFieldError(errors.area, "Por favor especifique uma área")}
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Matéria</span>
              <input
                type="text"
                name="subject"
                ref={register({ required: true })}
                className="form-input mt-1 block w-full"
              />
              {renderFieldError(
                errors.subject,
                "Por favor especifique a matéria da tarefa"
              )}
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Nível</span>
              <input
                type="text"
                name="level"
                ref={register({ required: true })}
                className="form-input mt-1 block w-full"
              />
              {renderFieldError(
                errors.level,
                "Por favor especifique o nível da tarefa"
              )}
            </label>
          </fieldset>
        );
      case 1:
        return (
          <fieldset key={stepNumber}>
            <label className="block">
              <span className="text-gray-700">Título da tarefa</span>
              <input
                type="text"
                name="title"
                ref={register({ required: true })}
                className="form-input mt-1 block w-full"
              />
              {renderFieldError(
                errors.title,
                "Por favor especifique o título de tarefa"
              )}
            </label>
            <label className="block">
              <span className="text-gray-700">Descrição</span>
              <input
                type="text"
                name="description"
                ref={register({ required: true })}
                className="form-input mt-1 block w-full"
              />
              {renderFieldError(
                errors.description,
                "Por favor descreva brevemente a tarefa"
              )}
            </label>
            <label className="block">
              <span className="text-gray-700">Prazo de entrega</span>
              <input
                type="text"
                name="dueDate"
                ref={register({ required: true })}
                className="form-input mt-1 block w-full"
              />
              {renderFieldError(
                errors.dueDate,
                "Por favor especifique o prazo de entrega"
              )}
            </label>
          </fieldset>
        );
    }
  };

  return (
    <div>
      <header className="flex justify-center items-center mt-4">
        <img src="/vectors/notebook.svg" alt="caderno" className="w-16 h-16" />
        <h1 className="font-header font-bold text-4xl ml-4">Enviar tarefa</h1>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto mt-8 border-2 border-gray-400 border-solid rounded-lg p-6"
      >
        {renderFormFields()}
        <button
          className="block bg-land-green mx-auto mt-8 rounded-full p-2"
          type="submit"
        >
          <img src="/vectors/arrow-right.svg" alt="Próximo" />
        </button>
      </form>

      <div className="block mx-auto bg-study-black text-sea-blue p-6 mt-12 rounded">
        {JSON.stringify(taskData)}
      </div>
    </div>
  );
}
