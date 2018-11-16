function nomeUsuario() {
    var campoNome = document.getElementById('campoNome').value;
    document.getElementById('nome').innerHTML = campoNome;
}

function departamentoUsuario() {
	var campoDepartamento = document.getElementById('campoDepartamento').value;
	document.getElementById('departamento').innerHTML = campoDepartamento;
}

function cargoUsuario() {
	var campoCargo = document.getElementById('campoCargo').value;
	document.getElementById('cargo').innerHTML = campoCargo;

}

function emailUsuario() {
	var campoEmail = document.getElementById('campoEmail').value;
	document.getElementById('email').innerHTML = campoEmail;
}

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', nomeUsuario, false);
subButton.addEventListener('click', cargoUsuario , false);
subButton.addEventListener('click', departamentoUsuario , false);
subButton.addEventListener('click', emailUsuario , false);