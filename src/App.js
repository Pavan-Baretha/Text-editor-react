import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import TextEditor from './component/TextEditor'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Product}/>
        <Route exact path="/textEditor" component={TextEditor}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
