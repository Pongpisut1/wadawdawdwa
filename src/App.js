import React from "react";
import "./styles.scss"; // ถ้าอยากใส่ SCSS

function App() {
  return (
    <div className="container">
      <h1>Viennaflow</h1>
      <p>แอปช่วยดู Metro ในเวียนนา</p>
      <input type="text" placeholder="ค้นหาสถานี..." />
      <button>ค้นหา</button>
    </div>
  );
}

export default App;
