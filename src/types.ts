export type BlogConfig = {
  /**
   * Blog Name
   */
  title: string;
  
  /** 
   * Git repo URL for editing
   * e.g. https://github.com/ahmedali7o1/devblog/edit/master/
   * if left empty, editing button will not be enabled
   */
  editUrl?: string;

  /**
   * Blog authors.
   * avatar and cover should be relative paths to images 
   * in the public folder. 
   * You could use github/gitlab username as an id for example.
   */
  authors: Author[];
}

export type Author = {
  id: string;
  name: string;
  avatar: string;
  cover: string;
  bio: string;
  social?: Social;
}

export type Social = {
  linkedIn?: string;
  github?: string;
}

export type PostMetadata = {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
};

export type PostCardParams = {
  date: string;
  category: string;
  title: string; 
  author: Author;
  id: string;
  description: string;
}

export type AuthorCardParams = {
  author: Author;
}

export type SocialIconsParams = {
  social?: Social;
};