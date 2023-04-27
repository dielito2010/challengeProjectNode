import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import Login from "./components/Main/Login";
import Home from "./components/Main/Home";
import './App.css'
{/*import * as firebase from "firebase/app"
import * as firebaseAuth from "firebase/auth"

const firebaseConfig = {
  "type": "service_account",
  "project_id": "fir-login-a2f0f",
  "private_key_id": "af9c61c99950f2908c540a13ff69977a348f73c8",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsWvS8KaduX3BL\nA3ThO0YWuyaYDN/shkQ1uSyY5Br7p89R8KSewW+GY8juh2FS5upf7DEan2yJSZQj\nuy5MUca5qUESSJGC0HZKQ6V0LVp6pGXWmQiAEqHwn1KL4DCfi00uolbn9yOiCqK8\njmcAeOF4Su3LTAug+Ki4O4E4i421ZcnW0tMYhg/xeYUR76/Rqu+sL/Ri8ckSncIU\nYLrRPwM/czBpUH/bai5tVbQvax3e8N2mtoMHhOErR0AV53394zhG4qvBkbbZy8Ml\n3u6VTODm3w2yzG6NhnLH0m9lQZk9DwU9JJUPs8S+2+7osEXb8Kq8rpEzXa3Wg3bB\nBqp90jEVAgMBAAECggEABeVurek24x28t7Q8kV/3u9tXLKh0GKFXQAc/sVNMYQOS\nohj7aLrxV8WeIBrdh3qC1hk8bM67Zc7wlHBY2x+JDtztbvSwlasQAOZjiJ/sknmB\nSmAd3FPG2nZ42nQm9a5MS6YeFv1raKW4f37Xozp/bCAUFnpZg34+N19Bwm9zv5rX\naokYbQU5xbuuvgETHGphh7UMItYKEEyg9Dw4Lfly0zEyoNrYjKABn4BQopAg+1x1\nda3Zt/Xg37ckLFr4QpYPp1tdfLLdiSAATtvL5EJuCFcvpRo0i0+sLxC7R/QxM0k0\nx0Pr2Wqb5kM2CWUL4Prrw1UypuDEBgyQw47MObGmgQKBgQDkgpt2KXJhWD9riMps\nvipn1ENslIzrkljsd6+/Yb1XyFcuBnEjc5cEtkAJJKCWUr2IBIruNxMuFdvgMu2N\nJ5WIAneHAg+37udPDITov6u/Y+p16tAkstzirqIrPNxNu+7Ig6pGtWD9h9yulR/m\n1cH7fB76TLOJF6J/S2fq8dXK0QKBgQDBFvSR5uU7nsUfDWQqA5MI3GzkFHuZaKr/\n/WKa0GB3GJAKX4HMXbaWs+UCopF9VFB4yUzDbDyffY2kdFDg5vAHzGjDdMqXAuyC\n2EFF/9c4fRtqwoWT5oNBOjKCpviwRiki3XrdKHylxg6EigUmYs7p6eZe8Txslp5r\nOktrORpLBQKBgQDElQeg868Ox5hnrlpWipJ4mEcY1gMVdeVCKQTso+z748H8OlaC\npSI6T39vXi84ox2iMiZDIOZDM1Lg4W8zi+Y8B8NERiW3mrMrch21DY93K0G9B7Dg\noW8dJBcnE0iDJzYZEgweoFM8SPE0z92N/D7RVspfkjSxr79/uyM/H6VIwQKBgBGx\nPcWkp3p4CM3Yl0X2P+G++MdJTS34VjrQh9lxoHUpLgGVULpeF93lK+W66aPXNuxq\nXXtGjqN6iKD5+3MwFexRAYRvTiTaIru2fvyf/aNyazG0EzNDGuG+KGSqUf0s4JYO\nPzTGge1aoXfpgaFLynPKd85ZQlUc0/U1STXQ7KTVAoGAdWJU3ufyTTvQ6T61gC+z\ngDYmTzbV8W7mBe26V096drKy68o3jIxUu+OvuNr4/ESPqolaPuBUp6YzH/kzGbUf\nG2+fMhxQmutmQqOkkB6CQ6N0zA9BvKStGmmvcr1R5rknQ7/RQkXzKkmxhtO5tWPh\nHMchm9JnZWR//TVEvPj/EKc=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-jz6pw@fir-login-a2f0f.iam.gserviceaccount.com",
  "client_id": "106122622749649220629",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jz6pw%40fir-login-a2f0f.iam.gserviceaccount.com"
}
const appFirebase = firebase.initializeApp(firebaseConfig);
const auth = firebaseAuth.initializeAuth(appFirebase);
firebaseAuth.signInWithEmailAndPassword(
  auth, "daniel@teste.com", "idiubs#vyv@1787"
).then(user => console.log(user))
.catch(error => console.log("error", error));*/}

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      
      <main>
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {/*<Route path="/novoCard" element={<CardCriar />} />
            <Route path="/cardEditarRemover/:id" element={<CardPorId />} />
            <Route path="/cardEditar/:id" element={<CardEditar />} />*/}
          </Routes>
        </div>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App
