import { MetadataRoute } from 'next'
import { getPageDates } from '@/lib/git-dates'
import { articles } from '@/app/articles/data'

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
    privacyPolicy: new Date('2024-10-13'),
    accessibilityStatement: new Date('2025-10-23'),
  };

  // Use dynamic dates if available, otherwise use fallback
  const lastModifiedDates = Object.keys(fallbackDates).reduce((acc, key) => {
    const k = key as keyof typeof fallbackDates;
    acc[k] = dynamicDates[k] || fallbackDates[k];
    return acc;
  }, {} as typeof fallbackDates)

  // Helper function to parse Hebrew dates to ISO format
  const parseHebrewDate = (hebrewDate: string): Date => {
    // Handle ISO format dates (e.g., "2023-12-28")
    if (/^\d{4}-\d{2}-\d{2}$/.test(hebrewDate)) {
      return new Date(hebrewDate);
    }

    // Handle Hebrew format dates (e.g., "15 בפברואר 2024")
    const hebrewMonths: { [key: string]: string } = {
      'בינואר': '01',
      'בפברואר': '02',
      'במרץ': '03',
      'באפריל': '04',
      'במאי': '05',
      'ביוני': '06',
      'ביולי': '07',
      'באוגוסט': '08',
      'בסeptember': '09',
      'באוקטובר': '10',
      'בנובמבר': '11',
      'בדצמבר': '12'
    };

    const parts = hebrewDate.split(' ');
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0');
      const month = hebrewMonths[parts[1]] || '01';
      const year = parts[2];
      return new Date(`${year}-${month}-${day}`);
    }

    // Fallback to current date if parsing fails
    return new Date();
  };

  // Generate article URLs
  const articleUrls = articles.map(article => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: parseHebrewDate(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

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
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastModifiedDates.privacyPolicy,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/accessibility-statement`,
      lastModified: lastModifiedDates.accessibilityStatement,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...articleUrls,
  ]
}
