
export default {
  basePath: 'https://github.com/Joshua-Mondie/angular-project.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
