import React from 'react';
import '../../../styles/Main-Style/popup.style.css';

const SortPopup = ({ setOpenPopup, onSortChange, value }) => {
  const sortLists = [
    { name: 'По популярности', sort: 'itemRating' },
    { name: 'По цене', sort: 'itemPrice' },
    { name: 'По алфавиту', sort: 'itemName' },
  ];

  const selectedClosePopup = (sort) => {
    onSortChange({ name: sortLists.find((item) => item.sort === sort).name, sort });
    setOpenPopup(false);
  };

  return (
    <div className="sortPopup">
      <ul>
        {sortLists.map((item, i) => (
          <li
            key={i}
            onClick={() => selectedClosePopup(item.sort)}
            className={value && value.sort === item.sort ? 'active' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortPopup;