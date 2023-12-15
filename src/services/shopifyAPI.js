import axios from 'axios';

export const shopifyProducts = async () => {
    
    const shop = 'quickstart-a50cc1ff';
    const api_version = '2023-10'; 
    const password = process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN;

    console.log(password)

    const url = `https://${shop}.myshopify.com/admin/api/${api_version}/products.json`;

    const response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': password
        }
    })

    console.log(response.data)

    return response.data
}

