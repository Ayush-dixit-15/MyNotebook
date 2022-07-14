
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
// import your route components too

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <>
  <Navbar/>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
);


// function App() {
//   return (
//     <div className="App">
//      <h1>this is mynotebook</h1>
//     </div>
//   );
// }

export default App;
