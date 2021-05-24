import { BlogConfig } from '../src/types';

/**
 * General Blog Configurations
 */
const config: BlogConfig = {

  title: 'DevBlog',
  description: 'The new DevBlog',
  editUrl: 'https://github.com/ahmedali7o1/devblog/edit/develop',
  footer: {
    copyright: `Copyright © ${new Date().getFullYear()} [Ahmed Ali](https://github.com/ahmedali7o1), Inc. Built with [DevBlog](https://github.com/ahmedali7o1/devblog).`,
    links: {
      categories: [
        {
          name: 'Features',
          items: [
            { 
              label: 'Cool stuff',
              url: '' 
            },
            { 
              label: 'Random feature',
              url: '' 
            },
            { 
              label: 'Team feature',
              url: '' 
            },
            { 
              label: 'Stuff for developers',
              url: '' 
            },
            { 
              label: 'Another one',
              url: '' 
            },
            { 
              label: 'Last time',
              url: '' 
            }
          ]
        },
        {
          name: 'Resources',
          items: [
            { 
              label: 'Resource',
              url: '' 
            },
            { 
              label: 'Resource name',
              url: '' 
            },
            { 
              label: 'Another resource',
              url: '' 
            },
            { 
              label: 'Final resource',
              url: '' 
            }
          ]
        },
        {
          name: 'About',
          items: [
            { 
              label: 'Team',
              url: '' 
            },
            { 
              label: 'Locations',
              url: '' 
            },
            { 
              label: 'Privacy',
              url: '' 
            },
            { 
              label: 'Terms',
              url: '' 
            }
          ]
        }
      ]
    }
  },

  social: {
    facebook: 'https://facebook.com/',
    linkedIn: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/'
  },
  posts: {
    pagination: {
      perPage: 8,
      breakLabel: '...',
      marginPagesDisplayed: 3,
      pageRangeDisplayed: 2,
      firstPageIndex: true
    },
  }
  
};

export default config;