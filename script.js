// Dados pré-definidos
//localStorage.clear();
const dados = [
  { sala: 201, nome: 'Acrisio Sena', leg: 'PT' },
  { sala: 321, nome: 'Agenor Neto', leg: 'MDB' },
  { sala: 114, nome: 'Alcides Fernandes', leg: 'PL' },
  { sala: 508, nome: 'Almir Bié', leg: 'PROGRESSISTAS' },
  { sala: 523, nome: 'Alysson Aguiar', leg: 'PCDOB' },
  { sala: 306, nome: 'Antônio Granja', leg: 'PSB' },
  { sala: 503, nome: 'Antônio Henrique', leg: 'PDT' },
  { sala: 509, nome: 'Ap Luiz Henrique', leg: 'REPUBLICANOS' },
  { sala: 512, nome: 'Bruno Pedrosa', leg: 'PT' },
  { sala: 501, nome: 'Carmelo Neto', leg: 'PL' },
  { sala: 514, nome: 'Cláudio Pinho', leg: 'PDT' },
  { sala: 518, nome: 'Danniel Oliveira', leg: 'MDB' },
  { sala: 308, nome: 'Davi de Raimundão', leg: 'MDB' },
  { sala: 309, nome: 'David Durand', leg: 'REPUBLICANOS' },
  { sala: 1, nome: 'De Assis Diniz', leg: 'PT' },
  { sala: 311, nome: 'Dra. Silvana', leg: 'PL' },
  { sala: 315, nome: 'Emilia Pessoa', leg: 'PSDB' },
  { sala: 204, nome: 'Felipe Mota', leg: 'UNIÃO' },
  { sala: 111, nome: 'Fernando Hugo', leg: 'PSD' },
  { sala: 305, nome: 'Firmo Camurça', leg: 'UNIÃO' },
  { sala: 303, nome: 'Guilherme Bismarck', leg: 'PSB' },
  { sala: 319, nome: 'Guilherme Landim', leg: 'PSB' },
  { sala: 316, nome: 'Guilherme Sampaio', leg: 'PT' },
  { sala: 304, nome: 'Heitor Férrer', leg: 'UNIÃO' },
  { sala: 510, nome: 'Jeová Mota', leg: 'PSB' },
  { sala: 312, nome: 'Jô Farias', leg: 'PT' },
  { sala: 516, nome: 'João Jaime', leg: 'PROGRESSISTAS' },
  { sala: 322, nome: 'José Albuquerque', leg: 'PROGRESSISTAS' },
  { sala: 317, nome: 'Juliana Lucena', leg: 'PT' },
  { sala: 522, nome: 'Júlio César Filho', leg: 'PT' },
  { sala: 205, nome: 'Larissa Gaspar', leg: 'PT' },
  { sala: 320, nome: 'Leonardo Pinheiro', leg: 'PROGRESSISTAS' },
  { sala: 520, nome: 'Lia Gomes', leg: 'PSB' },
  { sala: 405, nome: 'Luana Régia', leg: 'CIDADANIA' },
  { sala: 301, nome: 'Lucílvio Girão', leg: 'PSD' },
  { sala: 515, nome: 'Lucinildo Frota', leg: 'PDT' },
  { sala: 521, nome: 'Marcos Sobreira', leg: 'PSB' },
  { sala: 310, nome: 'Marta Gonçalves', leg: 'PSB' },
  { sala: 307, nome: 'Missias Dias', leg: 'PT' },
  { sala: 4, nome: 'Moisés Braz', leg: 'PT' },
  { sala: 513, nome: 'Nizo Costa', leg: 'PT' },
  { sala: 4, nome: 'Oriel Filho', leg: 'PT' },
  { sala: 507, nome: 'Queiroz Filho', leg: 'PDT' },
  { sala: 314, nome: 'Renato Roseno', leg: 'PSOL' },
  { sala: 0, nome: 'Romeu Aldigueri', leg: 'PSB' },
  { sala: 506, nome: 'Salmito', leg: 'PSB' },
  { sala: 302, nome: 'Sargento Reginauro', leg: 'UNIÃO' },
  { sala: 519, nome: 'Sérgio Aguiar', leg: 'PSB' },
  { sala: 313, nome: 'Simão Pedro', leg: 'PSD' },
  { sala: 112, nome: 'Stuart Castro', leg: 'AVANTE' },
  { sala: 113, nome: 'Tin Gomes', leg: 'PSB' },
];

const divadd = document.querySelector('#adic');
const lista = document.getElementById('lista');
const sala = document.querySelector('#sala');

// Função para atualizar o status
// function atualizarStatus() {
//   const checkboxes = document.querySelectorAll("input[type='checkbox']");

//   checkboxes.forEach((checkbox) => {
//     checkbox.addEventListener('change', () => {
//       const li = checkbox.parentNode.parentNode;
//       if (checkbox.checked) {
//         li.classList.add('selecionado');
//         //console.log(`${checkbox.name} está ativo`);
//       } else {
//         li.classList.remove('selecionado');
//         //console.log(`${checkbox.name} está inativo`);
//       }
//     });
//   });
// }

// Gerar a lista e atualizar o status
function marcar() {
  lista.innerHTML = '';
  //document.body.style.fontSize = "1.5em";
  lista.style.fontSize = '2em';
  divadd.style.display = 'block';
}

function adicionar() {
  //alert(sala.value)
  dados.forEach((item) => {
    if (item.sala == sala.value) {
      localStorage.setItem(
        item.sala,
        ` <span>${item.sala} -</span>
          <span class="nome">${item.nome}</span>
        `
      );
      const li = document.createElement('li');
      li.innerHTML = localStorage.getItem(item.sala);
      li.classList.add('item-lista');
      li.onclick = () => {
        //localStorage.setItem("classe","selecionado")
        li.classList.toggle("selecionado");
        console.log(li.classList.contains("selecionado"))
        if(li.classList.contains("selecionado") === true){
         // console.log("tem")
          localStorage.setItem("sts"+item.sala,"ok")
        }
        else{
          //console.log("não tem")
          localStorage.removeItem("sts"+item.sala)
        }
        console.log(localStorage.getItem("sts"+item.sala))
        //console.log(localStorage.key("sts"+item.sala === true))
      };

      lista.appendChild(li);
    } //if
  }); //for
  sala.value = null;
  //ordenarLista(lista);
  // Converte a coleção de nós em um array
  const itens = Array.from(lista.children);
  // Limpa a lista
  lista.innerHTML = '';
  // Ordena os itens alfabeticamente
  itens.sort((a, b) => a.textContent.localeCompare(b.textContent));
  //adiciona os itens ordenados
  itens.forEach((item) => lista.appendChild(item));
} //add

function recuperar() {
  lista.innerHTML = '';
  lista.style.fontSize = '2em';
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).length < 4) {
      const li = document.createElement('li');
      li.innerHTML = localStorage.getItem(localStorage.key(i));
      li.classList.add('item-lista');
      if(localStorage.getItem("sts"+localStorage.key(i))==="ok" || localStorage.getItem("stsr"+localStorage.key(i))==="ok"){
        li.classList.add("selecionado");
      }
      li.onclick = () => {
        li.classList.toggle('selecionado');
        if(li.classList.contains("selecionado") === true){
          // console.log("tem")
           localStorage.setItem("stsr"+localStorage.key(i),"ok")
         }
         else{
           //console.log("não tem")
           localStorage.removeItem("stsr"+localStorage.key(i))
         }
         console.log(localStorage.getItem("stsr"+localStorage.key(i)))
      };
      lista.appendChild(li);
    }
  }
  //ordenarLista(lista);
      // Converte a coleção de nós em um array
      const itens = Array.from(lista.children);
      // Ordena os itens alfabeticamente
      itens.sort((a, b) => a.textContent.localeCompare(b.textContent));
      // Limpa a lista e adiciona os itens ordenados
      lista.innerHTML = '';
      itens.forEach((item) => lista.appendChild(item));
}

function listar() {
  lista.style.fontSize = '1em';
  divadd.style.display = 'none';
  lista.innerHTML = '';
  dados.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('item-lista');
    li.innerHTML = `
          <span>${item.nome} -</span>
          <span>${item.leg} -</span>
          <span>${item.sala}</span>
      `;
    lista.appendChild(li);
  });
}

function limpar(){
  if(confirm("Limpar Checklist?")){
    localStorage.clear();
    alert("Limpeza Concluída");
  }
}