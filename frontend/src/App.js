
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    const url = `https://api.thedogapi.com/v1/images/search?limit=20`;
    const api_key = "DEMO_API_KEY";

    axios.get(url, {
      headers: {
        'x-api-key': api_key
      }
    })
    .then((response) => {
      setImagesData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []);

  return (
    <div className="App">
      <h1>CatApi</h1>
      <div id="grid" className="row">
        {imagesData.map((imageData, index) => (
          <div key={index} className="col col-lg">
            <img src={imageData.url} alt={`Cat ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;