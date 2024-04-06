import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Offers = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const properties = [
        {
            seller: 'FBA',
            stock: '34',
            price: '34',
            profit: '34',
            roi: '34',
        },
        {
            seller: 'FBM',
            stock: '36',
            price: '36',
            profit: '12',
            roi: '12',
        },
    ];

    return (
        <div className='mt-4'>
            <div className='bg-secondary'>
                <div className='flex text-primary cursor-pointer items-center mb-2'
                    onClick={toggleAccordion}>
                    <div className='mr-1' style={{
                        fontSize: '16px',
                    }}>
                        Offers </div>
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
                                <div>Seller</div>
                                <div>Stock</div>
                                <div>Price</div>
                                <div>Profit</div>
                                <div>ROI</div>
                            </div>
                            {properties.map((property, index) => (
                                <div key={index} className="flex justify-between text-primary mt-1" style={{
                                    fontSize: '13px',
                                }}>
                                    <div>{property?.seller}</div>
                                    <div className=''>{property?.stock}</div>
                                    <div className=''>{property?.price}</div>
                                    <div className=''>{property?.profit}</div>
                                    <div className=''>{property?.roi}</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Offers;
