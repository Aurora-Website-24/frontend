import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HackathonPage from './pages/HackathonPage'
import HackathonForm from './pages/HackathonForm'
import Login from './pages/Login'
import RegisterForm from './pages/RegisterForm'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          {/* <MainPage/> */}
          {/* <HackathonForm /> */}
          <RegisterForm />
        </>
      ),
    },

    {
      path: '/login',
      element: (
        <>
          <Login />
        </>
      ),
    },

    {
      path: '/register',
      element: (
        <>
          <Login />
        </>
      ),
    },

    {
      path: '/registration-form',
      element: <>{/* <Register /> */}</>,
    },

    {
      path: '/hackathon-registration',
      element: <>{/* <HackathonRegistration /> */}</>,
    },

    {
      path: '/hackathon',
      element: (
        <>
          <HackathonPage />
        </>
      ),
    },

    {
      path: '/*',
      element: <>{/* <Error /> */}</>,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
