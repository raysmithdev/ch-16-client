import { API_BASE_URL } from '../config'

const RECIEVE_USERS = 'RECIEVE_USERS'
const recieveUsers = (users) => {
  return {
    type: RECIEVE_USERS,
    users
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/users`)
    .then(response => response.json())
    .then(users => console.log(users))
  }
}

// export const fetchUsers = () => dispatch => {
//
// }
