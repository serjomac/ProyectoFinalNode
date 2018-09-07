var imagenActual ;


$("#imagenes > div:gt(0)").hide();

$("#siguiente").click(function(){
  
    $("#imagenes > div:first")
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo("#imagenes");
    
});

$("#atras").click(function(){
    $("#imagenes > div:gt(0)")
    .fadeIn(0)
    .prev()
    .fadeOut(0)
    .appendTo("#imagenes");
}); 