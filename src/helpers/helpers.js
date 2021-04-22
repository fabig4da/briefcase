const getImages = require.context('../assets/images', true);

export const getLocalImages = (image) => {
    return getImages(`./${image}`);
}
