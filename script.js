// 🔥 SUPABASE
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://oktaxyoesgxauaevfntr.supabase.co";
const supabaseKey = "sb_publishable_uW0iQApSI6AUnT5kWZfRJQ_iTmudC9V";

const supabase = createClient(supabaseUrl, supabaseKey);

// ================= BOTÕES =================
window.botao1 = function (opcao) {
  let conteudo = "";

  if (opcao === 1) {
    conteudo = `
      <img src="06.jpg" class="imagem">
      <p class="texto">
        <span class="titulo">Infância formação</span>
        Piotr Ilitch Tchaikovsky nasceu em 7 de maio de 1840, na cidade de Vótkinsk, Rússia. Filho de um engenheiro e de uma mãe de origem francesa, cresceu em um ambiente que favorecia a cultura e a música. Desde muito cedo demonstrou talento: aos cinco anos já tocava piano e logo começou a compor pequenas peças. Apesar de ter sido direcionado para estudos jurídicos, sua paixão pela música se manteve viva. A mudança da família para São Petersburgo ampliou seu contato com concertos e teatro, experiências que marcaram profundamente sua infância e despertaram nele o desejo de seguir a carreira musical.
      </p>
    `;
  }

  if (opcao === 2) {
    conteudo = `
      <img src="03.jpg" class="imagem">
      <p class="texto">
        <span class="titulo">Início carreira</span>
        Após concluir seus estudos jurídicos, Tchaikovsky decidiu dedicar-se à música e ingressou no Conservatório de São Petersburgo, onde se formou em composição. Mais tarde, tornou-se professor no Conservatório de Moscou, mas sua vocação criativa o levou a abandonar o ensino para se dedicar exclusivamente à composição. Sua carreira rapidamente ganhou projeção internacional: foi o primeiro compositor russo a conquistar fama fora de seu país, regendo em diversas cidades da Europa e até nos Estados Unidos. Em reconhecimento ao seu talento, o imperador Alexandre III concedeu-lhe uma pensão vitalícia, garantindo estabilidade financeira e liberdade artística.
      </p>
    `;
  }

  if (opcao === 3) {
    conteudo = `
      <img src="04.jpg" class="imagem">
      <p class="texto">
        <span class="titulo">Principais obras</span>
        Tchaikovsky deixou um repertório vasto e memorável. Entre seus balés, destacam-se O Lago dos Cisnes (1877), A Bela Adormecida (1890) e O Quebra-Nozes (1892), que se tornaram ícones culturais e continuam a ser apresentados em teatros do mundo inteiro. Compôs seis sinfonias, sendo a última, Sinfonia nº 6 “Patética”, uma de suas obras mais emocionantes. Criou também concertos célebres, como o Concerto para Piano nº 1 e o Concerto para Violino. Suas óperas, como Eugene Onegin e A Dama de Espadas, além de peças orquestrais como a Abertura 1812 e a fantasia Romeu e Julieta, consolidaram sua reputação como mestre do romantismo.
      </p>
    `;
  }

  if (opcao === 4) {
    conteudo = `
      <img src="tchaikovsky.jpg" class="imagem">
      <p class="texto">
        <span class="titulo">Legado</span>
        Tchaikovsky é lembrado como um dos maiores compositores do período romântico, capaz de unir emoção intensa e melodias inesquecíveis. Sua música ajudou a popularizar o balé clássico e levou a tradição russa ao cenário internacional, influenciando gerações de músicos. Morreu em 1893, em São Petersburgo, mas sua obra continua viva em concertos, teatros e até em trilhas sonoras modernas, mantendo-se como um dos pilares da música erudita mundial.
      </p>
    `;
  }

  if (opcao === 5) {
    conteudo = `
      <form id="formContato" class="cadastro-box">
        <h2 style="color:white; text-align:center;">Dados</h2>

        <div class="campo">
          <label>Nome completo</label>
          <input id="nome" required>
        </div>

        <div class="campo">
          <label>email</label>
          <input id="email">
        </div>

        <div class="campo">
          <label>Endereço</label>
          <input id="endereco" required>
        </div>

        <button type="submit" class="btn-cadastro salvar">Enviar</button>
      </form>
    `;
  }

  const celula = document.getElementById("celula4");
  celula.innerHTML = conteudo;

  // ⚠️ FORMULARIO
  const form = document.getElementById("formContato");

  if (form) { 
    form.addEventListener("submit", enviarCadastro);
  }
};

// ================= ENVIO SUPABASE =================
async function enviarCadastro(e) {
  e.preventDefault();

  const dados = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    endereco: document.getElementById("endereco").value
  };

  const { data, error } = await supabase
    .from("cadastros")
    .insert([dados]);

  if (error) {
    alert("Erro ao salvar: " + error.message);
  } else {
    alert("Cadastro salvo com sucesso!");
    e.target.reset();
  }
}


/* ===== FUNÇÕES GLOBAIS (HTML ONCLICK) ===== */
window.mostrarConteudo = mostrarConteudo;
window.abrirCadastro = abrirCadastro;