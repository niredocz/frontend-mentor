import './App.css';
import { Route, Routes } from 'react-router-dom'
import ScanCode from './projects/scan-qr-code/ScanCode'
import AdviceGenerator from './projects/advice-generator/AdviceGenerator'


function App() {
  return (
    <Routes>
      <Route path='/scan-qr-code' element={<ScanCode />} />
      <Route path='/advice-generator' element={<AdviceGenerator />} />
    </Routes>
  );
}

export default App;
