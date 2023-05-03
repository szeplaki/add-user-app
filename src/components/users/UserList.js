const UserList = (props) => {
 return (
    <ul>
        {props.listItems.map((user) => <li>{user.name} {user.age} years old</li>)}
    </ul>
 )   
}

export default UserList;