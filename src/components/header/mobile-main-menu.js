import React, { useState } from 'react';
import Sidebar from "../sidebar/awesome/Sidebar";

const  MobileMainMenu = () => {
  return (
    <div className="col-12">
      <div>
          <Sidebar mobile />
      </div>
    </div>
  );
}

export default MobileMainMenu;
