import { useTranslation } from 'react-i18next'
import { UserIcon, DocumentTextIcon } from './Icons'

const Features = () => {
  const { t } = useTranslation()
  
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('features.jobSeekers.title')}</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <UserIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t('features.jobSeekers.buildProfile.title')}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {t('features.jobSeekers.buildProfile.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <DocumentTextIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t('features.jobSeekers.getMatched.title')}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {t('features.jobSeekers.getMatched.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('features.employers.title')}</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <DocumentTextIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t('features.employers.postJobs.title')}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {t('features.employers.postJobs.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <UserIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t('features.employers.discoverCandidates.title')}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {t('features.employers.discoverCandidates.description')}
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

export default Features 