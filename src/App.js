import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';


function App() {
  return (
    <div className="App">
      <header className="App-header">
     
      <div className="photo">
      < ProfilePhoto/>
      </div>
      <div className="title">
        <FullName/></div>
      <div className="address">
      <Address/>
      </div>
      
      </header>
    </div>
  );
}

export default App;
