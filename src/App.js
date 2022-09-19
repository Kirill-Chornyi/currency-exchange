
import './index.scss';
import {Block} from "./Block"

function App() {
  return (
    <div className="App">
      <Block value={0} currency={'UAH'}/>
      <Block value={0} currency={'USD'}/>
    </div>
  );
}

export default App;
