import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const ProfitCalculator = ({ data }) => {
    const prices = data?.prices;
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const properties = [
        {
            title: 'Profit',
            value:  (data?.profit ? '$'+data.profit : '--'),
        },
        {
            title: 'ROI',
            value: (data?.roi ? data.roi : '--'),
        },
        {
            title: 'Maximum Cost',
            value: (data?.max_cost ? '$'+data.max_cost : '--'),
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
                        Profit Calculator </div>
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
                                    <div>Cost Price</div>
                                    <div>
                                        <input type="text" value={
                                            prices?.cost_price || '--'
                                        } placeholder="$20" className='bg-primary2 text-primary border border-primary rounded-lg p-1 mt-1' />
                                    </div>
                                </div>
                                <div style={{
                                    maxWidth: '30%',
                                }}>
                                    <div>Sale Price</div>
                                    <div>
                                        <input type="text" value={
                                            prices?.sale_price || '--'
                                        } className='bg-primary2 text-primary border border-primary rounded-lg p-1 mt-1' />
                                    </div>
                                </div>
                                <div style={{
                                    maxWidth: '30%',
                                }}>
                                    <div>Fullfillment</div>
                                    <div>
                                        <input type="text" value="$50" className='bg-primary2 text-primary border border-primary rounded-lg p-1 mt-1' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between text-primary mt-3" style={{
                                fontSize: '13px',
                                fontWeight: 'bold',
                            }}>
                                <div>Storage</div>
                                <div>Edit</div>
                            </div>
                            {properties.map((property, index) => (
                                <div key={index} className="flex justify-between text-primary mt-1" style={{
                                    fontSize: '13px',
                                }}>
                                    <div>{property.title}</div>
                                    <div className='rounded-lg p-1 text-white'
                                        style={{
                                            backgroundColor: '#E74B4B',
                                        }}
                                    >{property.value}</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfitCalculator;
