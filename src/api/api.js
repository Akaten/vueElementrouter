/**
 * Created by Mr.Le on 2017/2/9.
 */
import axios from 'axios'

let base = ''

export const requestLogin = params => {
  return axios.post(`${base}/login`, params).then(res => res.data)
}
