import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Dimension = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const properties = [
        {
            title: 'Width',
            value: (data?.width ? data.width : '--')
        },
        {
            title: 'Height',
            value: (data?.height ? data.height : '--')
        },
        {
            title: 'Length',
            value: (data?.length ? data.length : '--')
        },
        {
            title: 'Weight',
            value: (data?.weight ? data.weight : '--')
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
                        Dimensions </div>
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
                            ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Dimension;
