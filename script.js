// script.js
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (user && pass) {
    if (role === 'profissional') {
      window.location.href = 'html/profissionais/dashboard-profissional.html';

    } else if (role === 'adm') {
      window.location.href = 'html/adm/dashadm.html';
    } else {
      document.getElementById("login").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
    }
  } else {
    alert("Preencha todos os campos!");
  }
}



function toggleCRM() {
  const role = document.getElementById("role").value;
  const crmField = document.getElementById("crm");
  crmField.style.display = role === 'profissional' ? 'block' : 'none';
  crmField.required = role === 'profissional';
}

function realizarCadastro() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirm-password").value;
  const role = document.getElementById("role").value;
  const crm = document.getElementById("crm").value;

  if (nome && email && user && pass && confirmPass) {
    if (pass !== confirmPass) {
      alert("As senhas não coincidem!");
      return;
    }

    if (role === 'profissional' && !crm) {
      alert("Por favor, informe o CRM!");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    if (role === 'profissional') {
      window.location.href = 'index.html';
    } else {
      window.location.href = '../index.html#opcoes';
    }
  } else {
    alert("Preencha todos os campos!");
  }
}

window.onload = function() {
  if (window.location.hash === '#opcoes') {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  }
}

function logout() {
  document.getElementById("login").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}



