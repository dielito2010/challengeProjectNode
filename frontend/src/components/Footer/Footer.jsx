import "./Footer.css";

export function Footer() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  return (
    <div className="conteudoFooter">
      <small>
        {anoAtual} ~ Desenvolvido por:&nbsp;
        <a
          href="https://danielribeiro.dev.br/"
          target="_blank"
          title="Click para navegar ao site: danielribeiro.dev.br"
        >
          danielribeiro.dev.br
        </a>
        &nbsp;
        para:
        &nbsp;
        <a
          href="https://github.com/dielito2010/bemol_challenge"
          target="_blank"
          title="Click ver o repositório deste site"
        >
          Bemol Challenge Project
        </a>
      </small>
    </div>
  );
}