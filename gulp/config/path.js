import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist'
const srcFolder = './src'

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    script: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: [`${srcFolder}/scss/**/*.scss`, `${srcFolder}/blocks/**/*.scss`],
    script: [`${srcFolder}/js/app.js`, `${srcFolder}/blocks/**/*.js`],
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: [`${srcFolder}/scss/**/*.scss`, `${srcFolder}/blocks/**/*.scss`],
    script: [`${srcFolder}/js/**/*.js`, `${srcFolder}/blocks/**/*.js`],
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}
