import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import JobSeekers from './pages/JobSeekers'
import Employers from './pages/Employers'
import TestimonialsPage from './pages/TestimonialsPage'
import Login from './pages/Login'
import Register from './pages/Register'

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${isScrolled ? 'pt-16' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'job-seekers',
        element: <JobSeekers />
      },
      {
        path: 'employers',
        element: <Employers />
      },
      {
        path: 'testimonials',
        element: <TestimonialsPage />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
