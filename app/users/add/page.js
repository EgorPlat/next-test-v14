'use client'
import Button from "../../../shared/ui/Button/Button";
import useUsers from "../../../store/users.store"
import "./page.css";


export default function AddUser() {

    const users = useUsers();

    const handleGetUsers = () => {
        users.fetchUsers();
    };
    
    return (
        <section className="addUser">
            <h3>Add users</h3>
            <Button onClick={handleGetUsers} title="Update users" />
            { users.loading && <p>Loading...</p> }
            { users.error && <p>{users.error}</p> }
            { !users.error && !users.loading && 
                <div className="usersList">
                    {
                        users.users.map(user => {
                            return (
                                <div>{user.name}</div>
                            )
                        })
                    }
                </div>
            }
        </section>
    )
}