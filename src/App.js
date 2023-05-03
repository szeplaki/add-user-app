import { useState } from "react";
import "./App.css";
import NewUser from "./components/users/NewUser";
import UserList from "./components/users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const userListHandler = (userName, userAge) => {
    setUserList((prevList) => {
      return [...prevList, { name: userName, age: userAge }];
    });
  };
  let content = "";
  if (userList.length > 0) {
    content = <UserList listItems={userList} />
  }
  return (
    <div className="App">
      <section>
        <NewUser onAddUser={userListHandler} />
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
