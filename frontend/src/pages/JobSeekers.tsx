import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import CVBuilderImage from '../assets/cv-builder.jpg'

const JobSeekers = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div 
      className="py-12"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 
            className="text-4xl font-bold sm:text-5xl"
            style={{ color: 'var(--color-text)' }}
          >
            {t('jobSeekers.title')}
          </h1>
          <p 
            className="mt-4 text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {t('jobSeekers.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div 
          className="mt-12 border-b"
          style={{ borderColor: 'var(--color-input-border)' }}
        >
          <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('profile')}
              className={`${
                activeTab === 'profile'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              style={{ 
                color: activeTab === 'profile' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
              }}
            >
              {t('jobSeekers.tabs.profile')}
            </button>
            <button
              onClick={() => setActiveTab('cv')}
              className={`${
                activeTab === 'cv'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              style={{ 
                color: activeTab === 'cv' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
              }}
            >
              {t('jobSeekers.tabs.cv')}
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`${
                activeTab === 'jobs'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              style={{ 
                color: activeTab === 'jobs' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
              }}
            >
              {t('jobSeekers.tabs.jobs')}
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-10">
          {activeTab === 'profile' && (
            <div className={`lg:grid lg:grid-cols-12 lg:gap-8 ${isRTL ? 'rtl-grid' : ''}`}>
              <div className={`lg:col-span-6 ${isRTL ? 'rtl-text' : ''}`}>
                <h2 
                  className="text-3xl font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('jobSeekers.profile.title')}
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {t('jobSeekers.profile.description')}
                </p>
                <div className={`mt-8 ${isRTL ? 'rtl-buttons' : ''}`}>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {t('jobSeekers.profile.createButton')}
                  </a>
                </div>
                <div className="mt-8">
                  <h3 
                    className="text-xl font-semibold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {t('jobSeekers.profile.benefits.title')}
                  </h3>
                  <ul className={`mt-4 space-y-4 ${isRTL ? 'rtl-list' : ''}`}>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p 
                        className="ml-3 text-base"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {t('jobSeekers.profile.benefits.item1')}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p 
                        className="ml-3 text-base"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {t('jobSeekers.profile.benefits.item2')}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p 
                        className="ml-3 text-base"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {t('jobSeekers.profile.benefits.item3')}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-span-6">
                <div className="relative mx-auto w-full rounded-lg shadow-lg">
                  <img
                    className="w-full rounded-lg"
                    src={CVBuilderImage}
                    alt={t('jobSeekers.profile.imageAlt')}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cv' && (
            <div className={`lg:grid lg:grid-cols-12 lg:gap-8 ${isRTL ? 'rtl-grid' : ''}`}>
              <div className={`lg:col-span-6 ${isRTL ? 'rtl-text' : ''}`}>
                <h2 
                  className="text-3xl font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('jobSeekers.cv.title')}
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {t('jobSeekers.cv.description')}
                </p>
                <div className={`mt-8 ${isRTL ? 'rtl-buttons' : ''}`}>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 mr-4"
                  >
                    {t('jobSeekers.cv.uploadButton')}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border rounded-md text-base font-medium"
                    style={{
                      backgroundColor: 'var(--color-input-bg)',
                      color: 'var(--color-text)',
                      borderColor: 'var(--color-input-border)'
                    }}
                  >
                    {t('jobSeekers.cv.buildButton')}
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-span-6">
                <div 
                  className="p-6 rounded-lg shadow"
                  style={{ backgroundColor: 'var(--color-input-bg)' }}
                >
                  <h3 
                    className="text-xl font-semibold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {t('jobSeekers.cv.templates.title')}
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div 
                      className="p-4 rounded border hover:border-blue-500 cursor-pointer"
                      style={{ 
                        backgroundColor: 'var(--color-input-bg)',
                        borderColor: 'var(--color-input-border)'
                      }}
                    >
                      <p 
                        className="font-medium"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {t('jobSeekers.cv.templates.modern')}
                      </p>
                    </div>
                    <div 
                      className="p-4 rounded border hover:border-blue-500 cursor-pointer"
                      style={{ 
                        backgroundColor: 'var(--color-input-bg)',
                        borderColor: 'var(--color-input-border)'
                      }}
                    >
                      <p 
                        className="font-medium"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {t('jobSeekers.cv.templates.classic')}
                      </p>
                    </div>
                    <div 
                      className="p-4 rounded border hover:border-blue-500 cursor-pointer"
                      style={{ 
                        backgroundColor: 'var(--color-input-bg)',
                        borderColor: 'var(--color-input-border)'
                      }}
                    >
                      <p 
                        className="font-medium"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {t('jobSeekers.cv.templates.creative')}
                      </p>
                    </div>
                    <div 
                      className="p-4 rounded border hover:border-blue-500 cursor-pointer"
                      style={{ 
                        backgroundColor: 'var(--color-input-bg)',
                        borderColor: 'var(--color-input-border)'
                      }}
                    >
                      <p 
                        className="font-medium"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {t('jobSeekers.cv.templates.professional')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'jobs' && (
            <div className={`${isRTL ? 'rtl-text' : ''}`}>
              <h2 
                className="text-3xl font-bold"
                style={{ color: 'var(--color-text)' }}
              >
                {t('jobSeekers.jobs.title')}
              </h2>
              <p 
                className="mt-4 text-lg"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {t('jobSeekers.jobs.description')}
              </p>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {[1, 2, 3, 4].map((job) => (
                  <div 
                    key={job} 
                    className="p-6 rounded-lg shadow border hover:border-blue-500"
                    style={{ 
                      backgroundColor: 'var(--color-input-bg)',
                      borderColor: 'var(--color-input-border)'
                    }}
                  >
                    <h3 
                      className="text-xl font-semibold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {t(`jobSeekers.jobs.listing${job}.title`)}
                    </h3>
                    <p 
                      className="mt-2 text-sm"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {t(`jobSeekers.jobs.listing${job}.company`)}
                    </p>
                    <p 
                      className="mt-4 text-base"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {t(`jobSeekers.jobs.listing${job}.description`)}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span 
                        className="text-sm"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {t(`jobSeekers.jobs.listing${job}.location`)}
                      </span>
                      <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        {t('jobSeekers.jobs.viewButton')}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobSeekers 