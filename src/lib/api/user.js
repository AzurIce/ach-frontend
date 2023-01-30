import { postByJson, get } from "../utils/axios";

export function loginByCode(code) {
  return postByJson('/api/user/login', { code })
}

export function loginByAccount(name, password) {
  return postByJson('/api/user/login', { name, password })
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