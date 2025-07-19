import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LogoWithTitle from '../assets/Logo+Title.png'
import LanguageSelector from './LanguageSelector'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()

  // Handle scroll event to detect when to fix the navbar
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <nav 
      className={`${isScrolled ? 'fixed top-0 left-0 right-0 shadow-md' : ''} z-50 transition-all duration-300`}
      style={{ 
        backgroundColor: 'var(--color-background)',
        borderBottomWidth: '1px',
        borderBottomColor: 'var(--color-input-border)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" onClick={scrollToTop}>
                <img src={LogoWithTitle} alt="JobLinker" className="h-35 w-auto" />
              </Link>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              <Link 
                to="/job-seekers" 
                onClick={scrollToTop} 
                className="border-transparent hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                style={{ color: 'var(--color-text)' }}
              >
                {t('navbar.jobSeekers')}
              </Link>
              <Link 
                to="/employers" 
                onClick={scrollToTop} 
                className="border-transparent hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                style={{ color: 'var(--color-text)' }}
              >
                {t('navbar.employers')}
              </Link>
              <Link 
                to="/testimonials" 
                onClick={scrollToTop} 
                className="border-transparent hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                style={{ color: 'var(--color-text)' }}
              >
                {t('navbar.testimonials')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <ThemeToggle />
            <LanguageSelector />
            <Link 
              to="/login" 
              onClick={scrollToTop} 
              className="hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
              style={{ color: 'var(--color-text)' }}
            >
              {t('navbar.login')}
            </Link>
            <a href="#" className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">
              {t('navbar.postJob')}
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              style={{ color: 'var(--color-text)' }}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div 
          className="sm:hidden absolute top-16 inset-x-0 z-50 shadow-lg"
          style={{ 
            backgroundColor: 'var(--color-background)'
          }}
        >
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/job-seekers" 
              onClick={scrollToTop} 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
              style={{ color: 'var(--color-text)' }}
            >
              {t('navbar.jobSeekers')}
            </Link>
            <Link 
              to="/employers" 
              onClick={scrollToTop} 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
              style={{ color: 'var(--color-text)' }}
            >
              {t('navbar.employers')}
            </Link>
            <Link 
              to="/testimonials" 
              onClick={scrollToTop} 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
              style={{ color: 'var(--color-text)' }}
            >
              {t('navbar.testimonials')}
            </Link>
            <div className="pl-3 pr-4 py-2">
              <LanguageSelector />
            </div>
            <div className="pl-3 pr-4 py-2">
              <ThemeToggle />
            </div>
          </div>
          <div 
            className="pt-4 pb-3 border-t"
            style={{ borderColor: 'var(--color-input-border)' }}
          >
            <div className="flex items-center px-4 space-x-3">
              <Link 
                to="/login" 
                onClick={scrollToTop} 
                className="block text-base font-medium hover:text-gray-800 dark:hover:text-gray-200"
                style={{ color: 'var(--color-text)' }}
              >
                {t('navbar.login')}
              </Link>
              <a href="#" className="block text-base font-medium bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                {t('navbar.postJob')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 