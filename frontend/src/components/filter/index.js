import { useEffect, useState } from 'react';
import axios from 'axios';
import './filter.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css'

const Filter = ()=>{
    const [breedsData, setBreedsData] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState(null);
    const [breedImages, setBreedImages] = useState([]);
  
    useEffect(() => {
      async function fetchBreeds() {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        setBreedsData(response.data);
      }
      fetchBreeds();
    }, []);
  
    const fetchBreedImages = async (breedId, limit) => {
      try {
        const response = await axios.get(
          `https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}&limit=${limit}`
        );
        setBreedImages(response.data);
      } catch (error) {
        console.error('Erro ao buscar imagens da raça:', error);
      }
    };
  
    const handleBreedSelect = (selectedBreedId) => {
      setSelectedBreed(selectedBreedId);
      console.log(selectedBreedId)
      fetchBreedImages(selectedBreedId, 5);
    };
    return(
        <div className='container'>
        <h2>Pesquise por raça abaixo</h2>
        <select onChange={(e)=>{handleBreedSelect(e.target.value)}}>
        <option value=''>Selecione</option>
        {breedsData.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      
      {selectedBreed && (
            <div className='breeds-container'>
              <Carousel>
                {breedImages.map((image) => (
                  <Carousel.Item>
                  <img className='d-block w-100' key={image.id}src={image.url} alt={selectedBreed.name} />
                </Carousel.Item>
              ))}
              </Carousel>

            </div>
        )}
        </div>
    )
}
export default Filter