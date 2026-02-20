const apiURL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const users = await response.json();
        showUsers(users);

    } catch (error) {
        console.error(error);
        document.getElementById("output").innerHTML =
            "<p>Error loading data</p>";
    }
}

function showUsers(users) {
    const output = document.getElementById("output");

    users.forEach(user => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <div class="name">${user.name}</div>
            <div class="info">Email: ${user.email}</div>
            <div class="info">City: ${user.address.city}</div>
        `;

        output.appendChild(div);
    });
}

getUsers();