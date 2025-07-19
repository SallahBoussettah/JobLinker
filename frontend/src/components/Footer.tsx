import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { t } = useTranslation()
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <footer 
      className="border-t" 
      style={{ 
        backgroundColor: 'var(--color-background)',
        borderColor: 'var(--color-input-border)'
      }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: 'var(--color-text)' }}
            >
              {t('footer.joblinker')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link 
                  to="/job-seekers" 
                  onClick={scrollToTop} 
                  className="text-base hover:text-gray-900 dark:hover:text-gray-300"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('footer.forSeekers')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/employers" 
                  onClick={scrollToTop} 
                  className="text-base hover:text-gray-900 dark:hover:text-gray-300"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('footer.forEmployer')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/testimonials" 
                  onClick={scrollToTop} 
                  className="text-base hover:text-gray-900 dark:hover:text-gray-300"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('testimonials.title')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: 'var(--color-text)' }}
            >
              {t('footer.resources')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="#" 
                  onClick={scrollToTop} 
                  className="text-base hover:text-gray-900 dark:hover:text-gray-300"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('footer.helpCenter')}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={scrollToTop} 
                  className="text-base hover:text-gray-900 dark:hover:text-gray-300"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('footer.blog')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: 'var(--color-text)' }}
            >
              {t('footer.legal')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="#" 
                  onClick={scrollToTop} 
                  className="text-base hover:text-gray-900 dark:hover:text-gray-300"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('footer.privacyPolicy')}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={scrollToTop} 
                  className="text-base hover:text-gray-900 dark:hover:text-gray-300"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('footer.termsOfService')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: 'var(--color-text)' }}
            >
              {t('footer.contactUs')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="mailto:info@joblinker.com" 
                  className="text-base hover:text-gray-900 dark:hover:text-gray-300"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div 
          className="mt-12 border-t pt-8"
          style={{ borderColor: 'var(--color-input-border)' }}
        >
          <p 
            className="text-base"
            style={{ color: 'var(--color-text)' }}
          >
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 