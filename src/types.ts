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
    pagination: {
      /**
       * Number of posts per page
       */
      perPage: number;
      /**
       * The range of pages displayed.
       */
      pageRangeDisplayed: number;
      /** 
       * The number of pages to display for margins.
       */
      marginPagesDisplayed: number;
      /**
       * Label for ellipsis.
       */
      breakLabel: string;
    };
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
  total: number;
  perPage: number;
  selected: number;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
  breakLabel: string;
  pathPrefix: string;
};

export type PaginationInfo = {
  label: string;
  url?: string;
  current?: boolean;
};