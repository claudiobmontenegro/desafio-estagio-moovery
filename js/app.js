const url = "https:api.randomuser.me/?results=10";
var table = document.getElementById("table");

getData();

botao_refresh = document.getElementById("botao_recarregar")
botao_refresh.addEventListener("click", getData);


function getData() {
    //Fetch de dados da página e conversão JSON


    fetch(url)
        .then(function (response) {
            return response.text();
        }).then(function (data) {
            let obj = JSON.parse(data);


            //Laço para pegar os 10 objetos e seus respectivos dados
            for (var i = 0; i <= 9; i++) {

                var nome = obj.results[i].name.first
                var sobrenome = obj.results[i].name.last
                var idade = obj.results[i].dob.age
                var cidade = obj.results[i].location.city
                var foto = obj.results[i].picture.thumbnail

                //Criação da linha da tabela
                var tr = document.createElement("tr");
                tr.className = "thead-dark";

                //Criação das células das tabelas
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var td3 = document.createElement("td");
                var td4 = document.createElement("td");
                var td5 = document.createElement("td");
                var img = document.createElement("img");

                //Salvando os dados do objeto
                var obj_nome = document.createTextNode(nome);
                var obj_sobrenome = document.createTextNode(sobrenome);
                var obj_idade = document.createTextNode(idade);
                var obj_cidade = document.createTextNode(cidade);
                var obj_foto = document.createTextNode(foto);
                img.src = obj_foto.data;

                td1.appendChild(obj_nome);
                td2.appendChild(obj_sobrenome);
                td3.appendChild(obj_idade);
                td4.appendChild(obj_cidade);
                td5.appendChild(img);

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);

                table.appendChild(tr);
            }

        });
}



