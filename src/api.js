import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertVote = payload => api.post(`/vote`, payload)
export const getAllVotes = () => api.get(`/votes`)

const apis = {
    insertVote,
    getAllVotes
}

export default apis