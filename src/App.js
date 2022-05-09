import './App.css';
import Header from './components/header/Header';
import banner from './banner.jpeg';
import SimpleImageSlider from 'react-simple-image-slider';
import {useEffect, useState} from 'react';

const bannerImages = [banner, banner, banner];

function App() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function onResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    });

    return (
        <div className="App">
            <Header/>
            <SimpleImageSlider
                width={width}
                height={512}
                images={bannerImages}
                showNavs={false}
                showBullets={true}
                autoPlay={true}
                autoPlayDelay={5.0}
            />
        </div>
    );
}

export default App;
