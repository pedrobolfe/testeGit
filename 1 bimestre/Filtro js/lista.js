const nameList = ["Manoel Gomes", "Fernandão", "Nareba", "BaraBaraBara", "TI"];

const searchField = document.getElementById("searchField");     // barra de pesquisa
const listEl = document.getElementById("list");     // nomes filtrados
const btFiltrar = document.getElementById("btFiltrar");     // botao filtrar
const btAdicionar = document.getElementById("btAdicionar");     //  botao adicionar
const btSelecionar = document.getElementById("btSelecionar");     //  botao selecionar
const btRemover = document.getElementById("btRemover");    // botao remover
const saida = document.getElementById("saida");     // saida para mostra umas msg
const nomeAux = nameList;
var aux = -1;

this.fillList();

function fillList(list = nameList) {
    listEl.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        let listItems = document.createElement("li");
        if (aux == i){
            listItems.className = "alert-link";
        } else{
            listItems.className = "";
        }
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler() {
    saida.innerHTML = ""
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    fillList(filteredList);
}

function adicionar_item(){
    aux = 0;
    item = searchField.value;    //  'item' recebe o valor da barra de pesquisa
    if (item != ''){    //  se a barra de pesquisa nao estiver vazia, o nome sera add na lista 
        if (nameList.indexOf(item) == -1){  // se o item nao estiver na lista, o item sera adicionado
            nameList.push(item);    //  adciona o nome na ultima posicao da lista
            fillList();
            saida.innerHTML = "Nome Adicionado";
        }
    }
}

function remover_item(){
<<<<<<< HEAD
    if(aux > (nameList.length - 2)){
        nameList.splice(aux, 1);
        aux -= 1;
        fillList();
    }else{
        nameList.splice(aux, 1);
        fillList();
=======
    aux = 0;
    item = searchField.value.toLowerCase();     //  'nome' recebe o valor da barra de pesquisa e transforma em minusculo
    var verifica = nameList.indexOf(item);     // indexOf verifica se tem um item em uma lista, se for -1 e pq n esta na lista, se estiver ele retorna a posicao do item
    if (verifica != -1) {   // se for diferente de -1 e pq o item esta na lista
        nameList.splice(verifica, 1);   // splice remove o elemento na posicao retornada pelo indexOf
        saida.innerHTML = "Nome Removido";
>>>>>>> 37f64a73769a9d479170a68d828c322e84e61d2a
    }
    
}

function selecionar_item(){
    if (nameList.length == aux){
        aux = 0;
    } else { aux += 1;}
    inputHandler();
}

btSelecionar.addEventListener("click", selecionar_item); // chama a funcao quando o botao for clicado
btFiltrar.addEventListener("click", inputHandler);  //                 ||
btAdicionar.addEventListener("click", adicionar_item); //              || 
btRemover.addEventListener("click", remover_item);  //                 ||
