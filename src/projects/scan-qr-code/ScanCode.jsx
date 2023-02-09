import "./ScanCode.css";
import CardImg from "./image-qr-code.png";

function App() {
  return (
    <div className="App bgScan bg-[#3685fe]">
      <div className="card">
        <img src={CardImg} alt="" />

        <div className="cardBody">
          <h2>Improve your front-end skill by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
