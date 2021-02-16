
const getUsers = async () => {
    const users = await fetch('http://localhost:3000/').then((data) => data.json())
    console.log(users);
}

getUsers();

