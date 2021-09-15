import { lazy } from 'react';

const LazyPosts = lazy(() => import('./Posts.jsx'));

export default LazyPosts;