import React from 'react';
import PropTypes from 'prop-types';

import './Post.sass';

const BLOCK = 'post';

function Post({
    subject,
    post,
    date,
    author,
}) {
    if (!subject) {
        return null;
    }

    return (
        <article className={BLOCK}>
            <h3 className={`${BLOCK}__subject`}>
                {subject}
                <span className={`${BLOCK}__author`}>{author}</span>
                <span className={`${BLOCK}__date`}>{date}</span>
            </h3>
            <p className={`${BLOCK}__post`}>{post}</p>
            
        </article>
    )
} 

Post.defaultProps = {
    subject: undefined,
    post: undefined,
    date: undefined,
    author: undefined,
};
  
Post.propTypes = {
    subject: PropTypes.string,
    post: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
};

export default Post;