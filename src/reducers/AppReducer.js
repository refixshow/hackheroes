const AppReducer = (state, action) => {
    switch (action.type) {
      case 'fill':
        return {users: action.payload.data};
      default:
        throw new Error();
    }
  }

export default AppReducer