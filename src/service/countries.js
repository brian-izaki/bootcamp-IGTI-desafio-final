import axios from 'axios'

const url = "https://my-json-server.typicode.com/brian-izaki/fake-dataAPI"

const getCountries = async () => {
    return await axios.get(`${url}/countries`)
        .then(response => response.data)
        .catch(err => err)
}

export default {
    getCountries
}