import api from "./api";

export function getAll(){
    return api.get("/v1/images/search?limit=10")
}

export default getAll