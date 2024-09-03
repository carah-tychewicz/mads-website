import Gallery from '../components/Gallery';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <div className='bg-container'>
        <div className="container">
          <div className="grid-wrapper">
            <div className="bio-col">
              <p className="bio-text">
                This site, I have nothing to use it for, 
                and I can't write an artist's statement or summarize my self or my life. I'm afraid. 
                Can't it just be a wall of my drawings? I have no voice, just a right hand to draw with.
              </p>
            </div>
            <div className="bio-image-col">
              <img src="./src/img/self-portrait.jpeg" height="800px" width="auto"></img>
            </div>
            <Gallery />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;