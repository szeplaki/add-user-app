import Button from "../UI/Button";

const NewUser = (props) => {
  return (
    <form>
      <label>Username</label>
      <input />
      <br></br>
      <label>Age (Years)</label>
      <input />
      <br></br>
      <Button>Add user</Button>
    </form>
  );
};
export default NewUser;
