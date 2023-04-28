function handleSubmit() {
  //e.preventDefault();
  alert("teste");
  //console.log(`Email: ${email}, Password: ${password}`);
  // aqui você pode adicionar sua lógica de autenticação
}

function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required="required"
                  />{" "}
                  {/*{email} onChange={(e) => setEmail(e.target.value)*/}
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Senha:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required="required"
                  />{" "}
                  {/*value={password} onChange={(e) => setPassword(e.target.value)*/}
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block mt-3 mb-5"
                  >
                    Login
                  </button>
                </div>
              </form>
              <label htmlFor="cadastar">
                  Caso não tenha cadastro clique em:
                </label>
              <div className="form-group mt-2">
                <a
                  href="/register"
                  class="btn btn-secondary btn-sm active"
                  role="button"
                  aria-pressed="true"
                  id="cadastrar"
                >
                  Cadastrar-se
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
