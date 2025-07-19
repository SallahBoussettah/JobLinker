import { useTranslation } from 'react-i18next'
import { useState } from 'react'

// Sample testimonial images
import Avatar1 from '../assets/avatar-1.jpg'
import Avatar2 from '../assets/avatar-2.jpg'
import Avatar3 from '../assets/avatar-3.jpg'
import Avatar4 from '../assets/avatar-4.jpg'
import Avatar5 from '../assets/avatar-5.jpg'
import Avatar6 from '../assets/avatar-6.jpg'

const TestimonialsPage = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [activeCategory, setActiveCategory] = useState('all')

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: t('testimonialsPage.testimonials.1.name'),
      position: t('testimonialsPage.testimonials.1.position'),
      company: t('testimonialsPage.testimonials.1.company'),
      quote: t('testimonialsPage.testimonials.1.quote'),
      category: 'jobSeeker',
      avatar: Avatar1
    },
    {
      id: 2,
      name: t('testimonialsPage.testimonials.2.name'),
      position: t('testimonialsPage.testimonials.2.position'),
      company: t('testimonialsPage.testimonials.2.company'),
      quote: t('testimonialsPage.testimonials.2.quote'),
      category: 'employer',
      avatar: Avatar2
    },
    {
      id: 3,
      name: t('testimonialsPage.testimonials.3.name'),
      position: t('testimonialsPage.testimonials.3.position'),
      company: t('testimonialsPage.testimonials.3.company'),
      quote: t('testimonialsPage.testimonials.3.quote'),
      category: 'jobSeeker',
      avatar: Avatar3
    },
    {
      id: 4,
      name: t('testimonialsPage.testimonials.4.name'),
      position: t('testimonialsPage.testimonials.4.position'),
      company: t('testimonialsPage.testimonials.4.company'),
      quote: t('testimonialsPage.testimonials.4.quote'),
      category: 'employer',
      avatar: Avatar4
    },
    {
      id: 5,
      name: t('testimonialsPage.testimonials.5.name'),
      position: t('testimonialsPage.testimonials.5.position'),
      company: t('testimonialsPage.testimonials.5.company'),
      quote: t('testimonialsPage.testimonials.5.quote'),
      category: 'jobSeeker',
      avatar: Avatar5
    },
    {
      id: 6,
      name: t('testimonialsPage.testimonials.6.name'),
      position: t('testimonialsPage.testimonials.6.position'),
      company: t('testimonialsPage.testimonials.6.company'),
      quote: t('testimonialsPage.testimonials.6.quote'),
      category: 'employer',
      avatar: Avatar6
    }
  ]

  // Filter testimonials based on active category
  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory)

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
            {t('testimonialsPage.title')}
          </h1>
          <p 
            className="mt-4 text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {t('testimonialsPage.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div 
          className="mt-12 border-b"
          style={{ borderColor: 'var(--color-input-border)' }}
        >
          <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`${
                activeCategory === 'all'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              style={{ 
                color: activeCategory === 'all' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
              }}
            >
              {t('testimonialsPage.filters.all')}
            </button>
            <button
              onClick={() => setActiveCategory('jobSeeker')}
              className={`${
                activeCategory === 'jobSeeker'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              style={{ 
                color: activeCategory === 'jobSeeker' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
              }}
            >
              {t('testimonialsPage.filters.jobSeekers')}
            </button>
            <button
              onClick={() => setActiveCategory('employer')}
              className={`${
                activeCategory === 'employer'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              style={{ 
                color: activeCategory === 'employer' ? 'var(--color-primary)' : 'var(--color-text-secondary)'
              }}
            >
              {t('testimonialsPage.filters.employers')}
            </button>
          </nav>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`p-6 rounded-lg shadow border ${isRTL ? 'rtl-text' : ''}`}
              style={{ 
                backgroundColor: 'var(--color-input-bg)',
                borderColor: 'var(--color-input-border)'
              }}
            >
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover"
                  onError={(e) => {
                    // Fallback for missing images
                    e.currentTarget.src = 'https://via.placeholder.com/48';
                  }}
                />
                <div className={`${isRTL ? 'mr-4' : 'ml-4'}`}>
                  <h3 
                    className="text-lg font-medium"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {testimonial.name}
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <blockquote className="mt-4">
                <p 
                  className="text-base italic"
                  style={{ color: 'var(--color-text)' }}
                >
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <div className="mt-4">
                <span 
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    testimonial.category === 'jobSeeker' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}
                >
                  {testimonial.category === 'jobSeeker' 
                    ? t('testimonialsPage.labels.jobSeeker') 
                    : t('testimonialsPage.labels.employer')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Testimonial Section */}
        <div 
          className="mt-16 p-8 rounded-lg shadow-sm"
          style={{ backgroundColor: 'var(--color-input-bg)' }}
        >
          <div className="text-center">
            <h2 
              className="text-2xl font-bold"
              style={{ color: 'var(--color-text)' }}
            >
              {t('testimonialsPage.submitSection.title')}
            </h2>
            <p 
              className="mt-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t('testimonialsPage.submitSection.description')}
            </p>
            <button
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              {t('testimonialsPage.submitSection.button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsPage 