import axiosInstance from "./axios"




export const getUsers = async () => {
    return await axiosInstance.get('/users')
}

export const getAnnonces = async () => {
    return await axiosInstance.get('/annonces')
}
