import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import PhotosSlider from "./PhotosSlider";
import { images } from "../../constants";

const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [sliderState, setSliderState] = useState({
    isOpen: false,
    currentImage: 0,
    images: [],
  });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setFilterWork(data);
    });
  }, []);

  const nextImage = () =>
    setSliderState((prev) => ({
      ...prev,
      currentImage: (prev.currentImage + 1) % prev.images.length,
    }));

  const prevImage = () =>
    setSliderState((prev) => ({
      ...prev,
      currentImage:
        (prev.currentImage - 1 + prev.images.length) % prev.images.length,
    }));

  const toggleSlider = (images = []) => {
    setSliderState((prev) => ({
      isOpen: !prev.isOpen,
      currentImage: 0,
      images: images.length ? images : [],
    }));
  };

  return (
    <>
      <h2 className="head-text">
        <span>הפרוייקטים שלי</span>
      </h2>
      <img className="background-logo-pic" src={images.logo3} alt="toto_logo" />

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, i) => (
          <div key={i}>
            <div
              className="app__work-item app__flex"
              onClick={() => toggleSlider(work.gallery || [])}
            >
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl).url()} alt={work.name}></img>

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                ></motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <PhotosSlider
        isOpen={sliderState.isOpen}
        prevImage={prevImage}
        nextImage={nextImage}
        currentImage={sliderState.currentImage}
        images={sliderState.images}
        toggleSlider={toggleSlider}
      />
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "פרוייקטים",
  "app__primarybg"
);
