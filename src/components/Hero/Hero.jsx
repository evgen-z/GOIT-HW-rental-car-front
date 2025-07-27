import s from "./Hero.module.css";
import heroImg from "../../assets/images/hero.jpg";
import heroImg2 from "../../assets/images/hero@2x.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
  return (
    <div className={s.heroContainer}>
      <img
        src={heroImg}
        srcSet={`${heroImg2}`}
        alt="Hero image"
        className={s.img}
        decoding="async"
        fetchPriority="high"
      />
      <div className={s.hero}>
        <h1>Find your perfect rental car</h1>
      <h2>Reliable and bugdet-friendly rentals for any journey</h2>
      <button onClick={() => navigate('/catalog')}>View Catalog</button>
      </div>
      
    </div>
  );
};

export default Hero;