import React from 'react';
import logo from './logo.png';
import './App.css';
import './spectrum.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

	      <div className="react-spectrum-provider spectrum spectrum--light spectrum--medium">
		      <div className="row">
			      <button className="spectrum-Button spectrum-Button--cta"><span className="spectrum-Button-label">React</span>
			      </button>
			      <button className="spectrum-Button spectrum-Button--cta is-disabled" disabled="">
				      <span className="spectrum-Button-label">React</span></button>
		      </div>
		      <div className="row">
			      <button className="spectrum-Button spectrum-Button--primary">
				      <span className="spectrum-Button-label">React</span></button>
			      <button className="spectrum-Button spectrum-Button--primary is-disabled" disabled="">
				      <span className="spectrum-Button-label">React</span></button>
		      </div>

		      <div className="row">
			      <button className="spectrum-Button spectrum-Button--warning">
				      <span className="spectrum-Button-label">React</span></button>
			      <button className="spectrum-Button spectrum-Button--warning is-disabled" disabled="">
				      <span className="spectrum-Button-label">React</span></button>
		      </div>
	      </div>

	      <div className="row">
		      <table className="spectrum-Table">
			      <thead className="spectrum-Table-head">
			      <tr>
				      <th className="spectrum-Table-headCell">Pet Name</th>
				      <th className="spectrum-Table-headCell">Type</th>
				      <th className="spectrum-Table-headCell">Good/Bad</th>
			      </tr>
			      </thead>
			      <tbody className="spectrum-Table-body">
			      <tr className="spectrum-Table-row">
				      <td className="spectrum-Table-cell">Mongo</td>
				      <td className="spectrum-Table-cell">Chihuahua</td>
				      <td className="spectrum-Table-cell">Bad</td>
			      </tr>
			      <tr className="spectrum-Table-row">
				      <td className="spectrum-Table-cell">Tiny</td>
				      <td className="spectrum-Table-cell">Great Dane</td>
				      <td className="spectrum-Table-cell">Bad</td>
			      </tr>
			      <tr className="spectrum-Table-row">
				      <td className="spectrum-Table-cell">Jaws</td>
				      <td className="spectrum-Table-cell">Pit Bull</td>
				      <td className="spectrum-Table-cell">Good</td>
			      </tr>
			      </tbody>
		      </table>
	      </div>
      </header>
    </div>
  );
}

export default App;
