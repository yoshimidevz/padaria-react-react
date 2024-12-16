import "../../components/Modal/index.jsx"
import fotoCabine from '../../assets/Img/cabine.png';

const Img = () => {
    return <a href={fotoCabine} data-title="Cabine"> <img className="fotos" src={fotoCabine} alt="" /></a>
}

export function Galeria(){
    return (
        <>
           <Modal/>
        </>
    )
}

export default Galeria;