export const NEWS_KEYWORD = '실종';
export const NEWS_SORT = 'sim';
export const NEWS_DISPLAY = '30';

export const NEWS_QUERY = `?query=${encodeURIComponent(NEWS_KEYWORD)}&display=${NEWS_DISPLAY}&sort=${NEWS_SORT}`;
