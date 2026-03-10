import { AngularAppEngine, createRequestHandler } from '@angular/ssr';

const angularApp = new AngularAppEngine();

export default {
    fetch: createRequestHandler(async (request: Request) => {
        const result = await angularApp.handle(request);
        return result ?? new Response(`Not found: ${new URL(request.url).pathname}`, { status: 404 });
    })
};
