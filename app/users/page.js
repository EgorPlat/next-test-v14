import Button from "../../shared/ui/Button/Button";

export const metadata = {
    title: 'Users list',
    description: 'Users list',
}

const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: {
            revalidate: 15
        }
    });

    const data = await response.json();
    return data;
}

export default async function Users() {

    const users = await fetchUsers();

    return (
        <section className="users">
            <h2>Users list</h2>
            <div>
                {
                    users.map(user => (
                        <div style={{ display: "flex", columnGap: "10px", alignItems: "center" }} key={user.id}>
                            <p>{user.id}</p>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <Button title="Перейти" userId={user.id} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
  