const items = [
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
];

export function getPosts() {
    return new Promise((resolve, reject) => {
        if (!items) {
            reject('There is no posts.');
        }

        setTimeout(() => {
            resolve({
                posts: items,
            });
        }, 3000)
    });
}
