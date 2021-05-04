import blogConfig from '../../data/config';

export function getAuthor(id: string) {
  return blogConfig.authors.find(author => author.id === id);
}