const initialState = {
  value: 0
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'TEST':
			return {
				...state,
        value: action.payload
			};

    default:
      return state;
  }
};
