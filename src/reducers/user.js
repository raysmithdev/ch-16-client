const initialState = {
  name: 'Ray'
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'RECIEVE_USERS' :
      return {}

    default :
      return state
  }
}

export default user
