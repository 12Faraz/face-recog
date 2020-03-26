const Clarifai =require('clarifai');
const app = new Clarifai.App({
 apiKey: 'ccae7125b9224feba8639db41e0a9dd7'
});
const HandleAPIcall =(req,res)=>{
 app.models.predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data=>{
     res.json(data);
 })
    .catch(err=>res.status(400).json('unaable to work with api'))
}
const handleImage=(req,res,db)=>{
        const {id}=req.body;
        db('users').where('id','=',id)
        .increment('entries',1)
        .returning('entries')
        .then(entries=>{
            res.json(entries[0]);
            console.log('true2')
        })
        .catch(err=>console.log(err))
    }
module.exports={
    handleImage,
    HandleAPIcall
}