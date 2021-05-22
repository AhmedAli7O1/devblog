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

export type BaseAuthor = MarkdownMetadataBase & {
  name: string;
  avatar: string;
  cover: string;
  bio: string;
};

export type AuthorMetadata = BaseAuthor & {
  github?: string;
  linkedIn?: string;
};


export type Author = BaseAuthor & {
  id: string;
  social: Social;
};

export type Social = {
  linkedIn?: string;
  github?: string;
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
      /**
       * override the path for the first page in the pagination
       */
      firstPageIndex?: boolean;
    };
  };
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
  indexPath: string;
  firstPageIndex?: boolean;
};

export type PaginationInfo = {
  pages: {
    label: string;
    url?: string;
    current?: boolean;
  }[];
  next?: string;
  prev?: string;
};