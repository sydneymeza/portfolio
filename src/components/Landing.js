

function Landing() {
  return (
    <div className="landing">
      <div className="landingWords">
        <h1 className="landingH">sydney meza</h1>
        <p className="landingp">
          Hi! I'm Sydney, an aspiring UIUX designer! <br /> I'm interested in
          human centered design as well as exploring more 3D and AR/VR designs
        </p>
        <p></p>
      </div>

      <div className="landingImageContainer">
        <img
          src={process.env.PUBLIC_URL + "/images/sydney_cartoon.png"}
          alt="cartoon sydney"
        ></img>
      </div>
    </div>
  );
}

export default Landing;
