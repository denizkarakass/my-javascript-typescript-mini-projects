import { Product } from "./Product";
import { IProductService } from "./IProductService";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService{

    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducs().forEach(p=> this.products.push(p));

    }

    getById(id: Number): Product {
      return this.products.filter(p=>p.id === id)[0];
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id==0 || product.id== null){
            product.id = this.generateID();
            this.products.push(product);
        }else{
           let index = this.products.indexOf(product);
           this.products.splice(index,1,product);
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if(index>0){
            this.products.splice(index,1);
        }
    }
    
    private generateID(): number{
        let key = 1;
        while(this.getById(key) !=null){
            key++;
        }

        return key;
    }
}