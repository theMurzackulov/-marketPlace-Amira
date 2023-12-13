import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import Skeleton from '../../Skeleton/Skeleton';
import Tabs from '../Tabs/Tabs';
import Sorting from '../Sorting/Sorting';
import '../../styles/Cards-style/Cards.style.css';
import '../../styles/Main-Style/main.style.css';
import Search from '../../Header/Search/Search';

const Cards = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tabsId, setTabsId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'По популярности',
    sort: 'rating',
  });
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://654cd58c77200d6ba859847e.mockapi.io/item?${tabsId > 0 ? `itemCategory=${tabsId}` : ''}&sortBy=${sortType.sort}&order=desc`
        );

        if (response.ok) setItems(await response.json());
        else console.error('Сетевой ответ не был успешным');
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      } finally {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }
    };

    fetchData();
  }, [tabsId, sortType]);

  return (
    <div className="main_container">
      <div className="tabs_sort">
        <Tabs value={tabsId} onChangeTabs={(id) => setTabsId(id)} />
        <Sorting value={sortType} onChangeSort={(sort) => setSortType(sort)} />
        {/* Добавляем компонент Search с передачей состояния и функции обновления */}
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="cards_container">
        {isLoading ? (
          Array.from({ length: 16 }, (_, index) => <Skeleton key={index} />)
        ) : (
          items
            .filter((obj) =>
              obj.itemName.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj) => (
              <Card
                key={obj.id}
                img={obj.itemImg}
                name={obj.itemName}
                sizes={obj.itemSizes}
                materials={obj.itemMaterials}
                price={obj.itemPrice}
                discription={obj.itemDiscription}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Cards;
