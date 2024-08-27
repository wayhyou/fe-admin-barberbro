import React from 'react';
import { useParams } from 'react-router-dom';

const BarbershopHomePage = () => {
    const { barbershopName } = useParams();

    return (
        <div>
            <h1>Welcome to {barbershopName} Barbershop</h1>
        </div>
    );
};

export default BarbershopHomePage;
