import React from "react";
import "./sidebar.css";
import CrossIcon from "../../assets/images/cross.png";

const Sidebar = ({ isOpen, setIsOpen, list }) => {
  return (
    <div
      className={`sidebar-container  ${
        isOpen ? "activeSidebar" : "inActiveSidebar"
      }`}
    >
      <div className="crossIconWrap">
        <img src={CrossIcon} width={30} onClick={() => setIsOpen(false)} />
      </div>
      <div className="sidebar-list-block">
        {list.map((list) => {
          return (
            <li className="sidebarListWrap">
              <a className="sidebar-list">{list.label}</a>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
