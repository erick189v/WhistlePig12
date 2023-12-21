import React from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs"
import { useState, useEffect } from "react";

function Experiencing({data}){
    console.log(data)
    const [slide,setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length -1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return(
        <div>
            <section id="Experiencing">
                <div className="Experiencing">
                    <h1>Tasting Notes</h1>
                    <div className="carousel">
                        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
                        {data.map((item,idx)=>{
                            return (
                                <img src={item.image} alt={item.name} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
                            );
                        })}
                        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                        <span className="indicators">
                            {data.map((_,idx)=>{
                                return(
                                 <button 
                                 key={idx} 
                                 onClick={() => setSlide(idx)} 
                                 className={slide === idx ? "indicator": "indicator indicator-inactive"}>

                                 </button>
                                )
                            })}
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experiencing