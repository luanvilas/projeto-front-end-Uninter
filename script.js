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
      const loginElement = document.getElementById("login");
      const dashboardElement = document.getElementById("dashboard");
      
      if (loginElement && dashboardElement) {
        loginElement.style.display = "none";
        dashboardElement.style.display = "block";
      }
    }
  } else {
    alert("Preencha todos os campos!");
  }
}



function toggleCRM() {
  const role = document.getElementById("role").value;
  const crmField = document.getElementById("crm");
  const adminIdField = document.getElementById("admin-id");
  
  if (crmField) {
    crmField.style.display = role === 'profissional' ? 'block' : 'none';
    crmField.required = role === 'profissional';
  }
  
  if (adminIdField) {
    adminIdField.style.display = role === 'adm' ? 'block' : 'none';
    adminIdField.required = role === 'adm';
  }
}

function realizarCadastro() {
  const nomeElement = document.getElementById("nome");
  const emailElement = document.getElementById("email");
  const userElement = document.getElementById("username");
  const passElement = document.getElementById("password");
  const confirmPassElement = document.getElementById("confirm-password");
  const roleElement = document.getElementById("role");
  const crmElement = document.getElementById("crm");
  const adminIdElement = document.getElementById("admin-id");
  const termsCheckbox = document.getElementById("terms-checkbox");
  const termsContainer = document.getElementById("terms-container");
  
  if (!nomeElement || !emailElement || !userElement || !passElement || !confirmPassElement || !roleElement || !termsCheckbox) {
    console.error("Elementos do formulário não encontrados");
    return;
  }
  
  const nome = nomeElement.value;
  const email = emailElement.value;
  const user = userElement.value;
  const pass = passElement.value;
  const confirmPass = confirmPassElement.value;
  const role = roleElement.value;
  const crm = crmElement ? crmElement.value : "";
  const adminId = adminIdElement ? adminIdElement.value : "";
  const termsAccepted = termsCheckbox.checked;

  // Verificar se os termos foram aceitos
  if (!termsAccepted) {
    
    
    // Remover a classe após a animação terminar
    setTimeout(() => {
      termsContainer.classList.remove("shake");
    }, 500);
    
    alert("Você precisa aceitar os Termos de Uso e Política de Privacidade para continuar.");
    return;
  }

  if (nome && email && user && pass && confirmPass) {
    if (pass !== confirmPass) {
      alert("As senhas não coincidem!");
      return;
    }

    if (role === 'profissional' && !crm) {
      alert("Por favor, informe o CRM!");
      return;
    }
    
    if (role === 'adm' && !adminId) {
      alert("Por favor, informe o ID de administrador!");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = 'index.html';
  } else {
    alert("Preencha todos os campos!");
  }
}

window.onload = function() {
  if (window.location.hash === '#opcoes') {
    const loginElement = document.getElementById("login");
    const dashboardElement = document.getElementById("dashboard");
    
    if (loginElement && dashboardElement) {
      loginElement.style.display = "none";
      dashboardElement.style.display = "block";
    }
  }
  
  // Inicializa o campo CRM se estivermos na página de cadastro
  const roleSelect = document.getElementById("role");
  if (roleSelect) {
    toggleCRM();
  }
}

function logout() {
  const loginElement = document.getElementById("login");
  const dashboardElement = document.getElementById("dashboard");
  const usernameElement = document.getElementById("username");
  const passwordElement = document.getElementById("password");
  
  if (loginElement && dashboardElement) {
    loginElement.style.display = "block";
    dashboardElement.style.display = "none";
  }
  
  if (usernameElement) {
    usernameElement.value = "";
  }
  
  if (passwordElement) {
    passwordElement.value = "";
  }
}



