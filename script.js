function myFunction(){
    document.getElementById("p1").innerHTML=
    document.getElementById("DOM").firstChild.nodeValue;
    document.getElementById("p2").innerHTML=
    document.getElementById("DOM").childNodes[0].nodeValue;
}