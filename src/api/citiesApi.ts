import axiosClient from 'api/axiosClient'
import { ListRespone } from 'models'

class CityApi {
  getAll(): Promise<ListRespone<CityApi>> {
    const url = '/cities'
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 999
      }
    })
  }
}

const cityApi = new CityApi()

export default cityApi
