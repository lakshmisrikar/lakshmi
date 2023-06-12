const express=require('express');
const mongoose=require('mongoose');
const app=express();
mongoose.connect('mongodb+srv://srikarskilling:srikarskilling@cluster0.73wagag.mongodb.net/?retryWrites=true&w=majority').then(
    ()=>console.log('DB Connected')
)
app.post('/addtask',async(req,res)=>{
    const {
        
    }
})
app.listen(5000,()=>console.log('server runnning'));