const express = require('express');
const ProductsServices = require('../services/productsServices');

const service = new ProductsServices();

const validatorHandler=require('../middleware/validatorHandler')
const {createProductSchema}=require('../schema/productsSchema')
const cors = require('cors')

const router = express.Router();



router.get('/', async (req,res,next)=>{
        try{
          const products = await service.find();
          res.json(products);

        }catch(error){
          next(error);
        };
    });

    router.get('/:id', async (req,res,next)=>{
      try{
        const {id}= req.params
        const product = await service.findSpecificProduct(id);
        res.json(product);
      }catch(error){
        next(error);
      };
  });




  router.post('/',

        validatorHandler(createProductSchema, 'body'),

        async (req,res,next)=>{
            try{
                const body = req.body

                const product = await service.create(body)
                res.json({
                  message: 'product',
                  data: product
                })

            }catch(error){

              next(error)
            }
        });

  router.put('/:id', cors(),async (req,res,next)=>{

          try{
            const {id}= req.params;
            const body = req.body

            const product = await service.update(id, body);
            res.json({
              message:'update',
              data:body,
              id:id

            });

          }catch(error){
            next(error);
          };
  });

  router.delete('/:id', async(req,res,next)=>{
          try{
            const id =req.params;

            const product = await service.delete(id)
            res.json({
              message:`El producto ${id.id} fue eliminado`,
              data:product
            })
          }catch(error){
              next(error)
          }
  })




module.exports=router;
