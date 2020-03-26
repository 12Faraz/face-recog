const handleProfile=(req,res)=>{
        const {id}=req.params;
        db.select('*').from('users').where({id})
        .then(user=>{
             if(user.length>=1){
                        res.json(user[0]);
            }
            else{
                res.status(400).json('not found')
            }
        })
        .catch(err=>res.status(400).json('error'))
    }
module.exports={
handleProfile:handleProfile
}