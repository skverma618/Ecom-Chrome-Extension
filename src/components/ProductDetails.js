import React from 'react';

const ProductDetails = ({ data }) => {
    const bsr = data?.BSR;
    const prices = data?.prices;
    return (
        <div className="product-details-container rounded-lg">
            {/* <h2 className="text-xl font-bold">Product Details</h2> */}
            <div className="flex flex-wrap mb-5 justify-between" style={{
                fontSize: '14px',
            }}>
                <div className="box border rounded-lg p-3 bg-primary2" style={{
                    width: '32%'
                }}>
                    <h3 className="font-bold">BSR</h3>
                    <p>
                        {bsr?.BSR ? bsr?.BSR : '-'}
                        ({bsr?.percentage ? bsr?.percentage : '-'})
                    </p>
                </div>
                <div className="box border rounded-lg p-4 bg-primary-light" style={{
                    width: '32%'
                }}>
                    <h3 className="font-bold">Est. Sales</h3>
                    <p>22.543%</p>
                </div>
                <div className="box border rounded-lg p-4 bg-primary-light" style={{
                    width: '32%'
                }}>
                    <h3 className="font-bold">Max. Cost</h3>
                    <p>${data?.max_cost ? data?.max_cost : '-'}</p>
                </div>
            </div>
            <div className="flex flex-wrap" style={{
                fontSize: '14px',
            }}>
                <div className="box flex-1 border rounded-lg p-4 mr-4 bg-primary-light">
                    <h3 className="font-bold">Sales Price</h3>
                    <p>
                    {prices?.sale_price ? '$' + prices?.sale_price : '-'}                    </p>
                    {/* <input type="text" value="$100" readOnly className="w-full p-1 border rounded-lg" /> */}
                </div>
                <div className="box flex-1 border rounded-lg p-4 bg-primary-light">
                    <h3 className="font-bold">Cost Price</h3>
                    <p>
                        {prices?.cost_price ? '$' + prices?.cost_price : '-'}
                    </p>
                    {/* <input type="text" value="$50" readOnly className="w-full p-1 border rounded-lg" /> */}
                </div>
            </div>
            <div className="flex flex-wrap mt-4" style={{
                fontSize: '14px',
            }}>
                <div className="box flex-1 border rounded-lg p-4 mr-4 bg-primary-light">
                    <h3 className="font-bold">Profit</h3>
                    <p>
                        {prices?.profit ? '$'+prices?.profit : '-'}
                    </p>
                </div>
                <div className="box flex-1 border rounded-lg p-4 bg-primary-light">
                    <h3 className="font-bold">ROI</h3>
                    <p>
                        {prices?.roi ? prices?.roi : '-'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
