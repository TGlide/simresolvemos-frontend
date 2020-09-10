import { createStore, createTypedHooks, Action, action } from "easy-peasy";

export type Task = {
  taskType?: string;
  area?: string;
  subject?: string;
  level?: string;
  title?: string;
  description?: string;
  dueDate?: string;
  files?: FileList;
  wantVideo?: boolean;
};

interface TaskModel {
  data: Task;
  setData: Action<TaskModel, Task>;
}

interface UserModel {
  logged: boolean;
  data?: {
    email: string;
  };
  login: Action<UserModel, { data: UserModel["data"] }>;
  logout: Action<UserModel>;
}

interface StoreModel {
  task: TaskModel;
  user: UserModel;
}

const taskModel: TaskModel = {
  data: {},
  setData: action((state, payload) => {
    state.data = payload;
  }),
};

const userModel: UserModel = {
  logged: false,
  login: action((state, payload) => {
    state.data = payload.data;
    state.logged = true;
  }),
  logout: action((state) => {
    state.data = undefined;
    state.logged = false;
  }),
};

const storeModel: StoreModel = {
  task: taskModel,
  user: userModel,
};

// Provide our model to the helper      👇
const typedHooks = createTypedHooks<StoreModel>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

const store = createStore(storeModel);
export default store;
