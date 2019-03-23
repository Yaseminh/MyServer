/*const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port =process.env.port || 4545;
//const port ="https://sleepy-wildwood-36483.herokuapp.com";


const serverurl = 'http://192.168.2.20:135';*/

/*const mongoose= require('mongoose');


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/auth');

const {User} = require('./models/User');




const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/test';

const fs= require('fs');*/



//Mongo baglanti
/*MongoClient.connect(url,(err,db)=>{
if(err){
  console.log('could not connect');
}
console.log('connected !!!')
db.close();
}
  )*/

//var root="https://sleepy-wildwood-36483.herokuapp.com/favicon.ico";

/*app.use(express.favicon());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended:true
}));*/

//app.get("/deneme", (req, res) => res.send({hi:'there'}));

/*var d={
   title="merhaba"
}

$.post(root, d, function(data, status){

})*/

//loginkullanici
//app.post('/Havadurumuapp', (req, res) => { 

/*  const user= new User({
  username:req.body.username,
  password:eq.body.password

});

user.save((err,doc)=>{
if(err) res.status(200).send(err)
res.status(200).send(doc)
})*/
 /* MongoClient.connect(url,(err,db)=>{
    db.collection('Havadurumuapp').insertOne({
      username:req.body.username ,
           
    },(err, res)=>{
      if(err){
        return console.log(`Cannot insert: ${err}`)
      }
      console.log(res.ops[req.body.id])
    })   
db.close();

  }) */    
 // console.log(req.body.username);

  //   var sql = "INSERT INTO kullanicilar (ad, soyad, sifre, statu) VALUES ('"+req.body.username+"', '"+req.body.surname+"','"+req.body.password+"', '"+req.body.statu+"')";
//});

//kulhavadurum
//app.post('/KulHavadurumuapp', (req, res) => { 

  /*  const user= new User({
    username:req.body.username,
    password:eq.body.password
  
  });
  
  user.save((err,doc)=>{
  if(err) res.status(200).send(err)
  res.status(200).send(doc)
  })*/
  /*  MongoClient.connect(url,(err,db)=>{
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
  });*/

  //arama geçmişi
  
//kullanicilari alma
/*app.get('/kullanicilarhava' , function(req,res,next){
  MongoClient.connect(url,(err,db)=>{
    const mydb= db.collection('KulHavadurumuapp').find().toArray().then(function(mydb){
    res.send(mydb);
    });    
     db.close();
   })
 });*/

  
  






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
/*app.post('/kullanici', (req, res) => { 
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
});*/


 //eklenensehirler
 /*app.get('/eklenensehirler' , function(req,res,next){
  MongoClient.connect(url,(err,db)=>{
    const mydb= db.collection('Sehir').find().toArray().then(function(mydb){
    res.send(mydb);
    });    
     db.close();
   })
 });*/


//app.post('/sehir', (req, res) => { 



  /*MongoClient.connect(url,(err,db)=>{

   
    db.collection('Sehir').insertOne({
      sehir:req.body.sehir,
      idkul:req.body.retrievedadmin
    },(err, res)=>{
      if(err){
        return console.log(`Cannot insert: ${err}`)
      }
      console.log(res.ops[req.body.id])
    })
  
    MongoClient.connect(url,(err,db)=>{
      db.collection('Sehirkul').insertOne({
       
        sehir:req.body.sehir,
        idkul:req.body.retrievedadmin      
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
  console.log(req.body.retrievedadmin);
  //   var sql = "INSERT INTO kullanicilar (ad, soyad, sifre, statu) VALUES ('"+req.body.username+"', '"+req.body.surname+"','"+req.body.password+"', '"+req.body.statu+"')";
  
});*/



//kullanıcı ekleme
/*app.post('/userekleme', (req, res) => { 
  MongoClient.connect(url,(err,db)=>{
    db.collection('userekleme').insertOne({
      id:req.body.id,   
      name:req.body.name,
      username:req.body.username  
    },(err, res)=>{
      if(err){
       // return console.log(`Cannot insert: ${err}`)
      }
      
    })
   
db.close();

  })     
  console.log(req.body.id);
  console.log(req.body.name);
  console.log(req.body.username);
  //   var sql = "INSERT INTO kullanicilar (ad, soyad, sifre, statu) VALUES ('"+req.body.username+"', '"+req.body.surname+"','"+req.body.password+"', '"+req.body.statu+"')";
});*/

//silinecekler
//eklenenurunler
/*app.post('/gondersilinecekurun', (req, res) => { 
   
  console.log(req.body.productsil);

 /* productekleme.findOneAndRemove({id:req.body.productsil},(err,doc)=>{
if(err) return console.log(err);
console.log(doc)
  })*/

 /* MongoClient.connect(url,(err,db)=>{
   
    db.collection('productekleme').deleteOne({id:req.body.productsil},(err,doc) =>{
   console.log(doc)
    } )   
           
db.close();
  })   


  //   var sql = "INSERT INTO kullanicilar (ad, soyad, sifre, statu) VALUES ('"+req.body.username+"', '"+req.body.surname+"','"+req.body.password+"', '"+req.body.statu+"')";
});




//eklenenurunler
app.post('/gondereklenenurun', (req, res) => { 
  MongoClient.connect(url,(err,db)=>{
    db.collection('productekleme').insertOne({
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      category_id:req.body.category_id

    },(err, res)=>{
      if(err){
       // return console.log(`Cannot insert: ${err}`)
      }
      
    })
   
db.close();

  })     
  console.log(req.body.name);
  console.log(req.body.description);
  console.log(req.body.price);
  console.log(req.body.category_id);
  //   var sql = "INSERT INTO kullanicilar (ad, soyad, sifre, statu) VALUES ('"+req.body.username+"', '"+req.body.surname+"','"+req.body.password+"', '"+req.body.statu+"')";
});




 //kullanicisilme
 app.post('/usersilme', (req, res) => {
  console.log(req.body.id);
  
 userekleme.findOneAndRemove(req.body.id, (err,doc)=>{
   if(err) return console.log(err);
   console.log(doc);
 })
});


//eklene kullanıcıları alma
//kullanicilari alma
app.get('/ekliurunler' , function(req,res,next){
  MongoClient.connect(url,(err,db)=>{
    const mydb= db.collection('productekleme').find().toArray().then(function(mydb){
    res.send(mydb);
    });    
     db.close();
   })
 });

 /*app.get('/csv_dosya' , function(req,res,next){
  MongoClient.connect(url,(err,db)=>{
    const mydb= db.collection('productekleme').find().toArray().then(function(mydb){
    res.send(mydb);
    });    
     db.close();
   })
 });*/

 









 /*const csv = require('csv');

var stream = fs.createReadStream("deneme.csv");

 var csvStream = csv
 .parse()
 .on("data", function(data){


     console.log(data);
     
 })
 .on("end", function(){
      console.log("done");
 });

stream.pipe(csvStream);*/




//csv dosya okuma ve localhost portta değerleri tutma

/*var csv = require('fast-csv');
fs.createReadStream("deneme.csv")
.pipe(csv())
.on('data', function(data){
  console.log(data);
  //http://localhost:4545/csvfiles 'e gönderme
app.get('/csvfiles' , function(req,res,next){
 
  res.send(data);
 
});
})
.on('end', function(data){
  console.log('Read finished');
});






 
 
 
 





 //kullanicilari alma
app.get('/product' , function(req,res,next){
  MongoClient.connect(url,(err,db)=>{
    const mydb= db.collection('product').find().toArray().then(function(mydb){
    res.send(mydb);
    });    
     db.close();
   })
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
app.post('/userguncelleme', (req, res) => {
  console.log(req.body.id);
  console.log(req.body.name);
  console.log(req.body.username);
  console.log(db.getCollection('userekleme').find({}))
/*userekleme.findOneAndUpdate(
  {id:req.body.id},
  {$set:{name:req.body.name}},
  {$set:{username:req.body.username}}
)*/

//});

/*app.get('/greeting', (req,res)=>{
res.send({hi:'there'});
});*/

/*app.listen(port);
console.log('The server is running on port ' + port);*/




