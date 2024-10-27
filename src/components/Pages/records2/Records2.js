import React from 'react';
import StarActive from "../../../assets/Images/StarActive.png"
import StarDisable from "../../../assets/Images/StarDisable.png";
import image from '../../../assets/Images/image.png';
import "./Records2.css";
import img from "../../../assets/Images/img.png";


export default function Records2() {
    const startArray=[StarActive,StarActive,StarActive,StarDisable,StarDisable];
    const startArray2=[StarDisable,StarDisable,StarDisable,StarDisable,StarDisable];


  return (
   <div>
<p className='article' style={{position:"relative",bottom:-70}}>Поделитесь впечатлениями о своем визите</p>
<div className='InformationBlock__container'> 
    <img src={image} className='InformationBlock__image'/>
    <div className='InformationBlock__text-container'>
        <p className='InformationBlock__text-top'>Дата и время прошедшего приема:</p>
        <p className='InformationBlock__text-top'>26 Октября 13:30</p>

      <p className='InformationBlock__text-title' style={{marginTop:10}}>Шевченко Михаил Алексеевич</p>
      <div style={{display:"flex"}}>
         <p className='InformationBlock__text-txt'>Хирург | Дерматолог</p>
           {startArray.map(star=>(
              <img className='Information__text-star' src={star}/>

           ))}
       </div>
      <p className='InformationBlock__text-txt'>Клиника “Центр Здоровья”</p>
     <div style={{display:"flex"}}>
      <p className='InformationBlock__txt-title'>Оцените визит к врачу</p>
      {startArray2.map(star=>(
              <img className='Information__text-star' src={star} style={{marginTop:25,marginLeft:5}}/>

           ))}
    </div> 
    <p className='InformationBlock__text-txt' style={{fontSize:13}}>Ваш отзыв поможет нам стать лучше</p>
    
    <textarea placeholder='Текст' className='textarea'>

    </textarea>
     
          <button className='InformationBlock__button' style={{position:"relative",top:-3}}>
          <p className='InformationBlock__button-text'>Оценить</p>
          </button>
    
      

    </div>
    
</div>

<p className='article' style={{position:"relative",top:50}}>С оценкой врача</p>

<div className='InformationBlock__container' style={{position:"relative",bottom:-70}}> 
    <img src={image} className='InformationBlock__image'/>
    <div className='InformationBlock__text-container'>
        <p className='InformationBlock__text-top'>Дата и время прошедшего приема:</p>
        <p className='InformationBlock__text-top'>26 Октября 13:30</p>

      <p className='InformationBlock__text-title' style={{marginTop:10}}>Шевченко Михаил Алексеевич</p>
      <div style={{display:"flex"}}>
         <p className='InformationBlock__text-txt'>Хирург | Дерматолог</p>
           {startArray.map(star=>(
              <img className='Information__text-star' src={star}/>

           ))}
       </div>
      <p className='InformationBlock__text-txt'>Клиника “Центр Здоровья”</p>
     <div style={{display:"flex"}}>
      <p className='InformationBlock__txt-title'>Ваше впечатление</p>
      {startArray2.map(star=>(
              <img className='Information__text-star' src={star} style={{marginTop:25,marginLeft:5}}/>

           ))}
    </div> 
    <p className='InformationBlock__text-txt' style={{fontSize:13}}>Недавно посетила врача [Имя врача], и осталась очень довольна. Врач проявил высокий профессионализм и внимание к деталям. Мне понравилось, что он тщательно выслушал мои жалобы и предложил несколько вариантов лечения, объяснив все преимущества и недостатки каждого из них.</p>
     
          <button className='InformationBlock__button' style={{position:"relative",top:-3}}>
          <p className='InformationBlock__button-text'>Оценить</p>
          </button>
    
      

    </div>
    
</div>
   </div>
  )
}
