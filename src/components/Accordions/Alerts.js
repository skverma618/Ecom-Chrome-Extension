import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FaCheck } from "react-icons/fa";

const Alerts = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const properties = [
        {
            heading: 'Amazon Share Buy Box',
            subheading: data?.amazonShareBuyBox ? 'This product has Amazon Share Buy Box' : 'This product don\'t have Amazon Share Buy Box',
            tick: true
        },
        {
            heading: 'Size',
            subheading: data?.size,
            tick: true
        },
        {
            heading: 'Private Label',
            subheading: 'This product has few historic sellers which is a sign it could be PL',
            tick: data?.privateLabel ? true : false
        },
        {
            heading: 'Meltable',
            subheading: data?.meltable ? 'This product is meltable' : 'This product is not meltable',
            tick: data?.meltable ? true : false
        },
        {
            heading: 'Low Price Fee',
            subheading: data?.low_price_FBA ? 'This product has low price FBA' : 'This product does not have low price FBA',
            tick: data?.low_price_FBA ? true : false
        },
        {
            heading: 'Variations',
            subheading: data?.variations ? 'This product has variations' : 'This product does not have variations',
            tick: data?.variations ? true : false
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
                        Alerts </div>
                    <div>
                        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                </div>
                {isOpen && (
                    <div class="">
                        {properties.map((property, index) =>
                            <div key={index} className="flex justify-between text-primary bg-primary2 p-4 rounded-lg mt-2" style={{
                                fontSize: '13px',
                            }}>
                                <div className='' style={{ textAlign: 'left' }}>
                                    <div style={{ fontSize: '16px' }}>{property.heading}</div>
                                    <h4 style={{ fontSize: '13px' }}>{property.subheading}</h4>
                                </div>
                                <div>
                                    <div className='bg-primary rounded-full p-1'>
                                        <FaCheck className='text-secondary' />
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>)}
            </div>
        </div>
    );
};

export default Alerts;
