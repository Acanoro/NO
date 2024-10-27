import React ,{useState}from 'react';
import "./InformationBlock.css";
import StartDisable from "../../../assets/Images/StarDisable.png";
import StartActive from "../../../assets/Images/StarActive.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calendar from "../../../assets/Images/calendar.png"
import Modal from '../Modal/Modal';


export default function InformationBlock({image}) {
  const [value, onChange] = useState(new Date());
  const [calendarOpen,setCalendarOpen] = useState(false)
  const [isModalOpen,setIsModalOpen] = useState(false)


  const startArray=[StartActive,StartActive,StartActive,StartDisable,StartDisable];
  const dayArray =[{day:"26 окт",when:"Сегодня"},{day:"26 окт",when:"Сегодня"},{day:"26 окт",when:"Сегодня"},{day:"26 окт",when:"Сегодня"}]

  function handleClose(){
    setIsModalOpen(false)
  }
  return (
    <div className='InformationBlock__container'> 
          <img src={image} className='InformationBlock__image'/>
          <div className='InformationBlock__text-container'>
            <p className='InformationBlock__text-title'>Шевченко Михаил Алексеевич</p>
            <div style={{display:"flex"}}>
               <p className='InformationBlock__text-txt'>Хирург | Дерматолог</p>
                 {startArray.map(star=>(
                    <img className='Information__text-star' src={star}/>

                 ))}
             </div>
            <p className='InformationBlock__text-txt'>Клиника “Центр Здоровья”</p>
            <p className='InformationBlock__txt-title'>Доступное время:</p>
            <div style={{display:"flex",marginLeft:-10}}>
                    {dayArray.map(item=>(
                       <div className='InformationBlock__Calendar-item' >
                                <div>
                                <p className='Calendar__item-title'>{item.day}</p>
                                <p className='Calendar__item-text'>{item.when}</p>
                                </div>
                       </div>
                    ))}
                    <button style={{backgroundColor:"transparent",border:0,outline:"none"}} onClick={()=>setCalendarOpen(!calendarOpen)}>
                      <img src={calendar} style={{width:24,height:24,marginLeft:10,marginTop:10,cursor:"pointer"}}/>
                    </button>
                          

              </div>
            <div className='InformationBlock__available-times'>
          <div className='InformationBlock__time-slots'>
             
          {['13:30', '13:30', '13:30', '13:30','13:30'].map((time, index) => (
              <div key={index} className='InformationBlock__time'>
                <span>{time}</span>
              </div>
            ))}
          </div>

          
           </div>
              <button className='InformationBlock__button' onClick={()=>setIsModalOpen(true)}>
                <p className='InformationBlock__button-text'>Записаться на прием</p>
                </button>

          </div>
          {isModalOpen && 
                      <Modal onClose={handleClose}/>
                        }
    </div>
  )
}
