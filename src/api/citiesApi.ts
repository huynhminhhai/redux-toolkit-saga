import axiosClient from 'api/axiosClient'

class CityApi {
  getAll() {
    const url = '/cities'
    return axiosClient.get(url)
  }
}

const cityApi = new CityApi()

export default cityApi
