import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <div class="card bg-primary text-white">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p>Price: {price}</p>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;