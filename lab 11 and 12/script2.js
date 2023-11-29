let counter = 0

// let abhik = {
//     name: "Abhik",
//     email: "abhikc@gmail.com",
//     username: "MyBack"
// }

// let newAbhik = JSON.stringify(abhik)

document.getElementById("fetch-data-btn").addEventListener("click", () => {
    fetch("info.json").then(
        (response) => {
            response.json().then(
                (data) => {
                    data = data[counter]
                    document.getElementById("user-data").innerHTML =
                        `
            <p>Name: ${data.name}</p>
            <p>Username: ${data.username}</p>
            <p>Email: ${data.email}</p>
             `
                }
            )
        }
    )
    counter += 1;

    if (counter >= 10) {
        counter = 0;
    }

    // fetch('data:text/json;charset=utf-8,' + encodeURIComponent(newAbhik)).then(
    //     (response) => {
    //         response.json().then(
    //             (data) => {
    //                 document.getElementById("user-data").innerHTML =  `
    //                         <p>Name: ${data.name}</p>
    //                         <p>Username: ${data.username}</p>
    //                         <p>Email: ${data.email}</p>
    //                          `
    //             }
    //         )
    //     }
    // )

})