import React, { useEffect, useState } from 'react';
import { Notify } from 'kimia-notify';

import Post from '/app/components/Post/index.jsx';

import { getPosts } from './requests.js';

const BLOCK = 'posts';

function Posts({}) {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getPosts()
            .then(({ posts }) => {
                setPosts(posts);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    function renderPosts() {
        if (loading) {
            return <div>Post list is loading...</div>;
        }

        if (!posts) {
            return <div>There is no post here.</div>;
        }

        return posts.map( (post, index) => <Post key={index} {...post} /> );
    }

    

    return (
        <div className={BLOCK}>
            <h1>Posts</h1>
            {renderPosts()}
        </div>
    )
} 

export default Posts;