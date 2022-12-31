import { Product } from "./Product";

export class SimpleDataSource{
    private products: Array<Product>;

    constructor(){
      this.products = new Array<Product>(
           new Product(1,"Çiğ Köfte","Yemek",10,250),
           new Product(2,"İçli Köfte","Yemek",5,150), //Acıktım mı ne? 
           new Product(3,"Tulumba","Tatlı",12,100)
      );
          
      
    };

    getProducs():Product[]{
        return this.products;
    }
}