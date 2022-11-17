import Cosohatang from "./components/Timeline/Cosohatang/Cosohatang";
import CardBody from "./components/CardBody/CardBody";
import Header from "./components/Header/Header";
import Timeline from "./components/Timeline/Timeline";
import MocLichSu from "./components/MocLichSu/MocLichSu";
import logo from "./logo.svg";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <CardBody />
      <MocLichSu />
      <Timeline />
      <Cosohatang />
      <Footer />
    </div>
  );
}

export default App;
