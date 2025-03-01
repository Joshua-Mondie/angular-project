
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/angular-project/home",
    "route": "/angular-project"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/home"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/about"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 514, hash: '69cf44e3b7ca30582297fb9b5efb11ad40b08c04b2f891946cf73e901b78c52e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'fe5f30059d15a6029af0a550e38efbd2e5fcfcac5b21dc024e914c83256c7377', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 2796, hash: 'e4bcf179aea6461cc90346d39624ffd1991013174de5df57eb48cc4bee0c9844', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 2793, hash: '1ffddba8afc85b917c5ebbe8943e56711ec0aa33a0817545722a2f3071fdeb75', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 4325, hash: '3eb13dccd5770d547fa12799e0d29f5e7f4eb6e8ce67a3a988c52a30e6c6b18d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
