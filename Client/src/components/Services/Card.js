import React, {useEffect} from 'react';
import styles from "./card.module.css";
import "./card.css";
import AOS from "aos";
const Card = ({obj}) => {
    useEffect( ()=>{
        AOS.init({
            duration:2000,
            offset:100
        })
    },[])
    var isBootstrapCard = true;
  return (
   <>
     <div className={isBootstrapCard ? "card my-1 p-2 services_card" : styles.card}
    data-aos = "fade-up">
       <img src={obj.img} alt={`${obj.img}`} className="card-img-top card_img"/>
        <div className="card-body">
            
            <div className='card-description'>
                <p className='text text-bold text-center'>{obj.title}</p>
                <p className='text text-muted text-center service_desc'>{obj.desc}</p>
            </div>
            
            <div>
           
            </div>
             
        </div>
    </div>   

    
   </>
  )
}

export default Card