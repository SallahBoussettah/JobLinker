import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LogoWithTitle from '../assets/LoginLogo.png'
import GoogleIcon from '../assets/google-icon.svg'
import LinkedInIcon from '../assets/linkedin-icon.svg'

const Login = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [userType, setUserType] = useState<'jobSeeker' | 'employer'>('jobSeeker')

  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <img src={LogoWithTitle} alt="JobLinker" className="h-16 mx-auto" />
        </div>

        {/* User Type Selector */}
        <div className="flex rounded-md shadow-sm mb-8">
          <button
            type="button"
            onClick={() => setUserType('jobSeeker')}
            className={`${
              userType === 'jobSeeker'
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-200 dark:hover:bg-gray-600'
            } flex-1 py-3 px-4 text-center text-sm font-medium ${
              isRTL ? 'rounded-r-md' : 'rounded-l-md'
            } transition-colors`}
            style={{
              backgroundColor: userType === 'jobSeeker' ? 'var(--color-primary, #2563eb)' : 'var(--color-input-bg)',
              color: userType === 'jobSeeker' ? 'white' : 'var(--color-text)',
            }}
          >
            {t('login.jobSeeker')}
          </button>
          <button
            type="button"
            onClick={() => setUserType('employer')}
            className={`${
              userType === 'employer'
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-200 dark:hover:bg-gray-600'
            } flex-1 py-3 px-4 text-center text-sm font-medium ${
              isRTL ? 'rounded-l-md' : 'rounded-r-md'
            } transition-colors`}
            style={{
              backgroundColor: userType === 'employer' ? 'var(--color-primary, #2563eb)' : 'var(--color-input-bg)',
              color: userType === 'employer' ? 'white' : 'var(--color-text)',
            }}
          >
            {t('login.employer')}
          </button>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={t('login.email')}
              className="appearance-none block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              style={{
                backgroundColor: 'var(--color-input-bg)',
                color: 'var(--color-input-text)',
                borderColor: 'var(--color-input-border)',
              }}
            />
          </div>

          <div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder={t('login.password')}
              className="appearance-none block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              style={{
                backgroundColor: 'var(--color-input-bg)',
                color: 'var(--color-input-text)',
                borderColor: 'var(--color-input-border)',
              }}
            />
          </div>

          <div className={`text-${isRTL ? 'left' : 'right'}`}>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              {t('login.forgotPassword')}
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {t('login.logIn')}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {t('login.noAccount', "Don't have an account? ")}
            <Link 
              to="/register" 
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {t('login.signUp', 'Sign Up!')}
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" style={{ borderColor: 'var(--color-input-border)' }}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2" style={{ 
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text-secondary)' 
              }}>
                {t('login.or')}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <button
            type="button"
            className="w-full flex items-center justify-center py-3 px-4 border rounded-md shadow-sm text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            style={{
              backgroundColor: 'var(--color-input-bg)',
              color: 'var(--color-input-text)',
              borderColor: 'var(--color-input-border)',
            }}
          >
            <img src={GoogleIcon} alt="Google" className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} onError={(e) => {
              e.currentTarget.src = 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/google.svg';
            }} />
            {t('login.signInWithGoogle')}
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center py-3 px-4 border rounded-md shadow-sm text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            style={{
              backgroundColor: 'var(--color-input-bg)',
              color: 'var(--color-input-text)',
              borderColor: 'var(--color-input-border)',
            }}
          >
            <img src={LinkedInIcon} alt="LinkedIn" className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} onError={(e) => {
              e.currentTarget.src = 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg';
            }} />
            {t('login.signInWithLinkedIn')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login 