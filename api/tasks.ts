import axios, { AxiosResponse } from "axios";

export type SendTaskData = {
  user_email: string;
  tarefa: string;
  area: string;
  subject: string;
  level: string;
  title: string;
  description: string;
  FILES: FileList;
  "delivery-value": string;
  "want-video": boolean;
  video_questions: string;
};

export type SendTaskResponse = {
  success: boolean;
};

export const SendTask = (
  data: SendTaskData
): Promise<AxiosResponse<SendTaskResponse>> => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  return axios.post(
    "https://resolvemos-api.herokuapp.com/api/django/formulario",
    formData,
    { headers }
  );
};
