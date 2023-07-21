const products = [
  {
    id: "redshoe",
    description: "Red shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts(){
    return products;
}

function getProductsByPrice(min,max){
    return products.filter((product)=>{
        return product.price <=max && product.price>=min;
    });
}

function addNewProduct({id,price,description}){
    const newProduct = {
      id,
      price,
      description,
      reviews: [],
    };

    products.push(newProduct);
    return newProduct;
}

function addNewProductReview({id,rating,comment}){
    const review = {
        rating,
        comment
    }
    const reviewedProduct = products.find((product)=>{
        return product.id === id
    });

    if(!reviewedProduct) return {};
    
    reviewedProduct.reviews.push(review);

    return review;
}

function getProductsById(id){
    return products.find((product)=>{
        return product.id === id;
    });

}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductsById,
    addNewProduct,
    addNewProductReview,
}