import { Container } from "./styles/app";
import { Global } from "./styles/Global";
import headerLogo from "./assets/logo.svg";
import { Plus } from "phosphor-react";
import Header from "./components/Header";
import SummaryTable from "./components/SummaryTable";

function App() {
  return (
    <Container>
      <div className="content">
      <Header/>
      <SummaryTable/>
      </div>
      <Global />
    </Container>
  );
}

export default App;
