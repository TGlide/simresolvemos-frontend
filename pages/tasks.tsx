import { useState } from "react";
import StepOne from "../components/tasks/forms/StepOne";
import StepTwo from "../components/tasks/forms/StepTwo";
import { useStoreState, useStoreActions, Task } from "../store";
import { useRouter } from "next/router";

export default function Tasks() {
  const stepTotal = 2;

  const [stepsData, setStepsData] = useState<{ [key: string]: any }[]>([]);
  const [stepNumber, setStepNumber] = useState(0);
  const logged = useStoreState((state) => state.user.logged);
  const setTasks = useStoreActions((actions) => actions.task.setData);
  const router = useRouter();

  // Handlers
  const handleGoToStep = (step: number) => {
    setStepNumber(step);
  };

  const handleSubmitStep = (data: { [key: string]: any }) => {
    const newStepsData: { [key: string]: any }[] = [...stepsData];
    newStepsData[stepNumber] = { ...data };

    setStepsData(newStepsData);

    const newStepNumber = stepNumber + 1;
    if (newStepNumber === stepTotal) {
      let taskData: Task = {};
      for (let step of newStepsData) {
        taskData = { ...taskData, ...step };
      }

      setTasks(taskData);

      if (!logged) {
        router.push("/auth/login?fromTask=true");
      }
    } else {
      setStepNumber(newStepNumber);
    }
  };

  // Renderers
  const renderSteps = () => {
    const steps = [];

    for (let idx = 0; idx < stepTotal; idx++) {
      const clickHandler =
        idx > stepNumber ? undefined : () => handleGoToStep(idx);

      let color = "bg-sea-blue";
      let cursor = "cursor-default";

      if (idx < stepNumber) {
        color = "bg-land-green";
        cursor = "cursor-pointer";
      } else if (idx > stepNumber) color = "bg-transparent";

      const step = (
        <button
          onClick={clickHandler}
          key={idx}
          className={`w-5 h-5 border-2 border-gray-500 border-opacity-50 border-solid rounded-full ${color} ${cursor} ${
            idx !== stepTotal - 1 && "mr-8"
          }`}
        />
      );
      steps.push(step);
    }

    return steps;
  };

  return (
    <div>
      <header className="flex justify-center items-center mt-4">
        <img src="/vectors/notebook.svg" alt="caderno" className="w-16 h-16" />
        <h1 className="font-header font-bold text-4xl ml-4">Enviar tarefa</h1>
      </header>

      {/* Steps */}
      <div className="flex justify-center items-center mt-4">
        {renderSteps()}
      </div>

      {stepNumber === 0 && (
        <StepOne
          onSubmit={handleSubmitStep}
          defaultValues={stepsData[0] || undefined}
        />
      )}
      {stepNumber === 1 && (
        <StepTwo
          onSubmit={handleSubmitStep}
          defaultValues={stepsData[1] || undefined}
        />
      )}
    </div>
  );
}
