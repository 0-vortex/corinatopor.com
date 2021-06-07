import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const BlogPost = ({children, pageContext}) => {
  const {title, author, date} = pageContext.frontmatter;
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
          <span>
            Author:
            {author}
          </span>
          <time>
            Date:
            {date}
          </time>
        </header>
        <MDXProvider>{children}</MDXProvider>
      </article>
    </React.Fragment>
  );
};

BlogPost.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.node.isRequired,
};

export default BlogPost;
