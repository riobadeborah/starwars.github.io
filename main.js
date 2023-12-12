document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://swapi.dev/api/people/'; // SWAPI API URL 
    const characterSelect = document.getElementById('character-select');
    const fetchButton = document.getElementById('fetch-button');
    
    // Asycnhronous function to fetch characters and populate the dropdown  
    async function fetchCharacters() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            data.results.forEach(character => {
                const option = document.createElement('option');
                option.value = character.url;
                option.textContent = character.name;
                characterSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    // Fetch and display selected character
async function fetchAndDisplayCharacter(characterUrl) {
    try {
        const response = await fetch(characterUrl);
        const character = await response.json();

        const charactersContainer = document.getElementById('characters-container');
        charactersContainer.innerHTML = ''; // Clear previous characters

        const characterElement = document.createElement('div');
        characterElement.classList.add('character');

        const infoElement = document.createElement('div');
        infoElement.classList.add('character-info');
        infoElement.innerHTML = `<h3>${character.name}</h3><p>Birth Year: ${character.birth_year}</p><p>Gender: ${character.gender}</p>`;

        // Conditionally display image for Luke Skywalker
        if (character.name === 'Luke Skywalker') {
            const imageElement = document.createElement('img');
            imageElement.src = 'Luke_Skywalker.png'; 
            imageElement.alt = 'Luke Skywalker';
            imageElement.width = 100;
            imageElement.height = 100;
            characterElement.appendChild(imageElement);
        }

         // Conditionally display image for C-3PO
         if (character.name === 'C-3PO') {
            const imageElement = document.createElement('img');
            imageElement.src = 'C-3PO.png';
            imageElement.alt = 'C-3PO';
            imageElement.width = 100;
            imageElement.height = 100;
            characterElement.appendChild(imageElement);
        }


           // Conditionally display image for R2 -D2
           if (character.name === 'R2-D2') {
            const imageElement = document.createElement('img');
            imageElement.src = 'R2-D2.png';
            imageElement.alt = 'R2-D2';
            imageElement.width = 100;
            imageElement.height = 100;
            characterElement.appendChild(imageElement);
        }


            // Conditionally display image for Darth Vader
            if (character.name === 'Darth Vader') {
                const imageElement = document.createElement('img');
                imageElement.src = 'Dath_Vader.png';
                imageElement.alt = 'Darth Vader';
                imageElement.width = 100;
                imageElement.height = 100;
                characterElement.appendChild(imageElement);
            }

                // Conditionally display image for Leia Organa
                if (character.name === 'Leia Organa') {
                    const imageElement = document.createElement('img');
                    imageElement.src = 'Leia_Organa.png';
                    imageElement.alt = 'Leia Organa';
                    imageElement.width = 100;
                    imageElement.height = 100;
                    characterElement.appendChild(imageElement);
                }


                   // Conditionally display image for Own Lars
                   if (character.name === 'Owen Lars') {
                    const imageElement = document.createElement('img');
                    imageElement.src = 'Owen_Lars.png';
                    imageElement.alt = 'Owen Lars';
                    imageElement.width = 100;
                    imageElement.height = 100;
                    characterElement.appendChild(imageElement);
                }

                 // Conditionally display image for Beru Whitesun lars
                 if (character.name === 'Beru Whitesun lars') {
                    const imageElement = document.createElement('img');
                    imageElement.src = 'Beru_Whitesun_Lars.png';
                    imageElement.alt = 'Beru Whitesun lars';
                    imageElement.width = 100;
                    imageElement.height = 100;
                    characterElement.appendChild(imageElement);
                }


                  // Conditionally display image for R5-D4
                  if (character.name === 'R5-D4') {
                    const imageElement = document.createElement('img');
                    imageElement.src = 'R5-D4.png';
                    imageElement.alt = 'R5-D4';
                    imageElement.width = 100;
                    imageElement.height = 100;
                    characterElement.appendChild(imageElement);
                }

                // Conditionally display image for Biggs Darklighter
                if (character.name === 'Biggs Darklighter') {
                    const imageElement = document.createElement('img');
                    imageElement.src = 'Biggs Darklighter.png';
                    imageElement.alt = 'Biggs Darklighter';
                    imageElement.width = 100;
                    imageElement.height = 100;
                    characterElement.appendChild(imageElement);
                }


                // Conditionally display image for Obi-Wan Kenobi
                if (character.name === 'Obi-Wan Kenobi') {
                    const imageElement = document.createElement('img');
                    imageElement.src = 'Obi - Wan Kenobi .png';
                    imageElement.alt = 'Obi-Wan Kenobi';
                    imageElement.width = 100;
                    imageElement.height = 100;
                    characterElement.appendChild(imageElement);
                }
    



        characterElement.appendChild(infoElement);
        charactersContainer.appendChild(characterElement);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


    // Event listeners
    characterSelect.addEventListener('change', function () {
        const selectedCharacterUrl = characterSelect.value;
        fetchAndDisplayCharacter(selectedCharacterUrl);
    });

    fetchButton.addEventListener('click', function () {
        const selectedCharacterUrl = characterSelect.value;
        fetchAndDisplayCharacter(selectedCharacterUrl);
    });

    // Initial fetch to populate the dropdown
    fetchCharacters();
});
