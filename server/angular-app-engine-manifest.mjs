
export default {
  basePath: 'https://stephandee.github.io/Hochzeit',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
