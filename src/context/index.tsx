import { createContext, Dispatch, useReducer } from "react";
import { reducer } from "./reducer";

export type InitialStateType = {
  activeBg: {
    id: number;
    duration: number;
    timeLapsed: number;
  };
};

export type InitialContextType = {
  state: InitialStateType;
  dispatch: Dispatch<BgChangeActionType>;
};

export type BgChangeActionType = {
  type: "Next" | "Prev" | "Active" | "Running";
  payload?: {
    id?: number;
    duration?: number;
    timeLapsed?: number;
  };
};

export const initialState: InitialStateType = {
  activeBg: {
    id: 1,
    duration: 1,
    timeLapsed: 0,
  },
};

const initialContext: InitialContextType = {
  state: initialState,
  dispatch: () => {},
};
const GlobalContext = createContext<InitialContextType>(initialContext);

export default function GlobalContextProvider({
  children,
}: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext };
