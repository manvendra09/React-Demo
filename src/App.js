import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Organisation from "./components/Organisation";
import RepositoryList from './components/Repo';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Organisation repoList={RepositoryList}></Organisation>       
        </div>
      </div>
    </Router>
  );
}

export default App;
