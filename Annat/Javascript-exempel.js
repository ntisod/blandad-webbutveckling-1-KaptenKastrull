function authourDialog(){
    alert("Ditt CV kommer att skickas in!");
    lämnain();
}
/* ett medelenade som kommer att komma upp när du har skickat in ditt CV*/
function lämnain(){
    document.getElementById("CV").innerHTML = "Ditt CV har skickats In!";
}
function bild(sw) {
    var pic;
    if (sw == 0) {
      pic = "utan.png"
    } else {
      pic = "färg.png"
    }
    document.getElementById('myImage').src = pic;
  }