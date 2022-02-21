import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/styles/`,
        script: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: [
            `${srcFolder}/styles/**/*.{css,scss}`,
            `${srcFolder}/blocks/**/*.{css,scss}`,
        ],
        script: [
            `${srcFolder}/js/app.js`, 
            `${srcFolder}/blocks/**/*.js`
        ],
        images: [
            `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
            `${srcFolder}/blocks/**/*.{jpg,jpeg,png,gif,webp}`
        ],
        svg: `${srcFolder}/img/**/*.svg`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: [
            `${srcFolder}/styles/**/*.{css,scss}`,
            `${srcFolder}/blocks/**/*.{css,scss}`,
        ],
        script: [
            `${srcFolder}/js/**/*.js`, 
            `${srcFolder}/blocks/**/*.js`
        ],
        images: [
            `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
            `${srcFolder}/blocks/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`
        ],
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
};
