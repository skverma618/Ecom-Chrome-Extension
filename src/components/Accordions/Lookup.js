import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Lookup = ({ name, price }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const properties = [
        {
            title: 'BSR (TOP%)',
            value: '260,391',
        },
        {
            title: 'Buy Box',
            value: '$9.70',
        },
        {
            title: 'Lowest FBM',
            value: '$9.70',
        },
        {
            title: 'Keep a BSR Drops',
            value: '1 in last 30 Days',
        },
        {
            title: 'NET BB Price Changes',
            value: '0 in last 30 Days',
        }

    ];

    return (
        <div className='mt-4'>
            <div className='bg-secondary'>
                <div className='flex text-primary cursor-pointer items-center mb-2'
                    onClick={toggleAccordion}>
                    <div className='mr-1' style={{
                        fontSize: '16px',
                    }}>
                        Lookup Details </div>
                    <div>
                        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                </div>
                {isOpen && (
                    <div className="bg-primary2 p-4 rounded-lg">
                        {
                            properties.map((property, index) => (
                                <div key={index} className="flex justify-between text-primary" style={{
                                    fontSize: '13px',
                                }}>
                                    <div>{property.title}</div>
                                    <div>{property.value}</div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default Lookup;
