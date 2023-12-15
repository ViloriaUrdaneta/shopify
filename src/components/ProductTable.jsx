"use client"
import React from 'react'


const ProductTable= ({ products }) => {

    return (
        <div className="container mx-auto mt-8 h-full">
            <h1 className="text-2xl font-bold mb-4">Tabla de Productos</h1>
            <table className="min-w-full divide-y divide-gray-600">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-400">
                    {products.map((product) => (
                    <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable
