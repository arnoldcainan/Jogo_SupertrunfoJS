var cartaTotodile = {
    nome: "Totodile",
    imagem:"https://i.pinimg.com/originals/98/28/b0/9828b00f087d84e0ad96bd2a5a490317.gif",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaBulbasauro = {
    nome: "Bulbasauro",
    imagem:"https://media4.giphy.com/media/I2nZMy0sI0ySA/giphy.gif",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaChikorita = {
    nome: "Chikorita",
    imagem:"https://i.pinimg.com/originals/fa/35/62/fa3562de46804f8b3f63aaf5590a72a1.gif",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}
var cartaCharmander= {
    nome: "Charmander",
    imagem:"https://i.pinimg.com/originals/37/08/62/370862bbff7f3d3345a3d0e9b45a38c3.gif",
    atributos: {
        ataque: 92,
        defesa: 50,
        magia: 70
    }
}
var cartaSquirtle= {
    nome: "Squirtle",
    imagem:"https://thumbs.gfycat.com/OccasionalDistortedAsiaticgreaterfreshwaterclam-size_restricted.gif",
  atributos: {
        ataque: 75,
        defesa: 90,
        magia: 65
    }
}
 var cartaPikachu= {
    nome: "Pikachu",
    imagem:"https://i.pinimg.com/originals/ab/ee/0f/abee0fc1e685e6ecad60cd507a9cf6b5.gif",
   atributos: {
        ataque: 80,
        defesa: 70,
        magia: 90
    }
}
 var cartaButterfree= {
    nome: "Butterfree",
    imagem:"https://i.pinimg.com/originals/39/cb/eb/39cbeb681bf9636ce2499fd248d4141e.gif",
 atributos: {  
        ataque: 60,
        defesa: 50,
        magia: 80
    }
}
 var cartaCyndaquil= {
    nome: "Cyndaquil",
    imagem:"https://media.tenor.com/images/95f4af1be953e7314574681e7b652e6a/tenor.gif",
 atributos: {  
        ataque: 65,
        defesa: 40,
        magia: 85
    }
}

// Fim das cartas   /\
//                  ||
/*COLOCAR MAIS POKEMON

*/

// Fim das cartas  /\
               


var cartaMaquina
var cartaJogador

// ADICIONAR NO VETOR AS CARTAS  V

var cartas = [cartaTotodile, cartaBulbasauro, cartaChikorita, cartaCharmander, cartaSquirtle, cartaPikachu, cartaButterfree, cartaCyndaquil]

var pontosJogador = 0
var pontosMaquina = 0
atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById("quantidade-cartas")
  var html = "Quantidades de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = `Jogador ${pontosJogador} / ${pontosMaquina} Maquina`
  
  divPlacar.innerHTML = html
}
  
function sortearCarta() {
    // cartas.length faz o limite de carta a ser sortiada
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
  //metodo/API splice, para remover a carta escolhida
    cartas.splice(numeroCartaMaquina, 1)
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)  
  
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibeCartaJogador()
    
}
function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura =  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  var nome =`<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto =""
  
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " "+ cartaJogador.atributos[atributo] + "<br>"
    }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+ '</div>'  
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">VENCEU!!!</p>'
      pontosJogador++
      
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">PERDEU!!!</p>'
      pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">EMPATOU!!!</p>'
    } 
  
  if (cartas.length == 0){
    alert("FIM DE JOGO")
    if(pontosJogador>pontosMaquina){
      htmlResultado = '<p class="resultado-final">VENCEU!!!</p>'
    } else if (pontosMaquina>pontosJogador) {
      htmlResultado = '<p class="resultado-final">PERDEU!!!</p>'
    } else{
      htmlResultado = '<p class="resultado-final">EMPATOU!!!</p>'
    }
  } else {
      document.getElementById('btnProximarodada').disabled = false
    }
  
  divResultado.innerHTML= htmlResultado
  document.getElementById('btnJogar').disabled = true
  

  
  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura =  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  var nome =`<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto =""
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " "+ cartaMaquina.atributos[atributo] + "<br>"
    }
  
  var html = "<div id='opcoes' class='carta-status'>"
   divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+ '</div>'
    document.getElementById('btnProximarodada').disabled = false
  
  
}

function proximaRodada(){
   //escrever por cima da anterior
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="cartas"></div>` 
  
  
  //habilitar os botoes
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximarodada').disabled= true
  
  //Para limpar msg de resultado
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}

