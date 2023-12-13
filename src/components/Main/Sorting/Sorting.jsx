import React from 'react';
import '../../styles/Main-Style/sorting.style.css';
import SortPopup from './Sort-Popup/SortPopup';
import { BsFillGridFill } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';

const Sorting = ({ value, onChangeSort }) => {
  const [openPopup, setOpenPopup] = React.useState(false);

  return (
    <div className="sorting">
      <div className="sort_by">
        <p className="iconSortBox">
          <BsFillGridFill />
          <span onClick={() => setOpenPopup(!openPopup)} className="sorting">
            {value.name || "По популярности"} <AiFillCaretDown />
          </span>
        </p>
        {openPopup && <SortPopup setOpenPopup={setOpenPopup} onSortChange={onChangeSort} value={value} />}
      </div>
    </div>
  );
};

export default Sorting;