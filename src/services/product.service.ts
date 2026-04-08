import { api } from "./api.service"

export const getProduct = async() => {
    const resp = await api.get("")
    return resp.data
}
