import Card from "./Card"
import s from "./Cards.module.css"


export default function Cards({cities, onClose}){
    return(
        <div className={s.contenedor}>
           {cities.map(
            c=> <Card 
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            id={c.id}
            img={c.img}
            onClose={()=> onClose(c.id) }
            />
           )}
           
        </div>
    )
}