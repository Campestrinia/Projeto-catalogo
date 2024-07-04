import React from 'react';
import style from "./Login.Modules.css";
import { NavBar } from '../../components/NavBar';
import { FaUser, FaLock } from "react-icons/fa"
import { Footer } from '../../components/Footer'

export function Login() {
    return (<>
        <NavBar />
        <div className='container'>
            <div className='login-geral'>
                <form>
                    <h1>Faça seu Login!</h1>
                    <div className='campo'>
                        <input type='email' placeholder='E-mail'></input>
                        <FaUser className='icon' />
                    </div>
                    <div className='campo'>
                        <input type='password' placeholder='Senha'></input>
                        <FaLock className='icon' />
                    </div>

                    <div className='lembrar'>
                        <a href='#'>Esqueceu a senha?</a>
                    </div>

                    <div className='criar'>
                        <p>Deseja de cadastrar? <a href='/register'>Criar Conta</a></p>
                    </div>


                    <button>Entrar</button>

                </form>

            </div>

        </div>

        <Footer />
    </>)
}