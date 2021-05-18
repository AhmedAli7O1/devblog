import { BlogConfig } from '../src/types';

/**
 * General Blog Configurations
 */
const config: BlogConfig = {

  title: 'DevBlog',
  editUrl: 'https://github.com/ahmedali7o1/devblog/edit/develop',

  posts: {
    pagination: {
      perPage: 2,
      breakLabel: '...',
      marginPagesDisplayed: 3,
      pageRangeDisplayed: 2
    },
  }
  
};

export default config;