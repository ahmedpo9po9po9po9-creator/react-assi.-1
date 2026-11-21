import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const section = document.getElementById(hash.replace('#', ''))

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }

      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
