import { useTranslation } from 'react-i18next'
import { StarIcon } from './Icons'

const Testimonials = () => {
  const { t } = useTranslation()
  
  return (
    <div 
      className="py-16"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl font-bold mb-12"
          style={{ color: 'var(--color-text)' }}
        >
          {t('testimonials.title')}
        </h2>
        
        <div 
          className="rounded-lg shadow-lg overflow-hidden"
          style={{ backgroundColor: 'var(--color-input-bg)' }}
        >
          <div className="p-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <img 
                  className="h-12 w-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/17.jpg"
                  alt={t('testimonials.name')}
                />
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                </div>
                <p 
                  className="mt-1"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('testimonials.quote')}
                </p>
                <div className="mt-4">
                  <p 
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {t('testimonials.name')}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {t('testimonials.position')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials 