import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import "./Layout.css";
import people from "../../../assets/Images/people.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Home from "../../Pages/Home/Home";
import PersonalInformation from '../../Pages/personalInformation/PersonalInformation';
import Records from '../../Pages/records/Records';
import Records2 from '../../Pages/records2/Records2';

export default function Layout() {
  const [selectedOption, setSelectedOption] = useState(""); 

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); 
    console.log("Selected option:", event.target.value);
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='header'>
          <div className='header__top'>
            <p className='header__top-Logo'>Logo</p>
          </div>
          <div className='header__bottom'>
            <div className='header__bottom-container'>
              <p className='header__top-Logo'>Личный кабинет</p>
              <img src={people} className='header__bottom--container-image' />
            </div>
            <p className='header__bottom-text'>Добро пожаловать, (firstName*)</p>
          </div>
          <Tabs style={{ marginTop: 40 }}>
            <TabList>
              <Tab><p>Расписание приемов</p></Tab>
              <Tab>
                <select
                  name="records"
                  id="records"
                  className='select'
                  style={{ border: 0, backgroundColor: "transparent", outline: "none", width: 120, marginTop: -10 }}
                  value={selectedOption} 
                  onChange={handleSelectChange}
                >
                  <option value="" className='option'>Мои записи</option>
                  <option value="Текущие записи" className='option'>Текущие записи</option>
                  <option value="Архивные записи" className='option'>Архивные записи</option>
                </select>
              </Tab>
              <Tab><p>Личная информация</p></Tab>
            </TabList>
            <TabPanel><Home /></TabPanel>
            <TabPanel>
              
              {(selectedOption === "Текущие записи" || selectedOption==="")&& <Records />}
              {selectedOption === "Архивные записи" && <Records2 />}
            </TabPanel>
            <TabPanel><PersonalInformation /></TabPanel>

          </Tabs>
        </div>
      </div>
    </div>
  );
}
