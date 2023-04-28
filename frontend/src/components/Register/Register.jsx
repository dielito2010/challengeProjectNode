function handleSubmit() {
  //e.preventDefault();
  alert("ok!");
  //console.log(`Email: ${email}, Password: ${password}`);
  // aqui você pode adicionar sua lógica de autenticação
}

function Register() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title text-center">Registre-se conosco</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Nome:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Sobrenome:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="sobrenome"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Cep:</label>
                  <div className="input-group">
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="getcep"
                      required="required"
                      pattern="[0-9]+$"
                      maxlength="8"
                      minlength="8"
                      placeholder="Digite somente os 8 números do seu CEP"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="getcep"
                    >
                      Buscar
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Rua:</label>
                  <input type="text" className="form-control" id="rua" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Bairro:</label>
                  <input type="text" className="form-control" id="Bairro" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">UF:</label>
                  <input type="text" className="form-control" id="uf" />
                </div>
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
                <div className="form-group">
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
                    className="btn btn-primary btn-lg btn-block mt-3"
                  >
                    Cadastrar
                  </button>
                </div>
              </form>                  
              <div className="form-group mt-5">
                <a
                  href="/"
                  class="btn btn-secondary btn-sm active"
                  role="button"
                  aria-pressed="true"
                  id="cadastrar"
                >
                  Voltar para login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
