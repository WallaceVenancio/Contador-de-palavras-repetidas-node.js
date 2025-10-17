🧠 Contador de Palavras Repetidas (Node.js)

Um utilitário em Node.js que analisa arquivos .txt e conta palavras repetidas, ideal para quem escreve textos e quer evitar o uso excessivo de certas palavras.
Simples, direto e totalmente executável via terminal.

📂 Estrutura do Projeto
Contador-de-palavras-repetidas-node.js/
│
├── arquivos/              # Arquivos de texto (.txt) para análise
├── resultados/            # Relatórios gerados com as contagens
├── src/
│   ├── cli.js             # Interface de linha de comando (CLI)
│   ├── index.js           # Funções e lógicas principais do contador
│   ├── helpers.js         # Verificação e filtragem de palavras duplicadas
│   └── erros/
│       └── funcoesErros.js # Tratamento e especificação de erros
│
├── .gitignore
├── package.json
└── README.md

⚙️ Funcionalidades

📖 Lê arquivos .txt de forma dinâmica via CLI

🔍 Conta a frequência de cada palavra

✂️ Remove pontuações e normaliza o texto

🔠 Ignora diferenças entre maiúsculas e minúsculas

📊 Gera relatório com as palavras mais repetidas

🧾 Permite escolher o destino do arquivo de saída

💥 Fornece mensagens de erro claras (via funcoesErros.js)

🚀 Como usar
🧩 Pré-requisitos

Node.js
 (versão 14 ou superior)

📦 Instalação

Clone o repositório e instale as dependências:

git clone https://github.com/WallaceVenancio/Contador-de-palavras-repetidas-node.js.git
cd Contador-de-palavras-repetidas-node.js
npm install

▶️ Execução

O comando básico para rodar o projeto é:

node .\src\cli.js -t .\arquivos\texto-aprendizado.txt -d .\resultados\

🧠 Explicando o comando:
Parâmetro	Descrição
node .\src\cli.js	Executa o programa principal
-t	Define o arquivo de texto que será lido e analisado
-d	Define o diretório de destino onde o resultado será salvo

📘 Exemplo completo:

node .\src\cli.js -t .\arquivos\meu-texto.txt -d .\resultados\


Após a execução, será criado um arquivo de resultado em resultados/ com as palavras e suas quantidades de ocorrência.

🧩 Organização dos Arquivos
Arquivo	Função
cli.js	Recebe os parâmetros -t e -d e executa o programa
index.js	Contém a lógica principal de leitura e contagem de palavras
helpers.js	Verifica e organiza palavras duplicadas
funcoesErros.js	Define mensagens e funções para tratamento de erros personalizados
