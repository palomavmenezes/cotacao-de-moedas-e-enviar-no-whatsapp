# Enviando cotação de moedas USD e EUR via Whatsapp com JS
Esse projeto faz uma busca da cotação de moedas selecionadas e envia uma mensagem retornando os valores dessa(s) moedas para um número no Whatsapp.

# Instalação
npm install 

<strong>Plugins utilizados até o momento:</strong>

<b><i>node-fetch<br></i></b>
<b><i>node-schedule<br></i></b>
<b><i>dotenv<br></i></b>

# Utilizando o dotenv para dados sensíveis
O arquivo está em JavaScript e para utilizar os dados de API, precisa gerar uma chave de API gratuita no site https://apilayer.com/<br>
Após gerar a API, crie um arquivo .env e coloque como valor da variável ACCESS_KEY

Para o número do Whatsapp, faça a mesma coisa no arquivo .env<br>
Crie e insira o nome da variável e atribua o valor com o número do whatsapp.

Exemplo: 
WHATSAPP_NUMBER=5521900000000
