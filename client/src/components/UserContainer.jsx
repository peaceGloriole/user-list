import Search from "./Search";
import UserList from "./UserList";

const UserContainer = () => {
    return (
        <section className="card users-container">
            <Search /> 

            <UserList />   
        </section>
    );
};

export default UserContainer;