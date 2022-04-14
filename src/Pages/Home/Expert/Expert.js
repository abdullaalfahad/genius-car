import React from 'react';

const Expert = ({ expert }) => {
    const { img, name } = expert;
    return (
        <div className='col-lg-4 col-md-6'>
            <div className='bg-primary text-white p-2'>
                <img className='w-100' src={img} alt="" />
                <h3 className='text-center'>{name}</h3>
            </div>
        </div>
    );
};

export default Expert;