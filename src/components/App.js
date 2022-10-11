import React from "react";
import Modals from "./Modals";
import Table from "./Table";
import Tooltips from "./Tooltips";

const App = () => {

  // function for handeling tooltip show and hide
  const handleTooltipShow=(id,isDisplay)=>{
    if (isDisplay) {
      document.getElementById(id).style.display="block"
    } else {
      document.getElementById(id).style.display="none"
    }
  }
  
  return (
    <>
      <h1 className="heading">Timeline</h1>
      <div className="app">
        <Table handleTooltipShow={handleTooltipShow}/>
        <Tooltips />
        <Modals />
      </div>
    </>
  );
};
export default App;
