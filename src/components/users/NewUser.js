import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

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
    <Card>
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={userNameHandler}/>
      <br></br>
      <label htmlFor="userage">Age (Years)</label>
      <input id="userage" type="number" onChange={userAgeHandler}/>
      <br></br>
      <Button>Add user</Button>
    </form>
    </Card>
  );
};
export default NewUser;
