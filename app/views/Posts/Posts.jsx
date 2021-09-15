import React, { useEffect, useMemo, useState } from 'react';

import Alert from '/app/components/Alert/index.jsx';
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
            return <Alert info message="Post list is loading..." />;
        }

        if (!posts) {
            return <Alert warning message="There is no post here." />;
        }

        return posts.map( post => <Post {...post} /> );
    }

    

    return (
        <div className={BLOCK}>
            <h1>Posts</h1>
            {renderPosts()}
        </div>
    )
} 

export default Posts;