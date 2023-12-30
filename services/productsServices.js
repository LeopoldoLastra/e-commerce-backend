const boom = require('@hapi/boom');


class ProductsServices{
  constructor(){
    this.products = [

        {
          id: '1',
          title: "Manzana",
          price: "$ 10",
          category: "Fruta.",
          description: "Manzana Roja",
          image: "https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-04/Main-Banner-Desktop-1200x384.webp?itok=0GbkJ_6k"
        },
        {
          id: '2',
          title: "Manzana Verde",
          price: "$ 10",
          category: "Fruta.",
          description: "Manzana Verde",
          image: "https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-04/Main-Banner-Desktop-1200x384.webp?itok=0GbkJ_6k"
        },
        {
          id: '3',
          title: "Pera",
          price: "$ 5",
          category: "Fruta.",
          description: "Pera grande",
          image: "https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-04/Main-Banner-Desktop-1200x384.webp?itok=0GbkJ_6k"
        },
        {
          id:'4',
          title: "Sandia",
          price: "$ 100",
          category: "Fruta.",
          description: "Manzana Roja",
          image: "https://www.recetasnestlecam.com/sites/default/files/styles/crop_article_banner_desktop_nes/public/2022-04/Main-Banner-Desktop-1200x384.webp?itok=0GbkJ_6k"
        }];

  }




 create(data){
  const newProduct = {...data}

  if(!newProduct){
    throw boom.conflict('No se pudo crear el producto')
  }

  this.products.push(newProduct)
  return newProduct

};

 find(){
    return this.products

};

 findSpecificProduct(id){

  const product = this.products.find(product=>((product.id).toString())==id)

  if(!product){
    throw new Error ('El producto no existe')
  };

  return(product)
};

delete(id){

  const index = this.products.findIndex(product=>product.id==id.id)
  if(index === -1){
    throw new Error ('El producto no existe')
  };
  const deletedProduct = this.products[index]
  this.products.splice(index,1);
  return(deletedProduct)
}


update(id, body){
  console.log('el id es ', id)
  const index = this.products.findIndex(product=>product.id==id)
  console.log('el index es ', index)
  if(index === -1){
    throw new Error ('El producto no existe')
  };

  this.products.splice(index,1);
  this.products.push(body)

  //this.products[index]={body};
  console.log('el nuevo producto es 0', body)
  return(body)
}


}

module.exports=ProductsServices
