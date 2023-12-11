
# QR Code Generator usando Express 
Este é um simples aplicativo Node.js usando o framework Express para gerar um QR Code a partir de uma URL fornecida pelo usuário. O código utiliza a biblioteca `qr-image` para criar o QR Code em formato SVG e salva o resultado em um arquivo local. 

## Pré-requisitos
 Antes de começar, certifique-se de ter o Node.js instalado em seu sistema. 
 ```bash
  # Instale as dependências 
  npm install
  ```
## Como Usar

1.  Execute o aplicativo:

```bashCopy code
`node app.js` 
```

2.  Abra seu navegador e acesse `http://localhost:3000`.
    
3.  Preencha o formulário com a URL desejada e clique em "Submit".
    
4.  Um arquivo SVG contendo o QR Code será gerado e enviado como resposta. O arquivo será salvo localmente com o nome `qr_code.svg`.
    

## Estrutura do Código

-   **`app.js`**: Arquivo principal que configura o servidor Express e define os endpoints.
    
-   **`public/index.html`**: Página HTML simples com um formulário para inserir a URL.
    

## Detalhes da Implementação

-   **`gerarQrCode(url)`**: Função que gera o QR Code em formato SVG a partir da URL fornecida e salva o arquivo localmente. Retorna o nome do arquivo gerado.
    
-   **`/submit` (POST)**: Rota que recebe a URL do formulário, gera o QR Code e envia o arquivo SVG como resposta.
    
-   **`/` (GET)**: Rota principal que serve a página HTML com o formulário.
    
-   **`/submit` (GET)**: Rota para exibir o arquivo SVG do QR Code.
