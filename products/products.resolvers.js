const productModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
        return productModel.getAllProducts();
    },
    productsByPrice:(_,args)=>{
        return productModel.getProductsByPrice(args.min,args.max);
    },
    product:(_,args)=>{
        return productModel.getProductsById(args.id);
    }
  },

  Mutation: {
    addNewProduct(_,args){
        return productModel.addNewProduct(args);
    },
    addNewProductReview(_,args){
        return productModel.addNewProductReview(args);
    }
  }
};
