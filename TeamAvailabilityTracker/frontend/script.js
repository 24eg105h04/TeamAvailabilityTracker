let available = true;

function toggleStatus(){

    available = !available;

    let status =
    document.getElementById("status");

    if(available){
        status.innerText = "Available";
        status.style.color = "green";
    }
    else{
        status.innerText = "Unavailable";
        status.style.color = "red";
    }
}