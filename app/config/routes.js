
import Home from '/app/views/Home.jsx';
import Posts from '/app/views/Posts/index.js';
import Profile from '/app/views/Profile.jsx';
import Settings from '/app/views/Settings.jsx';
import NotFound from '/app/views/NotFound.jsx';
import * as paths from '/app/config/paths.js';

const routes = [
    {
        title: 'Home',
        path: paths.HOME,
        component: Home,
        exact: true,
        aside: true,
    },
    {
        title: 'Posts',
        path: paths.POSTS,
        component: Posts,
        exact: true,
        aside: true,
    },
    {
        title: 'Profile',
        path: paths.PROFILE,
        component: Profile,
        exact: true,
        header: true,
    },
    {
        title: 'Settings',
        path: paths.SETTINGS,
        component: Settings,
        exact: true,
        header: true,
        aside: true,
    },
    {
        title: 'Not found',
        path: '/*',
        component: NotFound,
    },
];
export default routes;