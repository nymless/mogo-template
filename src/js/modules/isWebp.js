// add webp class to <html> element if webP supported by browser
export const isWebp = async () => {
    let webP = new Image();

    webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

    await webP.decode();

    const webpSupport = (webP.height == 2);

    const className = (webpSupport === true) ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
};
