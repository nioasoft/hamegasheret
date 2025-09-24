import { MetadataRoute } from 'next'
import { getPageDates } from '@/lib/git-dates'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hamegasheret.co.il'

  // Get dynamic dates from git history or use fallback dates
  const dynamicDates = getPageDates();

  // Fallback dates if git is not available
  const fallbackDates = {
    home: new Date('2024-09-24'),
    mediation: new Date('2024-09-24'),
    childCustody: new Date('2024-09-24'),
    childSupport: new Date('2024-09-24'),
    cases: new Date('2024-09-24'),
    about: new Date('2024-09-24'),
    articles: new Date('2024-09-24'),
    contact: new Date('2024-09-24'),
  };

  // Use dynamic dates if available, otherwise use fallback
  const lastModifiedDates = Object.keys(fallbackDates).reduce((acc, key) => {
    const k = key as keyof typeof fallbackDates;
    acc[k] = dynamicDates[k] || fallbackDates[k];
    return acc;
  }, {} as typeof fallbackDates)

  return [
    {
      url: baseUrl,
      lastModified: lastModifiedDates.home,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/mediation`,
      lastModified: lastModifiedDates.mediation,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/child-custody`,
      lastModified: lastModifiedDates.childCustody,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/child-support`,
      lastModified: lastModifiedDates.childSupport,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: lastModifiedDates.cases,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModifiedDates.about,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: lastModifiedDates.articles,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModifiedDates.contact,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
