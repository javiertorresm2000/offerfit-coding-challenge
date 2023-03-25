import axios, { AxiosInstance }  from 'axios'

const intance: AxiosInstance = axios.create({
  baseURL: `/`,
  headers: {
    Accept: 'application/json',
  },
})

export default intance