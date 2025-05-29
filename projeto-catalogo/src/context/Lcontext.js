import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const API = 'http://localhost:3001/'

    const [user, setUser] = useState({});

    useEffect(() => {
        const loadUserData = () => {
            const storedUser = localStorage.getItem("User");
            if (storedUser) {
                console.log('Storage:', JSON.parse(storedUser));
                setUser(JSON.parse(storedUser));
            }
        };

        loadUserData();
    }, []);

    async function signIn(email, password, text) {
        console.log(email);
        console.log(password);
        try {
            const response = await axios.post(`${API}api/usuario/login`, {
                email: email,
                senha: password
            });

            if (text === 'Login') {
                console.log('Login realizado com sucesso.');
            } else {
                console.log('Cadastro realizado com sucesso');
            }

            console.log(response.data);

            setUser(response.data);
            console.log(response.response);
            localStorage.setItem('User', JSON.stringify(response.data));
            return response

        } catch (error) {
            console.log('Erro', 'Falha ao tentar realizar login');
            return error
        }
    }
    async function Logout() {
        try {
            setUser({});
            localStorage.setItem('User', JSON.stringify({}));
        } catch (error) {
            console.log(error.response);
            console.log('Erro', 'Falha ao tentar realizar o logout');
        }
    }
    async function DeleteAccount() {
        try {
            const response = await axios.delete(`${API}api/usuario/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });


            console.log('Conta deletada com sucesso.');

            console.log(response.data);

            setUser();
            localStorage.setItem('User', JSON.stringify({}));

        } catch (error) {
            console.log(error.response);
            console.log('Erro', 'Falha ao tentar excluir o usuario');
        }
    }

    return (
        <LoginContext.Provider value={{ user, setUser, signIn, Logout, DeleteAccount }}>
            {children}
        </LoginContext.Provider>
    );
};
