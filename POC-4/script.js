// Função assíncrona para buscar a imagem da raposa
async function fetchFoxImage() {
    try {
      const response = await fetch('https://randomfox.ca/floof/');
      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      const imageUrl = data.image;
  
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.alt = 'Imagem de Raposa';
      document.getElementById('foxImageContainer').appendChild(imgElement);
      
    } catch (error) {
      console.error('Erro ao buscar a imagem:', error);
    }
  }
  
  fetchFoxImage();
  