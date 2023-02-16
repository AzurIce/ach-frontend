import { get } from "../utils/axios";

export function getServerList() {
    return get('/api/servers')
}