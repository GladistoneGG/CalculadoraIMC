//Repositorio de dados funcionando como
const dados = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Esqueleto",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Buxin Cerveja",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Ronaldo Fenomeno",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Thais Carla",
      obesity: "III",
    },
  ];

  //Seleção de elementos
  const imcTable = document.querySelector('#imc-table');
  const weightInput = document.querySelector('#weight');
  const heigthInput = document.querySelector('#height');
  const calcBtn = document.querySelector('#calc-btn');
  const clearBtn = document.querySelector('#clear-btn');
  const imcNumber = document.querySelector('#imc-number span');
  const imcInfor = document.querySelector('#imc-info span');
  const backBtn = document.querySelector('#back-btn');
  const calContainer = document.querySelector('#calc-container');
  const resultContainer = document.querySelector('#result-container');

  //Lista de Funções
  //Função para puxar os dados do repositorio
function creatTable(dados){
    dados.forEach((i) => {

        const div = document.createElement('div');
        div.classList.add('table-data');

        const classificacao = document.createElement('p');
        classificacao.innerText = i.classification;

        const infor = document.createElement('p');
        infor.innerText = i.info;

        const obesidade = document.createElement('p');
        obesidade.innerText = i.obesity;

        div.appendChild(classificacao);
        div.appendChild(infor);
        div.appendChild(obesidade);

        imcTable.appendChild(div);
        
    });
}

//Função para exibir tabela de IMC do usuario
function showResults(){
  calContainer.classList.toggle('hide');
  resultContainer.classList.toggle('hide');
}

//Função para limpar os dados
function limparInputs(){
    heigthInput.value = ""
    weightInput.value = ""
}


//Função para calcular IMC
function calcIMC (peso, altura){
    peso = weightInput.value
    altura = heigthInput.value

    const imc = (peso / (altura*altura)).toFixed(1)

    let imcInfo

    dados.forEach((i) => {
      if (imc >= i.min && imc <= i.max){
        imcInfo = i.info;
      }
    });

    if (!imcInfo) return;

    imcNumber.innerText = imc
    imcInfor.innerText = imcInfo

    switch(imcInfo) {
      case "Esqueleto":
        imcNumber.classList.add('tamortoja');
        imcInfor.classList.add('tamortoja');
        break;
    
      case "Normal":
        imcNumber.classList.add('bom');
        imcInfor.classList.add('bom');
        break;
    
      case "Buxin Cerveja":
        imcNumber.classList.add('marromeno');
        imcInfor.classList.add('marromeno');
        break;
    
      case "Ronaldo Fenomeno":
        imcNumber.classList.add('ihrapaz');
        imcInfor.classList.add('ihrapaz');
        break;
    
      case "Thais Carla":
        imcNumber.classList.add('tamortoja');
        imcInfor.classList.add('tamortoja');
        break;
    }

    showResults()
 
}



  //Inicialização do projeto
  creatTable(dados);

//Lista de Eventos
calcBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const peso = +weightInput.value.replace(',','.');
    const altura = +heigthInput.value.replace(',','.');

    if (!peso | !altura) return;


    calcIMC();


})


//Evento responsavel por limpar os dados do input
  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    limparInputs();
  })

//Evento para o botao voltar, onde limpa os campos do formulario e volta para o inicio
  backBtn.addEventListener('click', () => {
    limparInputs();
    showResults();
  })