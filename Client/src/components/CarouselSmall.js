import React, { useEffect, useState } from 'react';
const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    });
    return (
        <div className="carouselSmall">
            <img
                src={images[activeIndex]}
                alt={`Slide ${activeIndex}`}
                className="carousel__img1"
            />
        </div>
    );
};
export default Carousel;