export type MarkdownMetadataBase = {
  content: string;
};

export type BasePost = MarkdownMetadataBase & {
  title: string;
  description: string;
  category: string;
  date: string;
};

export type PostMetadata = BasePost & {
  date: string;
  authorId: string;
};

export type Post = BasePost & {
  id: string;
  author: Author;
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

  posts: {
    perPage: number;
  };
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




/** Other types  */

export type PagePath = {
  params: {
    id: string;
  };
};

export type PageParams = {
  id: string;
};

export type PaginationOptions = {
  pages: {
    url?: string;
    label: string;
    current?: boolean;
  }[];
  prevUrl: string;
  nextUrl: string;
};