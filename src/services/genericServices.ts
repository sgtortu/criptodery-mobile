//@ts-ignore
//import config from 'react-native-ultimate-config';
import 'react-native-url-polyfill/auto';
import { authentication, createDirectus, readItems, rest, } from '@directus/sdk';

const client = createDirectus('http://0.0.0.0:8055/')
    .with(authentication())
    .with(rest());


const genericGet = async (collection: any, options = {}) => {
    try {
        const result = await client.request(readItems(collection, options));
        return result;
    } catch (error) {
        console.error('Error GET:', error);
        throw error;
    }
};



export {
    genericGet,
};
