// Configuração do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC7NSpAZVrq4qsLEMTEULVfdfv2-NZwy8g",
  authDomain: "bemol-challenge.firebaseapp.com",
  projectId: "bemol-challenge",
  storageBucket: "bemol-challenge.appspot.com",
  messagingSenderId: "995814121182",
  appId: "1:995814121182:web:891ad749cdb7f88705ec4f",
};
firebase.initializeApp(firebaseConfig);

// Obtém uma referência para o serviço de autenticação do Firebase
var auth = firebase.auth();

// Configura o evento de envio do formulário
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtém os valores dos campos de email e senha
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Faz o login com o Firebase Auth
    auth
      .signInWithEmailAndPassword(email, password)
      .then(function (user) {
        alert("Login bem sucedido");
        window.location.href = "/home.html";
      })
      .catch(function (error) {
        alert("EMAIL ou SENHA inválidos, verifique...");
      });
  });

function checkIfEmailExists(email) {
  return firebase
    .auth()
    .fetchSignInMethodsForEmail(email)
    .then(function (signInMethods) {
      if (signInMethods.length > 0) {
        alert("O email já está cadastrado:", signInMethods);
        window.location.href = "/index.html";
        return true;
      } else {
        return false;
      }
    })
    .catch(function (error) {
      console.error("Erro ao verificar se o email já está cadastrado:", error);
    });
}

document
  .getElementById("createUserForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtém os valores dos campos de email e senha
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Faz o login com o Firebase Auth
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (user) {
        alert("Login bem sucedido");
        window.location.href = "/home.html";
      })
      .catch(function (error) {
        alert("EMAIL ou SENHA inválidos, verifique...");
      });
  });

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    window.location.href = "/home.html";
  }
});

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "/index.html";
    })
    .catch(() => {
      alert("Erro ao fazer logout");
    });
}
