import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import ProductDetails from '../ProductDetails';

const Overview = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='mt-4'>
            <div className='bg-secondary'>
                <div className='flex text-primary cursor-pointer items-center mb-2'
                    onClick={toggleAccordion}>
                    <div className='mr-1' style={{
                        fontSize: '16px',
                    }}>
                        Overview</div>
                    <div>
                        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                </div>
                {isOpen && <ProductDetails data={data}/>}
            </div>
        </div>
    );
};

export default Overview;
