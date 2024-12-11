// Selecionar elementos do DOM
const breedSelect = document.getElementById('breed-select');
const gallery = document.getElementById('gallery');
const loadingMessage = document.getElementById('loading-message');

// Função para buscar a lista de raças
async function fetchBreeds() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    if (!response.ok) {
      throw new Error('Erro ao buscar lista de raças.');
    }
    const data = await response.json();
    return Object.keys(data.message);
  } catch (error) {
    console.error(error);
    alert('Não foi possível carregar as raças. Tente novamente mais tarde.');
  }
}

// Função para buscar imagens de uma raça específica
async function fetchBreedImages(breed) {
  try {
    loadingMessage.style.display = 'block'; // Exibir mensagem de carregamento

    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    if (!response.ok) {
      throw new Error('Erro ao buscar imagens da raça.');
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error);
    alert('Não foi possível carregar as imagens. Tente novamente mais tarde.');
  } finally {
    loadingMessage.style.display = 'none'; // Ocultar mensagem de carregamento
  }
}

// Função para preencher o seletor de raças
async function populateBreedSelect() {
  const breeds = await fetchBreeds();
  if (breeds) {
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed;
      option.textContent = breed;
      breedSelect.appendChild(option);
    });
  }
}

// Função para exibir imagens na galeria
function displayImages(images) {
  gallery.innerHTML = ''; // Limpar galeria
  images.forEach(imageUrl => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Imagem de um cachorro';
    img.className = 'dog-image';
    gallery.appendChild(img);
  });
}

// Evento para carregar imagens quando uma raça for selecionada
breedSelect.addEventListener('change', async () => {
  const selectedBreed = breedSelect.value;
  if (selectedBreed) {
    const images = await fetchBreedImages(selectedBreed);
    if (images) {
      displayImages(images);
    }
  }
});

// Inicialização
populateBreedSelect();
