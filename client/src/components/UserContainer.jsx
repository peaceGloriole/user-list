import Search from "./Search";
import UserList from "./UserList";

const UserContainer = () => {
    return (
        <section className="card users-container">
            <Search /> 

            <UserList />   

            <button className="btn-add btn">Add new user</button>
        </section>
    );
};

export default UserContainer;