document.getElementById('ativar').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    
    // Injeta o script para aplicar/remover o modo escuro
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: toggleDarkMode,
    });
  });
});

// Esta função será executada no contexto da página web
function toggleDarkMode() {
  // Ação para o modo escuro
  const css = `
    html, body {
      background-color: #121212 !important;
      color: #e0e0e0 !important;
    }
    a:link, a:visited {
      color: #90caf9 !important;
    }
    img {
      filter: invert(1) hue-rotate(180deg);
    }
  `;

  // Verifica se o estilo já foi injetado
  const styleId = 'darkModeStyle';
  let styleElement = document.getElementById(styleId);

  if (styleElement) {
    // Se o estilo existe, remove para desativar o modo escuro
    styleElement.remove();
  } else {
    // Se não existe, cria e injeta para ativar o modo escuro
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
  }
}