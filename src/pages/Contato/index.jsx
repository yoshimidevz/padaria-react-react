export function Contato() {
  return (
    <>
      <div className="contentContact">
        <form className="contato" action="submit">
          <div>
            <label htmlFor="nome">Nome:</label>
            <input className="form-control" type="text" name="nome" id="nome" />
          </div>
          <div>
            <label htmlFor="telefone">Telefone:</label>
            <input className="form-control" type="tel" name="telefone" id="telefone" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input className="form-control" type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="mensagem">Digite sua mensagem:</label>
            <textarea name="mensagem" cols="30" rows="8"></textarea>
          </div>
          <div className="botao">
            <button type="submit">Enviar mensagem!</button>
          </div>
        </form>

        {/* <!-- Mapa ao lado do formulário --> */}
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921807.1410476692!2d-49.57270297847795!3d-25.511410949417517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db8fdc75a02a3d%3A0x6a631ab7094eeb59!2sIFPR%20-%20Campus%20Paranagu%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1732042253128!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contato;
