import { useState } from "react";
import "./App.css";

function App() {
  const [totalSales, setTotalSales] = useState('');



  return (
    <div className="container">
      <h1>Tip Out Calculator</h1>
      <div className="form-group">
        <label>Total Sales: </label>
        <input
        type='number'
        value={totalSales}
        onChange={(e) => setTotalSales(e.target.value)}
        placeholder="Enter total sales"
        />        
      </div>
      <div className="form-group">
        <label>Promos (comma separated - e.g. 10,10,53.50): </label>
        <input
        type='text'
        placeholder="Enter promo amounts"
        />
      </div>
      <div className="form-group">
        <label>Net Amount: </label>
        <input
        type='number'
        placeholder="Enter NET amount"
        />
      </div>
      <button className="calculate-button">Calculate Tip Out</button>

      <div className="result-card">
        <h2>Results</h2>
        <p>Total Sales After Promos: </p>
        <p>Tip Out (5.75%): </p>
        <p>Tax Adjusted Tip Out: </p>
        <p>Amount House Owes You/Amount You Owe House</p>

      </div>
    </div>
  );
}

export default App;
