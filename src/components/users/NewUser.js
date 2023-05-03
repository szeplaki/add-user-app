import { useState } from "react";
import Button from "../UI/Button";

const NewUser = (props) => {

    const [userName, setUserName] = useState();
    const userNameHandler = event => {
        setUserName(event.target.value);
    }

    const [userAge, setUserAge] = useState();
    const userAgeHandler = event => {
        setUserAge(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddUser(userName, userAge);
    }

  return (
    <form onSubmit={formSubmitHandler}>
      <label>Username</label>
      <input onChange={userNameHandler}/>
      <br></br>
      <label>Age (Years)</label>
      <input onChange={userAgeHandler}/>
      <br></br>
      <Button>Add user</Button>
    </form>
  );
};
export default NewUser;
