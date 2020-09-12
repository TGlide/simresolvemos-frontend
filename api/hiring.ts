import axios, { AxiosResponse } from "axios";

export type SendResumeData = {
  nome: string;
  email: string;
  telefone: string;
  FILES: FileList;
};

export type SendResumeResponse = {
  success: boolean;
};

export const SendResume = (
  data: SendResumeData
): Promise<AxiosResponse<SendResumeResponse>> => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  return axios.post(
    "https://resolvemos-api.herokuapp.com/api/django/work",
    formData,
    { headers }
  );
};
