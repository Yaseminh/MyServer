const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4545;

const serverurl = 'http://192.168.1.20:4545';

const mongoose= require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/auth');

const {User} = require('./models/User');




const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/test';

//Mongo baglanti
/*MongoClient.connect(url,(err,db)=>{
if(err){
  console.log('could not connect');
}
console.log('connected !!!')
db.close();
}
  )*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended:true
}));


//destekden
app.post('/Girisyap', (req, res) => { 

   /* MongoClient.connect(url,(err,db)=>{
      db.collection('Havadurumuapp').insertOne({
        username:req.body
             
      },(err, res)=>{
        if(err){
          return console.log(`Cannot insert: ${err}`)
        }
        console.log(res.ops[req.body.id])
      })   
  db.close();
  
    })  */   
    console.log(req.body);
  
  });





//app.get('/deneme', (req, res) => res.send('Hello World!'));

//loginkullanici
app.post('/Havadurumuapp', (req, res) => { 

/*  const user= new User({
  username:req.body.username,
  password:eq.body.password

});

user.save((err,doc)=>{
if(err) res.status(200).send(err)
res.status(200).send(doc)
})*/
  MongoClient.connect(url,(err,db)=>{
    db.collection('Havadurumuapp').insertOne({
      username:req.body.username ,
           
    },(err, res)=>{
      if(err){
        return console.log(`Cannot insert: ${err}`)
      }
      console.log(res.ops[req.body.id])
    })   
db.close();

  })     
  console.log(req.body.username);

  //   var sql = "INSERT INTO kullanicilar (ad, soyad, sifre, statu) VALUES ('"+req.body.username+"', '"+req.body.surname+"','"+req.body.password+"', '"+req.body.statu+"')";
});

//kulhavadurum
app.post('/KulHavadurumuapp', (req, res) => { 

  /*  const user= new User({
    username:req.body.username,
    password:eq.body.password
  
  });
  
  user.save((err,doc)=>{
  if(err) res.status(200).send(err)
  res.status(200).send(doc)
  })*/
    MongoClient.connect(url,(err,db)=>{
      db.collection('KulHavadurumuapp').insertOne({
        
        kulid:req.body.retrievednormid,
        sorgusehir:req.body.sorgusehir       
      },(err, res)=>{
        if(err){
          return console.log(`Cannot insert: ${err}`)
        }
        console.log(res.ops[req.body.id])
      })   
  db.close();
  
    })     
    console.log(req.body.password);
    console.log(req.body. retrievednormid);
    console.log(req.body.sorgusehir);
    //   var sql = "INSERT INTO kullanicilar (ad, soyad, sifre, statu) VALUES ('"+req.body.username+"', '"+req.body.surname+"','"+req.body.password+"', '"+req.body.statu+"')";
  });

  //arama geçmişi
  
//kullanicilari alma
app.get('/kullanicilarhava' , function(req,res,next){
  MongoClient.connect(url,(err,db)=>{
    const mydb= db.collection('KulHavadurumuapp').find().toArray().then(function(mydb){
    res.send(mydb);
    });    
     db.close();
   })
 });

  
  






//havadurumudegerip
/*app.post('/havadurumuapp/jkll#submit', (req, res) => { 
  MongoClient.connect(url,(err,db)=>{
    db.collection('Havadurumuappipp').insertOne({
      ipadress:req.body.ipadress          
    },(err, res)=>{
      if(err){
        return console.log(`Cannot insert: ${err}`)
      }
      console.log(res.ops[req.body.id])
    })*   
db.close();
  })     
  console.log(req.body.ipadress);
  //   var sql = "INSERT INTO kullanicilar (ad, soyad, sifre, statu) VALUES ('"+req.body.username+"', '"+req.body.surname+"','"+req.body.password+"', '"+req.body.statu+"')";
});*/


//kullanici ekleme
app.post('/kullanici', (req, res) => { 
      MongoClient.connect(url,(err,db)=>{
        db.collection('Kullanici').insertOne({

          username:req.body.username,         
          surname:req.body.surname,
          password:req.body.password,
          statu:req.body.statu,
          kullanicisehir:db.collection('Sehirkul').find().toArray().then(function(mydb){
            
            })
        },(err, res)=>{
          if(err){
            return console.log(`Cannot insert: ${err}`)
          }
          console.log(res.ops[req.body.id])
        }
        
        )
    db.close();
    
      })     
      console.log(req.body.username);
      console.log(req.body.surname);
      console.log(req.body.password);
      console.log(req.body.statu);
      //   var sql = "INSERT INTO kullanicilar (ad, soyad, sifre, statu) VALUES ('"+req.body.username+"', '"+req.body.surname+"','"+req.body.password+"', '"+req.body.statu+"')";
});
//sehir ekleme
app.post('/sehir', (req, res) => { 
  MongoClient.connect(url,(err,db)=>{
    db.collection('Sehir').insertOne({
      sehir:req.body.sehir             
    },(err, res)=>{
      if(err){
        return console.log(`Cannot insert: ${err}`)
      }
      console.log(res.ops[req.body.id])
    })

    MongoClient.connect(url,(err,db)=>{
      db.collection('Sehirkul').insertOne({
        sehir:req.body.sehir             
      },(err, res)=>{
        if(err){
          return console.log(`Cannot insert: ${err}`)
        }
        console.log(res.ops[req.body.id])
      })  
    })      
db.close();

  })     
  console.log(req.body.sehir);
  //   var sql = "INSERT INTO kullanicilar (ad, soyad, sifre, statu) VALUES ('"+req.body.username+"', '"+req.body.surname+"','"+req.body.password+"', '"+req.body.statu+"')";
});

//kullanicilari alma
app.get('/kullanicilar' , function(req,res,next){
  MongoClient.connect(url,(err,db)=>{
    const mydb= db.collection('Kullanici').find().toArray().then(function(mydb){
    res.send(mydb);
    });    
     db.close();
   })
 });

 //sehirleri alma
 app.get('/sehirler' , function(req,res,next){
  MongoClient.connect(url,(err,db)=>{
    const mydb= db.collection('Sehir').find().toArray().then(function(mydb){
    res.send(mydb);
    });    
     db.close();
   })
 });

//logini alma
app.get('/loginden' , function(req,res,next){
  MongoClient.connect(url,(err,db)=>{
    const mydb= db.collection('Havadurumuapp').find().toArray().then(function(mydb){
    res.send(mydb);
    });    
     db.close();
   })
 });



 //kullanicisilme
app.post('/kullanicim', (req, res) => {
  console.log(req.body.username);
  console.log(req.body.surname);
  console.log(req.body.password);
  console.log(req.body.statu);
  MongoClient.connect(url,(err,db)=>{
    if(req.body.username!='root'){
    db.collection('Kullanici').deleteOne({username:req.body.username},(err,doc) =>{
   console.log(doc)
    } )   
  }         
db.close();
  })   
});
 //sehirsilme
 app.post('/sehirim', (req, res) => {
  console.log(req.body.sehir);
  MongoClient.connect(url,(err,db)=>{
   
    db.collection('Sehir').deleteOne({sehir:req.body.sehir},(err,doc) =>{
   console.log(doc)
    } )   
           
db.close();
  })   
});

//kullaniciguncelleme
app.post('/kullanicigun', (req, res) => {
  console.log(req.body.username);
  console.log(req.body.surname);
  console.log(req.body.password);
  console.log(req.body.statu);
 MongoClient.connect(url,(err,db)=>{
    db.collection('Kullanici').findOneAndUpdate(
      
      {
        id:req.body.id
      },
      {
        $set:{username:req.body.username},
        $set:{surname:req.body.surname},
        $set:{password:req.body.password},
        $set:{statu:req.body.statu}
      },
      {
         returnOriginal:false
      },
      (err,doc)=>{
        console.log(doc)
      }
 

    )
  }) 

});



//kullaniciguncelleme
app.post('/sehirgun', (req, res) => {
  console.log(req.body.sehir);
 MongoClient.connect(url,(err,db)=>{
    db.collection('Sehir').findOneAndUpdate(
      
      {
        id:req.body.id
      },
      {
        $set:{username:req.body.sehir}
      },
      {
         returnOriginal:false
      },
      (err,doc)=>{
        console.log(doc)
      }
 

    )
  }) 

});


//otelapi
app.get('/Oteller' , function(req,res,next){
  MongoClient.connect(url,(err,db)=>{
    const mydb= db.collection('Oteller').find().toArray().then(function(mydb){
    res.send(mydb);
    });    
     db.close();
   })
 });

app.listen(port);
console.log('The server is running on port ' + port);