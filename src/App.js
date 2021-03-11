import logo from "./logo.svg";
import "./App.css";
import Graph from "./components/Graph";
import Info from "./components/Info";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Graph />
    </div>
  );
}

export default App;
