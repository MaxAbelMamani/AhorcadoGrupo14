import image0 from '../assets/images/horca/0.png';
import image1 from '../assets/images/horca/1.png';
import image2 from '../assets/images/horca/2.png';
import image3 from '../assets/images/horca/3.png';
import image4 from '../assets/images/horca/4.png';
import image5 from '../assets/images/horca/5.png';
import image6 from '../assets/images/horca/6.png';
import image7 from '../assets/images/horca/7.png';
import image8 from '../assets/images/horca/8.png';

const images= [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
]

export function ColgadoImg({imageNumber}) {

    if(imageNumber >= 8){
        imageNumber = 8;
    }

    return (
        <img
            className='colgado-image' 
            src={images[imageNumber]} 
            alt="Imagen del ahorcado"
            width="450px"
        />
    )
}