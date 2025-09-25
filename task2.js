function getFormvalue(event) {
     event.preventDefault(); 
    const form1 = document.getElementById("form1");
    const nombre = form1.elements["fname"].value;
    const apellido = form1.elements["lname"].value;
    console.log(nombre, apellido);
}
