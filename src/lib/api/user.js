import { postByJson, get } from "../utils/axios";

export function loginByCode(code) {
  return postByJson('/api/user/login', { code })
}

export function loginByAccount(name, password) {
  return postByJson('/api/user/login', { name, password })
}

export function isAdmin() {
  return get('/api/user/isAdmin')
}