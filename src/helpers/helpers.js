const getImages = require.context('../assets/images', true);

export const getLocalImages = (image) => {
    return getImages(`./${image}`).default;
}


export const hideTagById = (id)=>{
    let element = document.getElementById(id);
    element.remove()
}