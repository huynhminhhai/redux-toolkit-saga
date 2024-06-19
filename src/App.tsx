import { useEffect } from 'react'
import cityApi from 'api/citiesApi'
import { Route, Routes } from 'react-router-dom'
import LoginPage from 'features/auth/page/LoginPage'
import { Admin } from 'components/Layout'
import { NotFound, PrivateRoute } from 'components/Common'

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res))
  }, [])

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/admin'
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
