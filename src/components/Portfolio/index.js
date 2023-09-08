import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import PortfolioImage from "../../assets/images/Portfolio.jpg";
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    // const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        // const querySnapshot = await getDocs(collection(db, 'portfolio'));
        // setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = () => {
        return (
            <div className="images-container">
                            <div className="image-box">
                                <img 
                                src={PortfolioImage}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">Port Name</p>
                                    <h4 className="description">description</h4>
                                    <button
                                        className="btn"
                                    >View</button>
                                </div>
                            </div>
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o' ]}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio()}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;