"use client"
import React, { useState, useEffect } from 'react'
import ProductTable from "@/components/ProductTable";
import DiscountTable from '@/components/DiscountTable';
import DiscountForm from '@/components/DiscountForm';
import axios from 'axios';

export default function Home() {

  const [apiProducts, setApiProducts] = useState([]);
  const [apiDiscounts, setApiDiscounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleShopify = async () => {
    try {
      setLoading(true)
      const responseProducts = await fetch('/api/products');
      const apiProducts = await responseProducts.json();
      const responsePriceRules = await fetch('/api/discounts');
      const apiPriceRules = await responsePriceRules.json();
      console.log(apiProducts)
      setLoading(false)
      setApiDiscounts(apiPriceRules.price_rules)
      setApiProducts(apiProducts.products);
    } catch (error) {
      console.error('Error fetching Shopify products:', error.message);
    }
  };

  useEffect(() => {
    handleShopify();
  }, []);

  const handleSubmitClick = async (discount) => {
    try {
      const response = await axios.post('/api/discounts', discount, {
          headers: {
              'Content-Type': 'application/json',
          },
      });
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
        console.error('Error al enviar la solicitud POST:', error.message);
    }
    console.log(discount);
    modalHandler();
  }


  return (
    <main>
      <div>
        <h1 className="text-2xl my-12 text-center mb-4">All Nutrition Test</h1>
        <div className="container mx-auto">
          <button onClick={modalHandler} className="bg-sky-800 text-white px-4 mx-1 py-1 rounded hover:bg-blue-700 text-center">
            Crear Descuento
          </button>
        </div>
        { loading && <div>
          <div className='flex space-x-2 justify-center items-center my-8 dark:invert'>
            <span className='sr-only'>Loading...</span>
            <div className='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-2 w-2 bg-black rounded-full animate-bounce'></div>
          </div>
        </div>}
        { apiDiscounts && <DiscountTable discounts={apiDiscounts}/> }
        { apiProducts && <ProductTable products={apiProducts}/> }
      </div>
      {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="modal bg-white w-96 p-6 rounded shadow-lg">
                        <button onClick={modalHandler} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">×</button>
                        <DiscountForm handleSubmitClick={handleSubmitClick}/>
                        <button onClick={modalHandler} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Cerrar</button>
                    </div>
                </div>
            )}
    </main>
  )
}