import React from 'react';

import Post from '/app/components/Post/index.jsx';

const BLOCK = 'posts';

function Posts({}) {
    const posts = [
        {
            subject: 'Responsibility',
            date: '18th Sep 2021',
            post: 'This devtool is neither made for production nor for readable output files. It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools. If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/) or disable the default devtool with "devtool: false".',
            author: 'kimia',
        },
        {
            subject: 'Responsibility',
            date: '18th Sep 2021',
            post: 'This devtool is neither made for production nor for readable output files. It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools. If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/) or disable the default devtool with "devtool: false".',
            author: 'kimia',
        },
        {
            subject: 'Responsibility',
            date: '18th Sep 2021',
            post: 'This devtool is neither made for production nor for readable output files. It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools. If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/) or disable the default devtool with "devtool: false".',
            author: 'kimia',
        },
        {
            subject: 'Responsibility',
            date: '18th Sep 2021',
            post: 'This devtool is neither made for production nor for readable output files. It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools. If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/) or disable the default devtool with "devtool: false".',
            author: 'kimia',
        },
        {
            subject: 'Responsibility',
            date: '18th Sep 2021',
            post: 'This devtool is neither made for production nor for readable output files. It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools. If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/) or disable the default devtool with "devtool: false".',
            author: 'kimia',
        },
        {
            subject: 'Responsibility',
            date: '18th Sep 2021',
            post: 'This devtool is neither made for production nor for readable output files. It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools. If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/) or disable the default devtool with "devtool: false".',
            author: 'kimia',
        },
        {
            subject: 'Responsibility',
            date: '18th Sep 2021',
            post: 'This devtool is neither made for production nor for readable output files. It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools. If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/) or disable the default devtool with "devtool: false".',
            author: 'kimia',
        },
    ]
    return (
        <div className={BLOCK}>
            <h1>Posts</h1>
            {posts.map( post => <Post {...post} /> )}
        </div>
    )
} 

export default Posts;