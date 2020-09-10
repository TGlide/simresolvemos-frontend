import axios, { AxiosResponse } from "axios";

export type RegisterBody = {
  nome: string;
  sobrenome: string;
  nascimento: string;
  email: string;
  senha: string;
  telefone: string;
  is_whatsapp: boolean;
};

type RegisterResponse = {
  sucess: boolean;
  error: string[];
};

export function RegisterUser(
  body: RegisterBody
): Promise<AxiosResponse<RegisterResponse>> {
  const headers = {
    "Content-Type": "application/json",
  };

  return axios.post(
    "https://resolvemos-api.herokuapp.com/api/django/cadastro",
    body,
    { headers }
  );
}

export type LoginBody = {
  email: string;
  password: string;
};

type LoginResponse = {
  success: boolean;
};

export function LoginUser(
  body: LoginBody
): Promise<AxiosResponse<LoginResponse>> {
  const headers = {
    "Content-Type": "application/json",
  };

  return axios.post(
    "https://resolvemos-api.herokuapp.com/api/django/login",
    body,
    { headers }
  );
}
