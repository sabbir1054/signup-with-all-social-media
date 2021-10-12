
import Facebook from './Facebook';
import Github from './Github';
import Google from './Google';
import Twitter from './Twitter';

function App() {
  return (
    <div className="container">
      <div className="d-flex justify-content-space-evenly">
        <Google></Google>
        <Github></Github>
        <Facebook></Facebook>
        <Twitter></Twitter>
      </div>
    </div>
  );
}

export default App;
