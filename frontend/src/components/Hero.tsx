import { useTranslation } from 'react-i18next'
import HeroImage from '../assets/HeroImage.png'

const Hero = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className={`text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left ${isRTL ? 'rtl-text' : ''}`}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{t('hero.title.line1')}</span>
              <span className="block">{t('hero.title.line2')}</span>
              <span className="block">{t('hero.title.line3')}</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {t('hero.description')}
            </p>
            <div className={`mt-8 sm:max-w-lg sm:mx-auto text-center lg:text-left lg:mx-0 ${isRTL ? 'rtl-buttons' : ''}`}>
              <div className={`flex flex-col sm:flex-row ${isRTL ? 'sm:justify-end' : 'sm:justify-center'} ${isRTL ? 'lg:justify-end' : 'lg:justify-start'} gap-4`}>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  {t('hero.createCV')}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  {t('hero.postJob')}
                </a>
              </div>
            </div>
          </div>
          <div className={`hidden lg:block mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center ${isRTL ? 'lg:pl-4' : ''}`}>
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src={HeroImage}
                alt={t('hero.createCV')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 