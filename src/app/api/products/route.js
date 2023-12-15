import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
    try {

        const shop = 'quickstart-a50cc1ff'; 
        const api_version = '2023-10'; 
        const password = process.env.STOREFRONT_ACCESS_TOKEN

        const url = `https://${shop}.myshopify.com/admin/api/${api_version}/products.json`;

        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': password
            }
        });

        return NextResponse.json(response.data);
    } catch (error) {
        if(error instanceof Error){
            return NextResponse.json({message: error.message},{status: 500})
        }
    }
};


/**
 * const shopify = shopifyApi({
            apiKey: process.env.API_KEY,
            apiSecretKey: process.env.SECRET_API_KEY,
            scopes: ['read_discounts', 'write_discounts', 'write_products', 'read_products'],
            hostName: process.env.HOST_NAME,
        });

        const storefrontAccessToken = process.env.STOREFRONT_ACCESS_TOKEN;
        const shop = process.env.STORE_URL;

        const storefrontClient = new shopify.clients.Storefront({
            domain: shop,
            storefrontAccessToken,
        });

        const products = await storefrontClient.query({
            data: `{
                products (first: 3) {
                edges {
                    node {
                        id
                        title
                    }
                }
                }
            }`,
        });
 */




        /**
         * 
        const shopify = new Shopify({
            shopName: process.env.API_KEY,
            apiKey: process.env.SECRET_API_KEY,
            password: process.env.STOREFRONT_ACCESS_TOKEN,
        });

        shopify.product.list({ limit: 5}).then((products) => console.log(products)).catch((error) => console.log('error: ', error))
         */




/**
 * console.log(process.env.API_KEY,process.env.SECRET_API_KEY,process.env.HOST_NAME,process.env.STOREFRONT_ACCESS_TOKEN,process.env.STORE_URL)
        
        const shopify = shopifyApi({
            apiKey: process.env.API_KEY,
            apiSecretKey: process.env.SECRET_API_KEY,
            scopes: ['read_discounts', 'write_discounts', 'write_products', 'read_products'],
            hostName: process.env.HOST_NAME,
        });

        const storefrontAccessToken = process.env.STOREFRONT_ACCESS_TOKEN;
        const shop = process.env.STORE_URL;

        const storefrontClient = new shopify.clients.Storefront({
            domain: shop,
            storefrontAccessToken,
        });

        const products = await storefrontClient.query({
            data: `{
                products (first: 3) {
                edges {
                    node {
                        id
                        title
                    }
                }
                }
            }`,
        });
 */





        /**
         *  const shop = 'mystore'; 
        const api_version = '2023-10'; 
        const password = process.env.ACCESS_TOKEN

        const url = `https://${shop}.myshopify.com/admin/api/${api_version}/shop.json`;

        axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': password
            }
            }).then(response => {
                console.log('Respuesta:', response.data);
            }).catch(error => {
                console.error('Error al realizar la solicitud:', error.message);
        });
         * 
         */