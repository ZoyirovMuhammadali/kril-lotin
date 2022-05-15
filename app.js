const express=require('express')
const path=require('path')
const {engine}=require('express-handlebars')
const app=express()
const session=require("express-session")


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use(session({secret:'maxfiy_kalit',resave:false,saveUninitialized:false}))

app.engine('.hbs',engine({
     defaultLayout:'main',
     extname:'.hbs'
}))
app.set('view engine','.hbs')

app.use('/',require('./routes/translate'))



app.listen(3000,()=>{
    console.log('Server ishlayopti...')
})