document.getElementById('fetch-data-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        const userData = document.getElementById('user-data');
        userData.innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Username: ${data.username}</p>
            <p>Email: ${data.email}</p>
        `;
    } catch (error) {
        console.error(error);
    }
});