import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertVote = payload => api.post(`/vote`, payload)

const apis = {
    insertVote,
}

export default apis