export const removeHtmlTags = (textWithHtml) => {
  return textWithHtml.replace(/<[^>]+>|&[^;]+;/g, '');
};
