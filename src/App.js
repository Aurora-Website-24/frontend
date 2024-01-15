

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HackathonPage from './pages/HackathonPage';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import RegisterForm from './pages/RegisterForm';
import HackathonForm from './pages/HackathonForm'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
        <MainPage/> 

        </>
      ),
    },

    {
      path: '/login',
      element: (
        <>
          <Login/>
        </>
      ),
    },

    {
      path: '/register',
      element: (
        <>
          <Login/>
        </>
      ),
    },

    {
      path: '/registration-form',
      element: (
        <>
                    <RegisterForm/>
        </>
      ),
    },

    {
      path: '/hackathon-registration',
      element: (
        <>
          <HackathonForm />
        </>
      ),
    },

    {
      path: '/hackathon',
      element: (
        <>
          <HackathonPage/>
        </>
      ),
    },

    {
      path: '/*',
      element: (
        <>
          {/* <Error /> */}
        </>
      ),
    },

    {
      path: '/hackathon',
      element: (
        <>
          <HackathonPage />
        </>
      ),
    },

  ]);

  return (
    <div className="App">

      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
