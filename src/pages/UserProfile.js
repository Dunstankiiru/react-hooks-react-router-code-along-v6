
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

function UserProfile() {
    const [user, setUser] = useState({});
    const params = useParams();
    const userId = params.id;

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
            .then(r => r.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }, [userId]);

    if (!user.name) {
        return <h1>Loading...</h1>;
    };

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <h1>{user.name}</h1>
            </main>
        </>
    );
};

export default UserProfile;
