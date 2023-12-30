const Joi  = require('joi');


const id =Joi.string();
const title=Joi.string().min(3).max(15);
const description= Joi.string();
const price=Joi.number().integer().min(10);
let image=Joi.string().uri();

const createProductSchema=Joi.object({
  id:id.required(),
  title:title.required(),
  description:description,
  price:price.required(),
  image:image.allow("")

})


module.exports = {createProductSchema}
