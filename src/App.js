
import React from 'react';
import logo from './spectrum-logo.png';
import './spectrum.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" data-component-name="Logo" />

	      <div className="react-spectrum-provider spectrum spectrum--light spectrum--medium">
		      <div className="row">
			      <button className="spectrum-Button spectrum-Button--cta" data-component-name="CTA Button"><span className="spectrum-Button-label">React</span></button>
			      <button className="spectrum-Button spectrum-Button--cta is-disabled" disabled="" data-component-name="CTA Button Disabled"><span className="spectrum-Button-label">React</span></button>
		      </div>

		      <div className="row">
			      <button className="spectrum-Button spectrum-Button--primary" data-component-name="Primary Button"><span className="spectrum-Button-label">React</span></button>
			      <button className="spectrum-Button spectrum-Button--primary is-disabled" disabled="" data-component-name="Primary Button Disabled"><span className="spectrum-Button-label">React</span></button>
		      </div>

		      <div className="row">
			      <button className="spectrum-Button spectrum-Button--secondary" data-component-name="Secondary Button"><span className="spectrum-Button-label">React</span></button>
			      <button className="spectrum-Button spectrum-Button--secondary is-disabled" disabled="" data-component-name="Secondary Button Disabled"><span className="spectrum-Button-label">React</span></button>
		      </div>

		      <div className="row">
			      <button className="spectrum-Button spectrum-Button--warning" data-component-name="Warning Button"><span className="spectrum-Button-label">React</span></button>
			      <button className="spectrum-Button spectrum-Button--warning is-disabled" disabled="" data-component-name="Warning Button Disabled"><span className="spectrum-Button-label">React</span></button>
		      </div>
	      </div>

	      <div className="row">
		      <table className="spectrum-Table" data-component-name="Table">
			      <thead className="spectrum-Table-head" style={{color: 'color: rgb(110, 110, 110);'}}>
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
