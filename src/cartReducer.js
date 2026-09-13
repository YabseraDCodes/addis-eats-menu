export function cartReducer(state, dispatch) {
    switch (dispatch.type) {
      case "add":
        return [...state, dispatch.content];
      case "remove":
        return state.filter((item) => item.id !== dispatch.content);
      case "clear":
        return [];
      default:
        throw new Error("Unknown action: " + dispatch.type);
    }
  }