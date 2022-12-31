import { Product } from "./Product";

export interface IProductService{
    getById(id:Number): Product;
    getProducts(): Product[];
    saveProduct(product:Product):void;
    deleteProduct(product:Product):void;

}