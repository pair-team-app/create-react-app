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
      </header>
    </div>
  );
}

export default App;
