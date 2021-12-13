import React from 'react'

const CartItem = ({ character, removeItem }) => {
    let { id, name, image, location, status, price } = character;

    return (
        <li key={id} className="flex py-6">
            <div className="flex-shrink-0">
                <img src={image} alt="Front side of mint cotton t-shirt with wavey lines pattern." className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32" />
            </div>

            <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                <div>
                    <div className="flex justify-between">
                        <h4 className="text-sm">
                            <span className="font-medium text-gray-700 hover:text-gray-800">
                                {name}
                            </span>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">{price} €</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                        {location.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {status}
                    </p>
                </div>

                <div className="mt-4 flex-1 flex items-end justify-between">
                    <p className="flex items-center text-sm text-gray-700 space-x-2">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>In stock</span>
                    </p>
                    <div className="ml-4">
                        <button type="button" onClick={() => removeItem(character)} className="text-sm font-medium text-blue-600 hover:text-blue-500">
                            <span>Remove</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem
