import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer , PDFDownloadLink} from '@react-pdf/renderer';
import MyDocument from './pdf/document';

const App = () => (
  <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
);

export default App;
