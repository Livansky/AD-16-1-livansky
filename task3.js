


const btn = document.getElementById("linkinfo")

btn.addEventListener("click",() => {
    const links = document.querySelectorAll("a")
    const cantidadLinks= links.length;
    const primerLink = links[0].href;
    const ultimoLink =links[links.length-1].href;
    alert("Número de links: " + cantidadLinks + "\nPrimer link: " + primerLink + "\nÚltimo link: " + ultimoLink);
})
