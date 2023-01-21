import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import RoutesIndex from "routes/routes";
import MessageModal from "common/components/messageModal/messageModal";


function App() {
  const { mode } = useSelector(state => state.theme);
  const { showMessageModal } = useSelector(state => state.showMessageModal)

  useEffect(() => {
    console.log(`useEffect from app runned.`)

    // Setting up the initial Theme
    const html = document.body.parentNode;
    html.setAttribute("data-bs-theme", mode);
  }, [mode]);

  return (
    <div className="App"> 
      <BrowserRouter>
        {showMessageModal && <MessageModal />}
        <RoutesIndex />
      </BrowserRouter>
    </div>
  );
};

export default App;