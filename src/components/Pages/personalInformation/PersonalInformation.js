import React,{useState} from 'react';
import "./PersonalInformation.css"

export default function PersonalInformation() {
    const [value,setValue] = useState({
        Фио:"",
        Отделение:"",
        Специальность:"",
        ЭлектроннаяПочта:"",
        НомерТелефона:"",
        ИНН:"",
        НомерПолисаОМС:""
      })
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
       },
       ]
       const secondValuesObject = [
        {
            name:"Электронная почта",
            placholder:"Электронная почта",
            value:value.ЭлектроннаяПочта,
          },{
            name:"Номер телефона",
            placholder:"+7 (988)-576-66-78",
            value:value.НомерТелефона,
          },{
            name:"ИНН",
            placholder:"ИНН 1234567890",
            value:value.ИНН,
          },
         
       ]
     function handelChange(e){
          const {value,name} = e.target;
         setValue(prev=>({...prev,[name]:value}))
     }
  return (
    <div style={{marginTop:-177}}>
     <div className='personalInformation__block'>
        <p className='personalInformation__block-text'>Личные данные</p>
        <div style={{display:"flex",marginLeft:-20}}>
        {valuesObjects.map(item=>(
            <input className="modal__input" style={{marginLeft:20}}placeholder={item.placholder} value={item.value} name={item.name} onChange={handelChange} />
        ))}
        </div>
        
     </div>
     <div className='personalInformation__block'>
        <p className='personalInformation__block-text'>Контактные данные</p>
        <div style={{display:"flex",marginLeft:-20}}>
        {secondValuesObject.map(item=>(
            <input className="modal__input" style={{marginLeft:20}}placeholder={item.placholder} value={item.value} name={item.name} onChange={handelChange} />
        ))}
        </div>
        
     </div>
     <div className='personalInformation__block'>
        <p className='personalInformation__block-text'>Страховой полис</p>
        <div style={{display:"flex",marginLeft:-20}}>
        {[{
    name:"Номер полиса ОМС",
    placholder:"Номер полиса ОМС 1234567890",
    value:value.НомерПолисаОМС,
  }].map(item=>(
            <input className="modal__input" style={{marginLeft:20}}placeholder={item.placholder} value={item.value} name={item.name} onChange={handelChange} />
        ))}
        </div>
        
     </div>
     <button className='modal__under-button'><p className='modal__under-button-text'>Сохранить изменения</p></button>
    </div>
  )
}
