import axios from 'axios'

export const getAdverts = async () => {
    const response = await axios({ url: `https://65fd67169fc4425c6531dbaa.mockapi.io/adverts`, method: "GET" })
    return response.data
}

export const addAdvert = async (data) => {
    return await axios.post('https://65fd67169fc4425c6531dbaa.mockapi.io/adverts', data) 
}

export const deleteAdvert = async (id) => {
    return await axios.delete(`https://65fd67169fc4425c6531dbaa.mockapi.io/adverts/${id}`)
}