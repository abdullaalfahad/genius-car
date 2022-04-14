import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.jpg';
import Expert from '../Expert/Expert';

const Experts = () => {

    const experts = [
        { id: 1, name: 'John Smith', img: expert1 },
        { id: 2, name: 'Chirs Rock', img: expert2 },
        { id: 3, name: 'Methew Heddien', img: expert3 },
        { id: 4, name: 'Jonny Johnson', img: expert4 },
        { id: 5, name: 'Harry Anderson', img: expert5 },
        { id: 6, name: 'Robi Bopara', img: expert6 }
    ]

    return (
        <div className='container mb-5'>
            <h1 className='text-center text-dark fw-bold'>Our Experts</h1>
            <div className='row mt-2 g-4 mx-auto'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;