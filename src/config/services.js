const axios = require('axios'); // Import Axios

export default axios.create({
  baseURL: 'https://jdg-site-vet.onrender.com/',
  headers: {
    'Content-Type': 'application/json', // Tipo de conteúdo das requisições
    // Cabeçalho de autenticação
    'Access-Control-Allow-Origin': '*', // Permite acesso de origem cruzada para o site https://seu-site.com/
  },
});