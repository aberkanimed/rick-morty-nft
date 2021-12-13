import React from 'react'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem'

const ShoppingCart = ({ cartItems, removeItem, subtotal }) => {

    return (
        <div className="">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-0">
                <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-700 sm:text-4xl">Shopping Cart</h1>
                {(() => {
                    if (cartItems.length > 0) {
                        return (
                            <form className="mt-12">
                                <section aria-labelledby="cart-heading">
                                    <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>

                                    <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                                        {
                                            cartItems.map((item, index) => <CartItem key={index} character={item} removeItem={removeItem} />)
                                        }
                                    </ul>
                                </section>

                                {/* <!-- Order summary --> */}
                                <section aria-labelledby="summary-heading" className="mt-10">
                                    <h2 id="summary-heading" className="sr-only">Order summary</h2>

                                    <div>
                                        <dl className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <dt className="text-base font-medium text-gray-900">
                                                    Subtotal
                                                </dt>
                                                <dd className="ml-4 text-base font-medium text-gray-900">
                                                    { subtotal } €
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>

                                    <div className="mt-10">
                                        <button type="submit" className="w-full bg-blue-500 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500">Checkout</button>
                                    </div>

                                    <div className="mt-6 text-sm text-center">
                                        <p>
                                            or <NavLink to="/rick-morty-react" className="text-blue-600 font-medium hover:text-blue-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></NavLink>
                                        </p>
                                    </div>
                                </section>
                            </form>
                        );
                    } else {
                        return (
                            <div className="mt-6 text-sm text-center">
                                <p>
                                    <NavLink to="/rick-morty-react" className="text-blue-600 font-medium hover:text-blue-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></NavLink>
                                </p>
                            </div>
                        );
                    }
                })()}
            </div>
        </div>
    )
}

export default ShoppingCart
