

function Landing() {
  return (
    <div className="landing">
      <div className="landingImageContainer">
        <img 
        src={process.env.PUBLIC_URL + "/images/sydney_cartoon.png"}
        alt="cartoon sydney"> 
        </img>
      </div>
      <div className="landingWords">
        <h1>
          Sydney Meza
        </h1>
        <p>Hi! I'm Sydney an aspiring UIUX designer! <br/> I love color</p>
      </div>

    </div>
  );
}

export default Landing;
