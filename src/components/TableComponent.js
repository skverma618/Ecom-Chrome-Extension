import React, { useState } from 'react';
import { FaThumbsUp } from "react-icons/fa6";

const FlagIcon = () => (
    <span role="img" aria-label="flag">
        🇺🇸
    </span>
);

const ThumbsUpIcon = () => (
    <span role="img" aria-label="thumbs up" style={{ color: 'green' }}>
        👍
    </span>
);

const TableComponent = () => {
    const [selectedOption, setSelectedOption] = useState('current');

    const options = ['current', '90', '30', '180', 'All'];

    const firstColumnFields = ['BSR (Top %)', 'Buy Box', 'Amazon', 'Lowest FBA'];
    const secondColumnValues = ['436', '$32', '$32.75', '-'];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                {/* <h2 className="text-lg font-semibold">Table Heading</h2> */}
                <div className="flex">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 mr-2 rounded ${selectedOption === option ? 'bg-blue-100' : 'bg-gray-200'
                                }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2"><FlagIcon /> BSR (Top %)</th>
                        <th className="px-4 py-2">436 
                        <span className='text-green-600'>
                        (0.00%) <FaThumbsUp style={{
                            display: 'inline',
                        }} />
                        </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {firstColumnFields.map((field, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="px-4 py-2">{field}</td>
                            <td className="px-4 py-2">{secondColumnValues[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
