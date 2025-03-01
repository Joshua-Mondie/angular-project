
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Joshua-Mondie/angular-project.git',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Joshua-Mondie/angular-project.git/home",
    "route": "/Joshua-Mondie/angular-project.git"
  },
  {
    "renderMode": 2,
    "route": "/Joshua-Mondie/angular-project.git/home"
  },
  {
    "renderMode": 2,
    "route": "/Joshua-Mondie/angular-project.git/about"
  },
  {
    "renderMode": 2,
    "route": "/Joshua-Mondie/angular-project.git/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 549, hash: '63ee87f01b59f56d135df9c6456e08d0bfc889f33eab234323e8be5cb61a8e77', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: 'e58bbae1b34a469839a69589bdc25cd9a344b2506158ba470db69d1dbc5f91c8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 4468, hash: 'fbe9105b0ba2a2db3b95563fb22a525ed5381f049b542f5524a564d3b9141f23', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 2936, hash: '4bc1c78ddbe315059dbe609a2dbf7e1b0293d7439feb801bbdf098ddb1057b52', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 2939, hash: '83c84ce3b23665035aec04681c99c3f35af25dd1c1b21ea9f238a6a254bbf104', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
