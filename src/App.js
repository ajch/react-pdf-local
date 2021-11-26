import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './pdf/document';

const App = () => (
  <PDFViewer style={{width:'100%'}} height={1024}>
    <MyDocument />
  </PDFViewer>
);

export default App;
