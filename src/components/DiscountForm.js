import { useState } from 'react';


const DiscountForm = ({ handleSubmitClick }) => {

    const [formData, setFormData] = useState({
        price_rule: {
        title: '',
        value_type: 'fixed_amount',
        value: '',
        customer_selection: 'all',
        target_type: 'line_item',
        target_selection: 'entitled',
        allocation_method: 'each',
        starts_at: '2018-03-22T00:00:00-00:00',
        prerequisite_collection_ids: [],
        entitled_product_ids: [],
        prerequisite_to_entitlement_quantity_ratio: {
            prerequisite_quantity: 1,
            entitled_quantity: 1,
        },
        allocation_limit: 3,
        },
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prevFormData) => ({
        price_rule: {
            ...prevFormData.price_rule,
            [name]: value,
        },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleSubmitClick(formData)
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
                type="text"
                name="title"
                value={formData.price_rule.title}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
            />

            <label className="block mt-4 text-sm font-medium text-gray-700">Value:</label>
            <input
                type="text"
                name="value"
                value={formData.price_rule.value}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
            />

            <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md">
                Enviar
            </button>
        </form>
    );
};

export default DiscountForm;
