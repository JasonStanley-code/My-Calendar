import React, { useState, useRef } from "react";
import {Link} from "react-router-dom"
import "./card.scss";
const Card = ({ data }) => {
    const [rotate, setRotate] = useState([0, 0]);
    const ref = useRef();
    const containerRef = useRef();

    const mouseEnter = (e) => {
        const mouseX = e.clientX - getOrigin(e)[0];
        const mouseY = (e.clientY - getOrigin(e)[1]) * -1;

        setRotate([
            (mouseY / ref.current.offsetHeight / 2).toFixed(2),
            (mouseX / ref.current.offsetWidth / 2).toFixed(2),
        ]);
    };
    const mouseLeave = (e) => {
        setRotate([0, 0]);
    };
    const mouseMove = (e) => {
        const mouseX = e.clientX - getOrigin(e)[0];
        const mouseY = (e.clientY - getOrigin(e)[1]) * -1;

        setRotate([
            (mouseY / ref.current.offsetHeight / 2).toFixed(2),
            (mouseX / ref.current.offsetWidth / 2).toFixed(2),
        ]);
    };

    const getOrigin = (e) => {
        return [
            containerRef.current.offsetLeft + Math.floor(containerRef.current.offsetWidth / 2),
            containerRef.current.offsetTop + Math.floor(containerRef.current.offsetHeight / 2),
        ];
    };

    const getTransform = `rotateX(${rotate[0]}deg) rotateY(${rotate[1]}deg)`;
    return (
        <Link to={data.path}>
            <div
                key={data.path}
                className="card"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onMouseMove={mouseMove}
                ref={containerRef}
            >
                <div className="inner" ref={ref} style={{transform : getTransform}}>
                    <h1 className="subject">{data.frontmatter.subject}</h1>
                    <h2 className="date">Date : {data.frontmatter.date}</h2>
                    <h2 className="date">Status : {data.frontmatter.status}</h2>
                </div>
                
            </div>
        </Link>
    );
};
export default Card;
