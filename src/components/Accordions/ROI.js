import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const ROI = ({ name, price }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const properties = [
        {
            title: 'Profit',
            value: '$9.70',
        },
        {
            title: 'ROI',
            value: '$9.70',
        },
        {
            title: 'Maximum Cost',
            value: '1 in last 30 Days',
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
                        R.O.I </div>
                    <div>
                        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                </div>
                {isOpen && (
                    <>
                        <div className="bg-primary2 p-4 rounded-lg">
                            <div className='flex justify-between text-primary' style={{
                                fontSize: '13px',
                            }}>
                                <div style={{
                                    maxWidth: '30%',
                                }}>
                                    <div>
                                        <input type="text" value={'$20'} placeholder="$20" className='bg-primary2 text-primary border border-primary rounded-lg p-1 mt-1' />
                                    </div>
                                </div>
                                <div style={{
                                    maxWidth: '30%',
                                }}>
                                    <div>
                                        <input type="text" value="$100" className='bg-primary2 text-primary border border-primary rounded-lg p-1 mt-1' />
                                    </div>
                                </div>
                                <div style={{
                                    maxWidth: '30%',
                                }}>
                                    <div>
                                        <input type="text" value="$50" className='bg-primary2 text-primary border border-primary rounded-lg p-1 mt-1' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between text-primary mt-3" style={{
                                fontSize: '13px',
                                fontWeight: 'bold',
                            }}>
                                <div>ROI</div>
                                <div>Profit</div>
                                <div>Sale Price</div>
                            </div>
                            {properties.map((property, index) => (
                                <div key={index} className="flex justify-between text-primary mt-1" style={{
                                    fontSize: '13px',
                                }}>
                                    <div>{property.title}</div>
                                    <div className=''
                                    >{property.value}</div>
                                    <div className=''>
                                        34
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ROI;
