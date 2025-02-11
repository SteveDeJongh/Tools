import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/home/home";
import { Header } from "./components/header/header";
import { Tools } from "./components/tools/tools";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Tools />
    </>
  );
}

export default App;
