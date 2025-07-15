import noImage from '../assets/img/No_Image_Available.jpg';
export function imagePath(image) {
    if (!image) return noImage;
    return `http://127.0.0.1:8000/${image}`;
}