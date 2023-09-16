import axios from "axios";

export const fetchCategories = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products/categories');
    console.log(data);
    return data
}

export const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    console.log(data);
    return data
}
