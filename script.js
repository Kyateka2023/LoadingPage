const button = document.getElementById("firstButton");

function NextPage() 
{
    window.location.href = "loading.html";
}

button.addEventListener("click", NextPage);
