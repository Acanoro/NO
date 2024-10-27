import React, { useState } from "react";
import calendar from "../../../assets/Images/calendar.png"

import "./Modal.css";

const Modal = ({ doctor, onClose }) => {
  const [specialty, setSpecialty] = useState("");
  const [selectedDate, setSelectedDate] = useState("26 Oct");
  const [selectedTime, setSelectedTime] = useState("13:30");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [note, setNote] = useState("");
  const [calendarOpen,setCalendarOpen] = useState(false)

  const [value,setValue] = useState({
    Фио:"",
    Отделение:"",
    Специальность:""
  })

  const dayArray =[{day:"26 окт",when:"Сегодня"},{day:"26 окт",when:"Сегодня"},{day:"26 окт",when:"Сегодня"},{day:"26 окт",when:"Сегодня"}]
  
  const valuesObjects = [
   {
    name:"Фио",
    placholder:"Фио Врача",
    value:value.Фио,
  },{
    name:"Отделение",
    placholder:"Отделение",
    value:value.Отделение,
  },{
    name:"Специальность",
    placholder:"Специальность",
    value:value.Специальность,
  }]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ doctor, specialty, selectedDate, selectedTime, phoneNumber, note });
  };
function handelChange(e){
     const {value,name} = e.target;
    setValue(prev=>({...prev,[name]:value}))
}
console.log(value);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <div style={{position:"relative",left:60}}>
        <h2 className="modal__title">Запись на прием</h2>
        {valuesObjects.map(item=>(
            <input className="modal__input" placeholder={item.placholder} value={item.value} name={item.name} onChange={handelChange}/>
        ))}
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
           <div style={{marginTop:20}}>
           {valuesObjects.map(item=>(
            <input className="modal__input" placeholder={item.placholder} value={item.value} name={item.name} onChange={handelChange}/>
        ))}
           </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
          <button className="okButton">Записаться</button>
          <button className="cancleButton" onClick={onClose}>Отменить </button>

        </div>
      </div>
    </div>
  );
};

export default Modal;
