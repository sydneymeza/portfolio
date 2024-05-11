

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
        <p>Hi! Sydney is an aspiring UIUX designer! <br/> She wants to dive deep into human centered design, and use her knowledge of coding to help with that! </p>
      </div>

    </div>
  );
}

export default Landing;
