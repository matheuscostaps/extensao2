# Modo Escuro Rápido

Uma extensão simples e leve para Google Chrome que permite ativar ou desativar o modo escuro em qualquer página da web com um único clique. Ideal para quem busca uma experiência de navegação mais confortável, especialmente à noite.

<div align="center">
  <img width="334" height="202" alt="image" src="https://github.com/user-attachments/assets/233ae35c-1c63-4b70-85a6-3b9e87975c47" />
</div>

## Funcionalidades

* **Ativar/Desativar com um clique:** Alterne facilmente entre o modo claro e escuro usando o pop-up da extensão.
* **Compatibilidade:** Aplica um tema escuro a quase todos os sites, ajustando cores de fundo, texto e links.
* **Leve e Rápida:** Projetada para ser eficiente e não impactar o desempenho da sua navegação.

## Instalação

Siga estes passos para instalar a extensão no seu navegador:

1.  **Clone ou baixe este repositório** em seu computador.
2.  No Chrome, acesse a página de extensões digitando `chrome://extensions/` na barra de endereço.
3.  No canto superior direito, ative o **`Modo de desenvolvedor`**.
4.  Clique em **`Carregar sem compactação`** e selecione a pasta do projeto que você baixou.
5.  A extensão aparecerá na sua barra de ferramentas.

## Como Usar

1.  Clique no ícone da extensão "Modo Escuro Rápido" na barra de ferramentas do Chrome.
2.  Clique no botão **"Ativar/Desativar"** para alternar o modo escuro na página atual.

## Estrutura do Projeto

* `icons/`: Contém os ícones da extensão em vários tamanhos.
* `src/`: Pasta com o código-fonte.
    * `background/`: Inclui o Service Worker para tarefas em segundo plano.
    * `popup/`: Contém o HTML, CSS e JavaScript do pop-up da extensão.
* `manifest.json`: Arquivo principal de configuração da extensão.
* `README.md`: Este arquivo.

## Permissões

* `scripting`: Necessária para injetar o código JavaScript (que aplica o CSS do modo escuro) na página web.
* `activeTab`: Permite que a extensão execute scripts apenas na aba ativa quando o usuário clica no ícone.

## Créditos

Desenvolvido por **Matheus Costa** como parte de um projeto de bootcamp.

## GitHub Pages

Este projeto possui uma página informativa. Você pode acessá-la em:
[https://seu-usuario.github.io/seu-repositorio]([https://matheuscostaps.github.io/bootcamp2-chrome-ext-matheuscostaps)](https://matheuscostaps.github.io/bootcamp2-chrome-ext-matheuscostaps/)
