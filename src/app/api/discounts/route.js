import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
    try {

        const shop = 'quickstart-a50cc1ff'; 
        const api_version = '2023-10'; 
        const password = process.env.STOREFRONT_ACCESS_TOKEN

        const url = `https://${shop}.myshopify.com/admin/api/${api_version}/price_rules.json`;

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

export async function POST(req) {
    try {
        const shop = 'quickstart-a50cc1ff'; 
        const api_version = '2023-10'; 
        const password = process.env.STOREFRONT_ACCESS_TOKEN;

        const url = `https://${shop}.myshopify.com/admin/api/${api_version}/price_rules.json`;

        const response = await axios.post(url, req.body, {
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': password
            }
        });

        console.log('Respuesta:', response.data);

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error en la solicitud POST:', error);

        if (error.response) {
            console.error('Respuesta del servidor:', error.response.data);
        }

        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}