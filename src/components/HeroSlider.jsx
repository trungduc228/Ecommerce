import React, { useState, useEffect } from 'react'
import heroSliderData from '../assets/fake-data/hero-slider'
const HeroSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const ActiveSlide = () => {
        const index = activeSlide === heroSliderData.length - 1 ? 0 : activeSlide + 1
        setActiveSlide(index)
    }
    useEffect(() => {
        const slideAuto = setInterval(() => {
            ActiveSlide()
        }, 3000);
        return () => {
            clearInterval(slideAuto)
        }
    }, [activeSlide])
    return (
        <div className="hero-slider">
            {
                heroSliderData.map((item, index) => (
                    <div key={index} className={`hero-slider__img ${index === activeSlide ? 'active' : null}`} >
                        <img src={item.img} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default HeroSlider
