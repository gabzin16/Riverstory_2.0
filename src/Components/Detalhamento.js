import css from "./Detalhamento.css"

// Importe as dependências necessárias, se houver
import React from 'react';

// Defina o componente Detalhamento
function Detalhamento() {
    return(
         <div className="container">
      <div className="livro-page">
        <img src="assets/elementos/livro2 detalhamento.jpg" alt="Product Image" className="livro-image" />

        {/* BOTÕES */}
        <div className="botao-ler">
          <div className="dropdown-botao">
            <button className="ler">Leia agora ▼</button>
            <div className="dropdown-formatos">
              <a href="#">PDF</a>
              <a href="#">EPUB</a>
              <a href="#">MOBI</a>
              <a href="#">AZW</a>
            </div>
          </div>

          <button className="ler">Quero ler</button>
          <br />
          <h4>Classifique sua leitura</h4>

          {/* AVALIAÇÃO CLASSIFICAÇÃO */}
          <div className="avaliacao">
            <div className="star-avaliacao">
              <span className="bi-star-fill" />
              <span className="bi-star-fill" />
              <span className="bi-star-fill" />
              <span className="bi-star-fill" />
              <span className="bi-star-fill" />
            </div>
          </div>
        </div>

        {/* INFORMAÇÕES LIVRO */}
        <div className="livro-description">
          <h1>Até o verão terminar</h1>
          <h2 className="CH">Collen Hoover</h2>

          <button className="etiqueta">Favorito do site &#10084;&#65039;&#65039;</button>
          <div className="stars-icon">
            <span className="fa fa-star fa-2x checked" />
            <span className="fa fa-star fa-2x checked" />
            <span className="fa fa-star fa-2x checked" />
            <span className="fa fa-star fa-2x checked" />
            <span className="fa fa-star fa-2x" />
          </div>

          <p>
            Beyah enfrenta desafios ao passar o verão na casa do pai desconhecido. Lá, conhece Samson, um vizinho misterioso com quem inicia um romance improvável. Apesar das diferenças evidentes, uma conexão intensa surge entre eles, desafiando as barreiras sociais e emocionais que os separam. Enquanto o verão avança, Beyah e Samson exploram um amor improvável, marcado por recomeços e despedidas, revelando segredos que os aproximam e os transformam para sempre.
          </p>
          <hr />

          {/* HASHTAGS GENEROS */}
          <div className="generos">
            <h4>Young Adults</h4>
            <h4>Romance</h4>
            <h4>Collen Hoover</h4>
            <h4>New Adult</h4>
            <h4>Ficção</h4>
            <h4>Adulto</h4>
            <h4>Contemporâneo</h4>
          </div>

          {/* COMENTÁRIOS */}
          <section id="section-comentarios">
            <div className="comentarios">
              <span>Comentários</span>

              {/* COMENTÁRIO 1 */}
              <div className="box-comments">
                <div className="box-top">
                  <div className="profile">
                    {/* IMAGE */}
                    <div className="profile-img">
                      <img src="" alt="profile-img" />
                    </div>
                    <div className="name-user">
                      <strong>Gisele Bündchen</strong>
                      <span>@giselebundchen</span>
                    </div>
                  </div>
                  <div className="reviews">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                  </div>
                </div>

                {/* TEXTO COMENTARIO */}
                <div className="client-comment">
                  <p>
                    Este livro foi muito doce, mas também muito triste e comovente. Este livro é literalmente 'agosto' de Taylor Swift. Eles estão tendo um romance de verão, mas sabem que se separarão no final do verão e caramba. Ele se encaixa muito bem na letra da música. O final também foi muito bom!
                  </p>
                </div>
              </div>

              {/* COMENTÁRIO2 */}
              <div className="box-comments">
                <div className="box-top">
                  <div className="profile">
                    {/* IMAGE */}
                    <div className="profile-img">
                      <img src="assets/elementos/profile2.webp" alt="profile-img" />
                    </div>
                    <div className="name-user">
                      <strong>Gal Gadot</strong>
                      <span>@galgadotvarsano</span>
                    </div>
                  </div>
                  <div className="reviews">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>

                {/* TEXTO COMENTARIO */}
                <div className="client-comment">
                  <p>
                    NUNCA esperei menos de Colleen Hoover desde que li 'O Lado Feio do Amor'. Ela é essa autora que vai te arrebatar totalmente. E essa história? Esta história é absolutamente melhor que eu acho que também desenvolvi um osso do coração!!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    );
}

// Exporte o componente Detalhamento como padrão
export default Detalhamento;