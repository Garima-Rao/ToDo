
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ToDo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/ToDo/header",
    "route": "/ToDo"
  },
  {
    "renderMode": 2,
    "route": "/ToDo/header"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4978, hash: '3afb5812ab6b5e56e19a61ff36e016815237f3a61e48bef6c200971f08bb35ff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: 'e06f6eea5968ba9ec0cefeb275aa56e11ff66339174f09c80b0a417e342f4707', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'header/index.html': {size: 16448, hash: '2a451bc8ad9980af4c7b2a855d1ea6bb94a63b59b3c96902154acfd7de754507', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
