import axios, { AxiosResponse } from "axios";

export type SendResumeData = {
  nome: string;
  email: string;
  telefone: string;
  resume: FileList;
};

export type SendResumeResponse = {
  success: boolean;
};

export const SendResume = (
  data: SendResumeData
): Promise<AxiosResponse<SendResumeResponse>> => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    if (key !== "resume") formData.append(key, data[key]);
  });

  formData.append("resume", data.resume[0]);
  const headers = {
    "Content-Type": "multipart/form-data",
  };

  return axios.post(
    "https://resolvemos-api.herokuapp.com/api/django/work",
    formData,
    { headers }
  );
};
