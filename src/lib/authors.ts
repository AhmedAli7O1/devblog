import blogConfig from '../../data/config';

export function getAuthor(id: string) {
  return blogConfig.authors.find(author => author.id === id);
}

export function getAuthors() {
  return blogConfig.authors;
}

export function getAuthorsIds() {
  return blogConfig.authors.map(author => author.id);
}