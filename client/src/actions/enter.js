import axios from 'axios'

export const enter = (entry) => dispatch => {
  const url = '/api/entries/enter'
  const token = localStorage.getItem('jwtToken')
  const config = {
    headers: {
      Authorization: token
    }
  }
  axios.post(url, entry, config)
}
