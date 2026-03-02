import { NewsItem } from '../types';

const BING_NEWS_API_KEY = import.meta.env.VITE_BING_NEWS_API_KEY;
const BING_NEWS_URL = 'https://api.bing.microsoft.com/v7.0/news/search';

export async function fetchBingNews(query: string = 'sports stocks finance'): Promise<NewsItem[]> {
  if (!BING_NEWS_API_KEY) {
    console.warn('Bing News API key not configured');
    return [];
  }

  try {
    const response = await fetch(`${BING_NEWS_URL}?q=${encodeURIComponent(query)}&count=10&mkt=en-US&freshness=Day`, {
      headers: {
        'Ocp-Apim-Subscription-Key': BING_NEWS_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Bing News API error: ${response.status}`);
    }

    const data = await response.json();

    return data.value?.map((article: any, index: number) => ({
      id: article.url || `news-${index}`,
      headline: article.name || 'No headline',
      source: article.provider?.[0]?.name || 'Unknown Source',
      summary: article.description || '',
      publishedAt: article.datePublished || new Date().toISOString()
    })) || [];
  } catch (error) {
    console.error('Error fetching Bing News:', error);
    return [];
  }
}
