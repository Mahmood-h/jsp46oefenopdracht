console.log("Main is loaded");

let password = prompt("Vul het juiste wachtwoord in");

if (password == "H@ck3d") {
  alert("Wachtwoord is goed");
} else if (password <= "H@ck3d") {
  alert("You ve failed, game over!");
}
