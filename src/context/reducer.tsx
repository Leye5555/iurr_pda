import { BgChangeActionType, initialState, InitialStateType } from "./index";

const reducer = (
  state: InitialStateType = initialState,
  action: BgChangeActionType
): InitialStateType => {
  const max = 3;
  const min = 1;
  switch (action.type) {
    case "Next":
      if (state.activeBg.id >= max)
        return { ...state, activeBg: { ...state.activeBg, id: 1 } };
      return {
        ...state,
        activeBg: { ...state.activeBg, id: state.activeBg.id + 1 },
      };
    case "Prev":
      if (state.activeBg.id <= min)
        return { ...state, activeBg: { ...state.activeBg, id: 3 } };
      return {
        ...state,
        activeBg: { ...state.activeBg, id: state.activeBg.id - 1 },
      };
    case "Active":
      return {
        ...state,
        activeBg: {
          ...state.activeBg,
          id: action.payload!.id || 1,
          duration: action.payload!.duration || 1,
        },
      };
    case "Running":
      return {
        ...state,
        activeBg: {
          ...state.activeBg,
          timeLapsed: action.payload!.timeLapsed || 0,
        },
      };
    default:
      return state;
  }
};

export { reducer };
