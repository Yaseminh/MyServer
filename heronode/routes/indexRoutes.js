//EXTRACT

 var express   = 	require ("express"),
     router     = 	express.Router ();               //Dosyaları exract ettirecek. İleride app.use ile kullanmamızı sağlayacak.


//ROUTER(ANA SAYFAYI DİNLEME)

router.get("/", (req,res) => {
       
    res.render('home');

});                                                 //Ana sayfayı(index.html) dinle.


//MODULE EXPORT

module.exports = router;                            //router i dışarıya atadık.Bu sayede buna içerden index.js den ulaşabileceğim.