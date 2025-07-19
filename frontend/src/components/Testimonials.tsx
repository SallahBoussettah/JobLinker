import { useTranslation } from 'react-i18next'
import { StarIcon } from './Icons'

const Testimonials = () => {
  const { t } = useTranslation()
  
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('testimonials.title')}</h2>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                <p className="mt-1 text-gray-600">
                  {t('testimonials.quote')}
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-900">{t('testimonials.name')}</p>
                  <p className="text-sm text-gray-500">{t('testimonials.position')}</p>
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