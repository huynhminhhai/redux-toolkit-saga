import axiosClient from 'api/axiosClient'
import { ListParams, ListRespone } from 'models'
import { Student } from 'models/student'

class StudentApi {
  getAll(params: ListParams): Promise<ListRespone<Student>> {
    const url = '/students'
    return axiosClient.get(url, { params })
  }

  getById(id: string): Promise<Student> {
    const url = `/students/${id}`
    return axiosClient.get(url)
  }

  add(data: Student): Promise<Student> {
    const url = '/students'
    return axiosClient.post(url, data)
  }

  update(data: Student): Promise<Student> {
    const url = '/students'
    return axiosClient.patch(url, data)
  }

  remove(id: string): Promise<ListRespone<Student>> {
    const url = `/students/${id}`
    return axiosClient.delete(url)
  }
}

const studentApi = new StudentApi()
export default studentApi
