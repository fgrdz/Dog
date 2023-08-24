import './global.css';

import { useState, useEffect } from 'react';
import api from './services/api';
import Banner from './components/banner';
import Filter from './components/filter';

function App() {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    
    async function getDogs(){
      const response = await api.get()
      setImagesData(response.data)
    }
    
    const delay = setTimeout(() => {
      getDogs();
    }, 3000);

   
    return () => clearTimeout(delay);
  }, [imagesData]);

  return (
    <div className="App">
      <Banner/>
      <Filter/>
      <section className='feed'>
            <h1>M a i s  <br/>c a c h o r r i n h o s <br/>*-*</h1>
            <div id="grid" className="col">
              {imagesData.map((imageData, index) => (
                <div key={index} >
                  <img src={imageData.url} alt={`Dog ${index}`} />
                </div>
              ))}
            </div>
      </section>

    </div>
  );
}

export default App;