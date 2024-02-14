import { fileURLToPath, URL } from 'node:url';

export const lintOnSave = false;
export const runtimeCompiler = true;
export const configureWebpack = {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
};