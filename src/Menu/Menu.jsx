import React, { useState } from "react";

export const MenuData = [
  {
    label: "Menu 1",
    children: [
      {
        label: "Sub-Menu 1-1",
        children: [
          { label: "Sub-Menu 1-1-1" },
          { label: "Sub-Menu 1-1-2" },
        ],
      },
      {
        label: "Sub-Menu 1-2",
      },
    ],
  },
  {
    label: "Menu 2",
    children: [
      { label: "Sub-Menu 2-1" },
      {
        label: "Sub-Menu 2-2",
        children: [{ label: "Sub-Menu 2-2-1" }],
      },
    ],
  },
];

const Menu = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const renderMenu = (menu) => {
    return (
      <li key={menu.label}>
        <div onClick={() => toggleMenu(menu.label)} style={{ cursor: "pointer" }}>
          {menu.label}
        </div>
        {menu.children && openMenus[menu.label] && (
          <ul style={{ paddingLeft: "20px" }}>
            {menu.children.map((subMenu) => renderMenu(subMenu))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div>
      <ul>
        {MenuData.map((menu) => renderMenu(menu))}
      </ul>
    </div>
  );
};

export default Menu;
