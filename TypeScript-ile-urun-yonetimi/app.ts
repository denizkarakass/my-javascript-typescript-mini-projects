
import { Product } from './Product';
import {ProductService} from './ProductService';

let _productService = new ProductService();

let result;

result = _productService.getProducts(); // Tüm ürünleri çekme
result = _productService.getById(2); // 2 numaralı ürünü çekme


//ürün ekleme
let p  = new Product();
p.name = "Keşkek";
p.price = 8;
p.category = "ara-öğün";
p.miktar = 120;
result = _productService.getProducts();


//ürün silme
_productService.deleteProduct(result);
result = _productService.getProducts();


console.log(result);