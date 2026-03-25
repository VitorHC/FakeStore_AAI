import { api } from "./api.service"

const getProduct = async() => {
    const resp = await api.get("/products")
    return 
}