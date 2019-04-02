const defaultState = {
  inputValue: '',
  list: []
}
//reducer 可以接受state但是不能修改state，需要对state进行深拷贝
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState
  }
  if (action.type === 'add_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...state.list, state.inputValue]
    newState.inputValue = '';
    return newState;
  }
  return state;
}