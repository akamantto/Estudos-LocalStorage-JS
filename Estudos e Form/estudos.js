//1 - Inserir dado
localStorage.setItem("name", "Matheus");

// 2 - restart sem perder dados

//3 - resgatar item

const name = localStorage.getItem("name");
console.log(name);

//4 - resgate de item que nao existe

const lastName  = localStorage.getItem("lastname");
console.log(lastName);

if(!lastName){
    console.log("Sem sobrenome");
}

// 5 - remover item

localStorage.removeItem("name");

//6 - limpar todos os itens

localStorage.setItem("a",1);
localStorage.setItem("n",2);

//console.log(typeof localStorage.getItem("a")) virou string

localStorage.clear();

//7 - session storage

sessionStorage.setItem("number",123);

//8 - reiniciar e perder dados

const n = sessionStorage.getItem("number");
console.log(n);
sessionStorage.removeItem("number");
sessionStorage.clear();

//9 - salvar objeto

const person = {
    name : "Pedro",
    age : 19,
    job : "Programmer",
};

//localStorage.storage.setItem("person",person)

localStorage.setItem("person",JSON.stringify(person))

const getPerson = localStorage.getItem("person");
console.log(getPerson);

const personObject = JSON.parse(getPerson);
console.log(typeof personObject);
console.log(personObject);

//quando for salvar usar stringfy pra mostrar no localstorage e quando for usar dar um json.parse pra transformar de novo em objeto (pra conseguir usar as propriedades do objetos)

