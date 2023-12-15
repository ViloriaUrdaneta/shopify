"use client"
import React from 'react'


const DiscountTable= ({ discounts}) => {

    return (
        <div className="container mx-auto mt-8 h-full">
            <h1 className="text-2xl font-bold mb-4">Tabla de Descuentos</h1>
            <table className="min-w-full divide-y divide-gray-600">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-400">
                    {discounts.map((discount) => (
                    <tr key={discount.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{discount.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{discount.value}{discount.value_type === 'percentage' ? '%' : 'USD'}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DiscountTable
