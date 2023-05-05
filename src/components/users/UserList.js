import Card from "../UI/Card";

const UserList = (props) => {
 return (
    <Card>
        {props.listItems.map((user) => <li>{user.name} {user.age} years old</li>)}
    </Card>
 )   
}

export default UserList;