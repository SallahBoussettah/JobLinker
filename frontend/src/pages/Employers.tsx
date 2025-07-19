import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Employers = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [activeTab, setActiveTab] = useState('post')

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
            {t('employers.title')}
          </h1>
          <p 
            className="mt-4 text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {t('employers.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div 
          className="mt-12 border-b"
          style={{ borderColor: 'var(--color-input-border)' }}
        >
          <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('post')}
              className={`${
                activeTab === 'post'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              style={{ 
                color: activeTab === 'post' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
              }}
            >
              {t('employers.tabs.post')}
            </button>
            <button
              onClick={() => setActiveTab('candidates')}
              className={`${
                activeTab === 'candidates'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              style={{ 
                color: activeTab === 'candidates' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
              }}
            >
              {t('employers.tabs.candidates')}
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`${
                activeTab === 'dashboard'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              style={{ 
                color: activeTab === 'dashboard' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
              }}
            >
              {t('employers.tabs.dashboard')}
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-10">
          {activeTab === 'post' && (
            <div className={`lg:grid lg:grid-cols-12 lg:gap-8 ${isRTL ? 'rtl-grid' : ''}`}>
              <div className={`lg:col-span-6 ${isRTL ? 'rtl-text' : ''}`}>
                <h2 
                  className="text-3xl font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('employers.post.title')}
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {t('employers.post.description')}
                </p>
                <div className={`mt-8 ${isRTL ? 'rtl-buttons' : ''}`}>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {t('employers.post.createButton')}
                  </a>
                </div>
                <div className="mt-8">
                  <h3 
                    className="text-xl font-semibold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {t('employers.post.benefits.title')}
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
                        {t('employers.post.benefits.item1')}
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
                        {t('employers.post.benefits.item2')}
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
                        {t('employers.post.benefits.item3')}
                      </p>
                    </li>
                  </ul>
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
                    {t('employers.post.form.title')}
                  </h3>
                  <form className="mt-6 space-y-6">
                    <div>
                      <label 
                        htmlFor="job-title" 
                        className="block text-sm font-medium"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {t('employers.post.form.jobTitle')}
                      </label>
                      <input
                        type="text"
                        id="job-title"
                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        style={{
                          backgroundColor: 'var(--color-input-bg)',
                          color: 'var(--color-text)',
                          borderColor: 'var(--color-input-border)'
                        }}
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="job-description" 
                        className="block text-sm font-medium"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {t('employers.post.form.jobDescription')}
                      </label>
                      <textarea
                        id="job-description"
                        rows={4}
                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        style={{
                          backgroundColor: 'var(--color-input-bg)',
                          color: 'var(--color-text)',
                          borderColor: 'var(--color-input-border)'
                        }}
                      ></textarea>
                    </div>
                    <div>
                      <label 
                        htmlFor="job-location" 
                        className="block text-sm font-medium"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {t('employers.post.form.location')}
                      </label>
                      <input
                        type="text"
                        id="job-location"
                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        style={{
                          backgroundColor: 'var(--color-input-bg)',
                          color: 'var(--color-text)',
                          borderColor: 'var(--color-input-border)'
                        }}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {t('employers.post.form.submitButton')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'candidates' && (
            <div className={`lg:grid lg:grid-cols-12 lg:gap-8 ${isRTL ? 'rtl-grid' : ''}`}>
              <div className={`lg:col-span-6 ${isRTL ? 'rtl-text' : ''}`}>
                <h2 
                  className="text-3xl font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('employers.candidates.title')}
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {t('employers.candidates.description')}
                </p>
                <div className={`mt-8 ${isRTL ? 'rtl-buttons' : ''}`}>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {t('employers.candidates.searchButton')}
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
                    {t('employers.candidates.filters.title')}
                  </h3>
                  <div className="mt-6 space-y-6">
                    <div>
                      <label 
                        htmlFor="skills" 
                        className="block text-sm font-medium"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {t('employers.candidates.filters.skills')}
                      </label>
                      <input
                        type="text"
                        id="skills"
                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        style={{
                          backgroundColor: 'var(--color-input-bg)',
                          color: 'var(--color-text)',
                          borderColor: 'var(--color-input-border)'
                        }}
                        placeholder={t('employers.candidates.filters.skillsPlaceholder')}
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="experience" 
                        className="block text-sm font-medium"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {t('employers.candidates.filters.experience')}
                      </label>
                      <select
                        id="experience"
                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        style={{
                          backgroundColor: 'var(--color-input-bg)',
                          color: 'var(--color-text)',
                          borderColor: 'var(--color-input-border)'
                        }}
                      >
                        <option value="any">{t('employers.candidates.filters.any')}</option>
                        <option value="entry">{t('employers.candidates.filters.entry')}</option>
                        <option value="mid">{t('employers.candidates.filters.mid')}</option>
                        <option value="senior">{t('employers.candidates.filters.senior')}</option>
                      </select>
                    </div>
                    <div>
                      <label 
                        htmlFor="location" 
                        className="block text-sm font-medium"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {t('employers.candidates.filters.location')}
                      </label>
                      <input
                        type="text"
                        id="location"
                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        style={{
                          backgroundColor: 'var(--color-input-bg)',
                          color: 'var(--color-text)',
                          borderColor: 'var(--color-input-border)'
                        }}
                        placeholder={t('employers.candidates.filters.locationPlaceholder')}
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {t('employers.candidates.filters.applyButton')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className={`lg:grid lg:grid-cols-12 lg:gap-8 ${isRTL ? 'rtl-grid' : ''}`}>
              <div className={`lg:col-span-6 ${isRTL ? 'rtl-text' : ''}`}>
                <h2 
                  className="text-3xl font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {t('employers.dashboard.title')}
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {t('employers.dashboard.description')}
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div 
                    className="p-4 rounded-lg shadow border"
                    style={{ 
                      backgroundColor: 'var(--color-input-bg)',
                      borderColor: 'var(--color-input-border)'
                    }}
                  >
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {t('employers.dashboard.stats.activeJobs')}
                    </p>
                    <p 
                      className="mt-2 text-3xl font-bold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      12
                    </p>
                  </div>
                  <div 
                    className="p-4 rounded-lg shadow border"
                    style={{ 
                      backgroundColor: 'var(--color-input-bg)',
                      borderColor: 'var(--color-input-border)'
                    }}
                  >
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {t('employers.dashboard.stats.applications')}
                    </p>
                    <p 
                      className="mt-2 text-3xl font-bold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      48
                    </p>
                  </div>
                  <div 
                    className="p-4 rounded-lg shadow border"
                    style={{ 
                      backgroundColor: 'var(--color-input-bg)',
                      borderColor: 'var(--color-input-border)'
                    }}
                  >
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {t('employers.dashboard.stats.interviews')}
                    </p>
                    <p 
                      className="mt-2 text-3xl font-bold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      8
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-span-6">
                <div 
                  className="overflow-hidden shadow rounded-lg"
                  style={{ backgroundColor: 'var(--color-input-bg)' }}
                >
                  <div className="px-4 py-5 sm:px-6">
                    <h3 
                      className="text-lg leading-6 font-medium"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {t('employers.dashboard.recentJobs.title')}
                    </h3>
                  </div>
                  <div 
                    className="border-t"
                    style={{ borderColor: 'var(--color-input-border)' }}
                  >
                    <table 
                      className="min-w-full divide-y"
                      style={{ borderColor: 'var(--color-input-border)' }}
                    >
                      <thead 
                        style={{ backgroundColor: 'var(--color-background)' }}
                      >
                        <tr>
                          <th scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {t('employers.dashboard.recentJobs.jobTitle')}
                          </th>
                          <th scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {t('employers.dashboard.recentJobs.applicants')}
                          </th>
                          <th scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {t('employers.dashboard.recentJobs.status')}
                          </th>
                          <th scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {t('employers.dashboard.recentJobs.posted')}
                          </th>
                        </tr>
                      </thead>
                      <tbody 
                        className="divide-y"
                        style={{ 
                          backgroundColor: 'var(--color-input-bg)',
                          borderColor: 'var(--color-input-border)'
                        }}
                      >
                        <tr>
                          <td 
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                            style={{ color: 'var(--color-text)' }}
                          >
                            {t('employers.dashboard.recentJobs.job1.title')}
                          </td>
                          <td 
                            className="px-6 py-4 whitespace-nowrap text-sm"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {t('employers.dashboard.recentJobs.job1.applicants')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                              {t('employers.dashboard.recentJobs.job1.status')}
                            </span>
                          </td>
                          <td 
                            className="px-6 py-4 whitespace-nowrap text-sm"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {t('employers.dashboard.recentJobs.job1.posted')}
                          </td>
                        </tr>
                        <tr>
                          <td 
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                            style={{ color: 'var(--color-text)' }}
                          >
                            {t('employers.dashboard.recentJobs.job2.title')}
                          </td>
                          <td 
                            className="px-6 py-4 whitespace-nowrap text-sm"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {t('employers.dashboard.recentJobs.job2.applicants')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                              {t('employers.dashboard.recentJobs.job2.status')}
                            </span>
                          </td>
                          <td 
                            className="px-6 py-4 whitespace-nowrap text-sm"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {t('employers.dashboard.recentJobs.job2.posted')}
                          </td>
                        </tr>
                        <tr>
                          <td 
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                            style={{ color: 'var(--color-text)' }}
                          >
                            {t('employers.dashboard.recentJobs.job3.title')}
                          </td>
                          <td 
                            className="px-6 py-4 whitespace-nowrap text-sm"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {t('employers.dashboard.recentJobs.job3.applicants')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                              {t('employers.dashboard.recentJobs.job3.status')}
                            </span>
                          </td>
                          <td 
                            className="px-6 py-4 whitespace-nowrap text-sm"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            {t('employers.dashboard.recentJobs.job3.posted')}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Employers 