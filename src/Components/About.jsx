import s from "./About.module.css"


export default function About(){
    return(
        <div className={s.contenedor}>
            <div className={s.titulo}>
                <h1>Primera APP</h1>
            </div>
            <p className={s.texto}>
                Bienvenido a la primera app creada por <b>Estanislao Olmedo</b>.
                En este proyecto se utilizó <b>HTML, CSS, JAVASCRIP, REACT, REACT ROUTER</b>, para poner en practica lo aprendido hasta la fecha sobre componentes de función, estados y sus cambios, estilos, enrutamiento, entre otras varías.
                A medida que se adquieran más conociminetos se iran aplicando las mejoras en futuros proyectos. Este app es el <b>primer paso de una largo camino</b>. 
            
            </p>
        </div>
    )
}