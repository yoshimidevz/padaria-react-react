import { SlideshowLightbox } from "lightbox.js-react";
import img1 from "../../assets/img/bakery.png";
import img2 from "../../assets/img/bakery2.png";

export function Modal(){
    return (
    <SlideshowLightbox>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img1} alt="" />
    </SlideshowLightbox>
    )
}
export default Modal;