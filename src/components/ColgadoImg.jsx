import image0 from '../assets/images/horca/0.png';
import image1 from '../assets/images/horca/1.png';
import image2 from '../assets/images/horca/2.png';
import image3 from '../assets/images/horca/3.png';
import image4 from '../assets/images/horca/4.png';
import image5 from '../assets/images/horca/5.png';
import image6 from '../assets/images/horca/6.png';
import image7 from '../assets/images/horca/7.png';
import image8 from '../assets/images/horca/8.png';
//importe de imagenes para representar el ahorcadito

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
//se define a las imagenes como variables constantes

export function ColgadoImg({imageNumber}) {

    if(imageNumber >= 8){
        imageNumber = 8;
    }
    //se "limita" el valor numerico de la imagen hasta 8

    return (
        <img
            className='colgado-image' // definicion de class-name
            src={images[imageNumber]} // definicion de imagen
            alt="Imagen del ahorcado" // en caso den o mostrarse la imagen, se mostrará la leyenda "Imagen del ahorcado"
            width="450px" //ancho de 450px
        />
    )
}