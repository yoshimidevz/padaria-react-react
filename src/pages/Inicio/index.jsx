import './styles.css';

import imagemHome from '../../assets/img/imagemInicial.avif';


export function Home(){
    return (
        <>
            <main>
            <div className="contentHome">
                <img id="bakery" src={imagemHome} alt="" />
                <h1>Bem vindo(a) a padaria!</h1>
            </div>
            
            </main>
        </>
    )
}

export default Home;