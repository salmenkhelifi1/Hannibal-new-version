interface User {
    id:Number;
    fullName:string;
    email:string; 
    password:string;
    role:string; 
    createdAt:string; 
    updatedAt:string
}

interface Categorie {
    id:Number;
    name:string;
    image:string;
    createdAt:string; 
    updatedAt:string;
    Products:Products[]
}

interface Products {
    id:number;
    name:string;
    price:number;
    image:string;
    description:string;
    available:Boolean;
    rate:number;
    createdAt:string;
    quantity:number;
    sellerProduct:number;
    updatedAt:string;
    CategoryId:number
}

interface Product {
    id: number;
    name: string;
    category: string;
    rate: number; 
    price: number;
    image: string;
    description: string;
  }
  
  interface CategoryProps {
    products: Product[];
  }

