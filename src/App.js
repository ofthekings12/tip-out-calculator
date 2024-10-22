import "./App.css";

function App() {

  return (
    <div className="container">
      <h1>Tip Out Calculator</h1>
      <div className="form-group">
        <label>Total Sales: </label>
        <input
        type='number'
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
    </div>
  );
}

export default App;
