import React from 'react';
import Indio from '../../assets/indio.jpg';
import Rio from '../../assets/rio.jpg';
import NavBar from '../../components/NavBar';
import Bar from '../../components/Bar';

const customStyles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
    },
    h1: {
        textTransform: "uppercase", 
        fontFamily: "Comic Sans MS, sans-serif", 
        fontSize: "30px", 
        marginBottom: "0.5rem", 
    },
    h2: {
        fontFamily: "Comic Sans MS, sans-serif", 
        fontSize: "25px", 
        marginBottom: "1rem", 
    },
    img: {
        width: "100%", 
        height: "auto", 
    },
    section: {
        padding: "1rem",
        marginBottom: "2rem", 
        textAlign: "center", 
    },
};

export const HomePage = () => {
    return (
        <div>
            <Bar />
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <div>
                        <h1 style={customStyles.h1}>En Colombia el turismo es sostenible</h1>
                        <h2 style={customStyles.h2}>Aprende a cómo turistear en Colombia de una manera sostenible y segura.</h2>
                    </div>
                    <div>
                        <img src={Indio} alt="Turismo Sostenible en Colombia" style={customStyles.img} />
                    </div>
                </div>
            </section>
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <div>
                        <img src={Rio} alt="Ríos de Colombia" style={customStyles.img} />
                    </div>
                    <div>
                        <h1 style={customStyles.h1}>Nuestros planes de tour son los mejores para cumplir tus deseos de conocer Colombia.</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;







