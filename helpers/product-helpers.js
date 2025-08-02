var db=require('../config/connection')
var collection=require('../config/collections')
const { ObjectId } = require('mongodb');

module.exports={


    addProduct:(product,callback)=>{
        console.log(product);
        db.get().collection('product').insertOne(product).then((data)=>{
            
            callback(data.insertedId)

        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    deleteProduct:(proId)=>{
        return new Promise((resolve,reject)=>{
            console.log(proId);
            const objId = new ObjectId(proId);
            console.log( objId);
            db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id:objId}).then((response)=>{
                //console.log(response);
                resolve(response)
            })
        })
    }

}