const userFullName = document.getElementById('username');
const userEmail = document.getElementById("email");
const userMobile = document.getElementById("mobile");
const userAddress = document.getElementById("address");


(async function (){
    let dataParse ;
    try {
        const fetchedData = await fetch('http://localhost:4500/welcome/userdata/' , {method : 'GET'});
        dataParse = await fetchedData.json();    
    }
    catch (err) {
        console.log(err);
        return;
    }
    userFullName.innerText = dataParse["username"];
    userEmail.innerText = dataParse["email"];
    userMobile.innerText = dataParse["mobile"];
    userAddress.innerText = dataParse["address"];
})();