import React from 'react';
import ReactDOM from 'react-dom';
import AppPortfolio from './components/AppPortfolio';
require('bootstrap-loader');
require('font-awesome-webpack-sass');
const resume = require('./resume.json'); // load resume file

const project = require('./project.json'); // load resume file

ReactDOM.render(
  <AppPortfolio jsonObj={{
    resume: resume,
    project: project,
    // exclude: [
    //   'project',
    //   'publication'
    // ]
  }} />,
  document.getElementById('root')
);
