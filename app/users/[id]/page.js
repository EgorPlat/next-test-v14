import ChangeUserInfo from "../../../widgets/users/ChangeUserInfo/changeUserInfo";

export const generateMetadata = async ({ params }) => {
    return {
        title: `User - ${params.id}`,
        description: `
            This is a profile of User with id = ${params.id}. Here u can check some information about this user.
        `
    }
}

const fetchUserById = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        cache: "force-cache",
        next: {
            revalidate: 15
        }
    });

    const data = await response.json();
    return data;
}

export default async function User({ params }) {

    const user = await fetchUserById(params.id);

    return (
        <div className="user">
            <p>Name: {user.name}</p>
            <p>Phone: {user.phone}</p>
            <p>User Name: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
            <ChangeUserInfo user={user} />
        </div>
    )
}
  