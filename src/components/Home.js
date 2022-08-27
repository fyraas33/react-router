import { useEffect, useState } from "react";
import "./Movie.css";
const images = [
  "godfc.jpg",
  "f9c.jpg",
 "avc.jpg",
 
];

export default function App() {
    
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="sli"> 
    <h1>WELCOME TO FIRAMOVIES</h1>
      <img className="slider" src={images[index]} alt="" />
     
    </div>
  );
}