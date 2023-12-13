import React, { useState } from 'react';
import '../../styles/Main-Style/tabs.style.css';

const Tabs = ({ onChangeTabs }) => {
  const tabs = ['Каталог', 'Вечерние', 'Свадебные', 'Национальные', 'Ежедневные', 'Летние'];
  const [activeTabs, setActiveTabs] = useState(0);

  const onClickChoiceCategories = (index) => {
    setActiveTabs(index);
    onChangeTabs(index);
  };

  return (
    <div className="tabs">
      <ul>
        {tabs.map((tabsName, index) => (
          <li key={index} onClick={() => onClickChoiceCategories(index)} className={activeTabs === index ? 'active' : ''}>
            {tabsName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;