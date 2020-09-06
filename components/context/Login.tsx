import {
  createContext,
  ReactNode,
  useReducer,
  useContext,
  Dispatch,
} from "react";

const LoginStateContext = createContext<boolean>(false);
const LoginDispatchContext = createContext(
  {} as Dispatch<{ type: LoginActions }>
);

export enum LoginActions {
  LOGIN = "login",
  LOGOUT = "logout",
}

const reducer = (state: boolean, action: { type: LoginActions }) => {
  switch (action.type) {
    case LoginActions.LOGIN:
      return true;
    case LoginActions.LOGOUT:
      return false;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

type LoginProviderProps = {
  children: ReactNode;
};

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [state, dispatch] = useReducer(reducer, false);
  return (
    <LoginDispatchContext.Provider value={dispatch}>
      <LoginStateContext.Provider value={state}>
        {children}
      </LoginStateContext.Provider>
    </LoginDispatchContext.Provider>
  );
};

export const useLogin = () => useContext(LoginStateContext);
export const useDispatchLogin = () => useContext(LoginDispatchContext);
