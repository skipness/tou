const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_INDEX':
      return {
        ...state,
        imagePreview: { selectedIndex: action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
