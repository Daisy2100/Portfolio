import { AngularAppEngine, createRequestHandler } from '@angular/ssr';

const angularApp = new AngularAppEngine();

export default {
  async fetch(request: Request, env: any) {
    if (env.ASSETS) {
      const url = new URL(request.url);
      if (url.pathname.includes('.') && !url.pathname.endsWith('.html')) {
        const asset = await env.ASSETS.fetch(request);
        if (asset.status !== 404) {
          return asset;
        }
      }
    }
    const result = await angularApp.handle(request);
    return result ?? new Response(`Not found: ${new URL(request.url).pathname}`, { status: 404 });
  }
};
