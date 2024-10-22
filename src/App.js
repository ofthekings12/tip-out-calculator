import { useState } from "react";
import "./App.css";

function App() {
  const [totalSales, setTotalSales] = useState("");
  const [promos, setPromos] = useState("");
  const [net, setNet] = useState("");
  const [result, setResult] = useState(null);

  const calculateTipOut = () => {
    const sales = parseFloat(totalSales) || 0;
    const promoTotal = promos
      .split(",")
      .reduce((acc, promo) => acc + parseFloat(promo || 0), 0); //takes comma separated promos and sums them
    const netAmount = parseFloat(net) || 0; // parse float takes value from input field and converts from string to integer

    const afterPromo = (sales - promoTotal).toFixed(2);
    const tipOut = (afterPromo * 0.0575).toFixed(2); // change tipout percentage here if necessary
    const taxAdjustedTipOut = (tipOut * 0.885).toFixed(2); // this calculates tipout by reverse tax (0.885) - change this value if necessary
    const amountOwed =
      netAmount < 0
        ? (Math.abs(netAmount) - taxAdjustedTipOut).toFixed(2)
        : (Math.abs(netAmount) + parseFloat(taxAdjustedTipOut)).toFixed(2); // checks if net is positive or negative value and calculates whether house or server owes money

    setResult({
      afterPromo,
      tipOut,
      taxAdjustedTipOut,
      amountOwed,
    });
  };

  return (
    <div className="container">
      <h1>Tip Out Calculator</h1>
      <div className="form-group">
        <label>Total Sales:</label>
        <input
          type="number"
          value={totalSales}
          onChange={(e) => setTotalSales(e.target.value)}
          placeholder="Enter total sales"
        />
      </div>
      <div className="form-group">
        <label>
          Promos (comma separated with no spaces - e.g. 10,10,55.20,58):
        </label>
        <input
          type="text"
          value={promos}
          onChange={(e) => setPromos(e.target.value)}
          placeholder="Enter promo amounts"
        />
      </div>
      <div className="form-group">
        <label>Net Amount:</label>
        <input
          type="number"
          value={net}
          onChange={(e) => setNet(e.target.value)}
          placeholder="Enter NET amount"
        />
      </div>
      <button className="calculate-button" onClick={calculateTipOut}>
        Calculate Tip Out 🤑
      </button>
      {result && (
        <div className="result-card">
          <h2>Results</h2>
          <p>Total Sales After Promos: ${result.afterPromo}</p>
          <p>Tip Out (5.75%): ${result.tipOut} </p>
          <p>Tax Adjusted Tip Out: ${result.taxAdjustedTipOut}</p>
          <p>
            {net < 0 ? "Amount House Owes You" : "Amount You Owe House"} : $
            {result.amountOwed}
          </p>
        </div>
      )}
      <footer className="footer">
        <p>
          Made by{" "}
          <a
            href="https://mikkodelosreyes.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mikko
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
