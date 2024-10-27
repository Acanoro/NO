import React from 'react';
import InformationBlock from '../../common/InformationBlock/InformationBlock';
import image from "../../../assets/Images/image.png";
import "./Home.css"

export default function Home() {
  return (
    <div >  
      <div style={{marginLeft:-23,marginBottom:20}}>
      <select name="cars" id="cars" className='select'>
  <option value="Специализация">Специализация</option>
</select>
<select name="cars" id="cars" className='select'>
  <option value="Клиника">Клиника</option>
</select>
      </div>
   
      <div style={{display:"flex",flexWrap:"wrap", gap:"30px"}}>
      <InformationBlock image={image}/>
      <InformationBlock image={image}/>
      <InformationBlock image={image}/>
      </div>


    </div>
  )
}