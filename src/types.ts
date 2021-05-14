/** Markdown Metadata interfaces */

export type MarkdownMetadataBase = {
  content: string;
};

export type PostMetadata = MarkdownMetadataBase & {
  title: string;
  date: string;
  author: string;
  description: string;
  category: string;
};

export type AuthorMetadata = MarkdownMetadataBase & {
  name: string;
  avatar: string;
  cover: string;
  bio: string;
  github?: string;
  linkedIn?: string;
};


/** Components Types */

export type BlogConfig = {
  /**
   * Blog Name
   */
  title: string;
  
  /** 
   * Git repo URL for editing
   * e.g. https://github.com/ahmedali7o1/devblog/edit/master
   * if left empty, editing button will not be enabled
   */
  editUrl?: string;
};

export type Author = {
  id: string;
  name: string;
  avatar: string;
  cover: string;
  bio: string;
  body: string;
  social: Social;
};

export type Social = {
  linkedIn?: string;
  github?: string;
};

export type Post = {
  id: string;
  body: string;
  author: Author;
  title: string;
  date: string;
  description: string;
  category: string;
};


/** Other types  */

export type PagePath = {
  params: {
    id: string;
  };
};

export type PageParams = {
  id: string;
};