import { postByJson, get } from "../utils/axios";

export function loginByCode(code) {
  return postByJson('/api/user/login', { code })
}

export function loginByAccount(username, password) {
  return postByJson('/api/user/login', { username, password })
}

export function isAdmin() {
  // console.log("API - isAdmin")
  return get('/api/user/isAdmin')
}

export function registerByCode(code) {
  return postByJson('/api/admin/user/register', { code })
}

export function getUserList() {
  return get('/api/admin/user')
}

export function getUserInfo() {

}