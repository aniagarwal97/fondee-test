import React from 'react';
import './styles.scss';
const MenuCard = (props) => {
  
  return (
    <div className={`menu_card ${props.isSelected && 'active'}`}>{props.menu}</div>
  );
}

export default MenuCard