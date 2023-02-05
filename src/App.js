import './App.css';
import { Route, Routes } from 'react-router-dom'
import ScanQR from './projects/scan-qr-code/App'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/scan-qr-code' element={<ScanQR />} />
      </Routes>
    </div>
  );
}

export default App;
