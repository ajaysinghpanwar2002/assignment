import { Body, Header, SideBar } from "./components"
import './App.css'
import { ReduxProvider } from './redux/provider'

function App() {
  return (
    <div className="App">
      <ReduxProvider>
        <div className="Skill-page">
          <div className="Header-section">
            <Header />
          </div>
          <div className="Body-section">
            <div className="SideBar-section">
              <SideBar />
            </div>
            <div className="Main-section">
              <Body />
            </div>
          </div>
        </div>
      </ReduxProvider>
    </div>
  );
}

export default App;
