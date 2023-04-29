firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      window.location.href = "./index.html";
    }
    var usuario = document.getElementById("usuario");
    usuario.innerHTML = user.email;
  });