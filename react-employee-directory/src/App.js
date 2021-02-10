import React from "react";
import './App.css';
import Employee from "./pages/Employee";
import EmployeeHeader from './pages/EmployeeHeader';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Employee Directory
      </header>
      <EmployeeHeader/>
      <Employee/>
    </div>
  );
}

export default App;