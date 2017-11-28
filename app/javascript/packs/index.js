import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from '../react/src/BarChart';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<BarChart data={[5,10,1,3]} size={[500,500]} />, document.getElementById('app'));
})
