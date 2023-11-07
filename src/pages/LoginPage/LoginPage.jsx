import React from 'react';
import style from "./style.module.css"
import Palmera from '../../assets/fondo.jpg'


export const LoginPage = () => {
    return(
       <>

 
        <div className={style.main}>
        <div className={style.cardmain}>
          <div className={style.cardinfo}>
            <h1>Iniciar sesión </h1>
            <p style={{ fontSize: '14px', color: '#549bb9' }}>
              Ingresa tus datos para seguir explorando ofertas y mas...
            </p>
          </div>
          <div className={style.cardform}>
            <div className={style.input_user}>
              <img src="./assets/user-svgrepo-com.svg" alt="user" />
              <input type="text" placeholder="Username" />
            </div>
            <div className={style.input_pass}>
              <img src="./assets/password-lock-svgrepo-com.svg" alt="password" />
              <input type="password" placeholder="Password" />
            </div>
            <button className={style.btn}>Login</button>
          </div>
        </div>
      </div>
      
       </>
       
    )
}

export default LoginPage;
