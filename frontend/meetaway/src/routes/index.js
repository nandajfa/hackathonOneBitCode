import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Schedule from '../pages/Schedule'
import { PrivateRoute } from './privateRoute'
import Dashboard from '../pages/Layout'
import NewService from '../components/NewService'
// import ServiceForm from '../components/servicesForm'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/schedule" element={<Schedule />} />

        <Route path="/menu" element={<Dashboard />} />
        <Route path="/new" element={<NewService />} />

        <Route path="*" element={<Login />} />
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/services"
          element={<PrivateRoute>{/* <ServiceForm /> */}</PrivateRoute>}
        />
        <Route
          path="/edit-services"
          element={<PrivateRoute>{/* <ServiceForm /> */}</PrivateRoute>}
        />
        {/* <Route
          path="/availability"
          element={
            <PrivateRoute>
              <ServiceForm />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/manager"
          element={<PrivateRoute>{/* <ServiceForm /> */}</PrivateRoute>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
