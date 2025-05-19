import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import axios from "axios";
import React, { useState, useEffect, useContext } from 'react';
import { LoginContext } from '../../context/Lcontext';
import { useNavigate } from 'react-router-dom';

export function Profile() {
    const apiBackEnd = process.env.REACT_APP_API_URL;
    const { user, Logout, DeleteAccount } = useContext(LoginContext);
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;

        const fetchUser = async () => {
            try {
                const response = await axios.get(`${apiBackEnd}/api/usuario/${user.id}`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });

                setProfile(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [apiBackEnd, user]);

    if (!profile) {
        return <div>Carregando...</div>;
    }

    const handleLogout = () => {
        Logout();
        navigate('/');
    };
    const handleDeleteAccount = () => {
        DeleteAccount();
        navigate('/');
    };

    return (
        <>
            <NavBar />
            <p>{user.id}</p>
            <p>{user.nome}</p>
            <p>{user.token}</p>
            <button onClick={handleLogout}>Sair</button>
            <button onClick={handleDeleteAccount}>Deletar conta</button>
            <Footer />
        </>
    );
}
