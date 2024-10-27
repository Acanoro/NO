import React from 'react';
import StarActive from "../../../assets/Images/StarActive.png"
import StarDisable from "../../../assets/Images/StarDisable.png";
import image from '../../../assets/Images/image.png';
import "./Records.css";
import img from "../../../assets/Images/img.png"

export default function Records() {
  const startArray=[StarActive,StarActive,StarActive,StarDisable,StarDisable];


  return (
    <div className='InformationBlock__container'> 
    <img src={image} className='InformationBlock__image'/>
    <div className='InformationBlock__text-container'>
        <p className='InformationBlock__text-top'>Дата и время приема:</p>
        <p className='InformationBlock__text-bottom'>26 Октября 13:30</p>

      <p className='InformationBlock__text-title' style={{marginTop:10}}>Шевченко Михаил Алексеевич</p>
      <div style={{display:"flex"}}>
         <p className='InformationBlock__text-txt'>Хирург | Дерматолог</p>
           {startArray.map(star=>(
              <img className='Information__text-star' src={star}/>

           ))}
       </div>
      <p className='InformationBlock__text-txt'>Клиника “Центр Здоровья”</p>
     
    <div style={{display:"flex"}}>
    <button className='InformationBlock__button' >
          <p className='InformationBlock__button-text'>Скачать талон</p>
          </button>
          <img src={img} style={{width:34,height:34,marginTop:20,marginLeft:10}}/>
    </div>
    <button className='InformationBlock__buttonCancel' >
          <p className='InformationBlock__buttonCancel-text'>Отменить запись</p>
          </button>
      

    </div>
    
</div>
  )
}
