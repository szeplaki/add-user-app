import "./App.css";
import NewUser from "./components/users/NewUser";

function App() {
  return (<div className="App">
    <section>
      <NewUser />
    </section>
    <section>
      No users.
    </section>
  </div>);
}

export default App;
