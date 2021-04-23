/* main js file */

/* get necessary elements */
var lamp1 = document.getElementById('lamp1');
var lamp2 = document.getElementById('lamp2');
var lamp3 = document.getElementById('lamp3');
var left = document.getElementById("left");
var mid = document.getElementById("mid");
var right = document.getElementById("right");
var container = document.getElementById("container");
var MenuCollapsHeader = document.getElementById("collapse-menu");
var MenuCollapsButtHeader = document.getElementById("collapse-but-header");
var dragUpMenu = document.getElementById("drag-up-menu");
let HomeHeader = document.getElementById("home_header");



/* light up function: lightning 3 images on click */
function lightshadow(int,ver) {
  var light = document.getElementById("light" + int);
  if(ver === 0){

    light.style.filter = "none";
  }else{


    light.style.filter = "drop-shadow(2px 8px 28px #d6b247)";
  }
}

lamp1.addEventListener("click",function(){

  var light = document.getElementById("light1");

  if($("#light1").css("filter") === "drop-shadow(rgb(214, 178, 71) 2px 8px 28px)"){
    lightshadow(1,0);
  }else{
    lightshadow(1,1);
  }
});

lamp2.addEventListener("click",function(){

  var light = document.getElementById("light2");

  if($("#light2").css("filter") === "drop-shadow(rgb(214, 178, 71) 2px 8px 28px)"){
    lightshadow(2,0);
  }else{
    lightshadow(2,1);
  }
});

lamp3.addEventListener("click",function(){

  var light = document.getElementById("light3");

  if($("#light3").css("filter") === "drop-shadow(rgb(214, 178, 71) 2px 8px 28px)"){
    lightshadow(3,0);
  }else{
    lightshadow(3,1);
  }

});




/* slick library for slider */
$('.slider_left').slick({
  infinite: false,
  dots: true,
  dotsClass: 'slick-dots',
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  arrows:false,
  rtl: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});



/* menu collaps header class for smal sizes */
class MenuCollapse{

  /* initial setting */
  preset(){
    if(screen.width > 767 && screen.width < 991) {

      let int = 30;
      return  int;
    }else  if(screen.width > 568 && screen.width < 768) {

      let int = 50;
      return  int;

    }else{
      let int = 70;
      return  int;
    }
  }

  /* reset setting to initial for bigger sizes */
  reset(MenuCollapsHeader){

    $("#close-collapse-header").hide();

    document.getElementById("collapse-header").appendChild(document.getElementById("collapse-header-row"));

    MenuCollapsHeader.style.width = "0";
    MenuCollapsHeader.style.display = "none";

    $("#home_header").css({"width":"100%","box-shadow":"rgb(90 87 87) 3px 4px 8px 0px, rgb(205 205 205 / 46%) -5px -2px 9px 6px","display":"block"});
    $("#product_header").css({"width":"100%","box-shadow":"rgb(90 87 87) 3px 4px 8px 0px, rgb(205 205 205 / 46%) -5px -2px 9px 6px","display":"block"});
    $("#contact_header").css({"width":"100%","box-shadow":"rgb(90 87 87) 3px 4px 8px 0px, rgb(205 205 205 / 46%) -5px -2px 9px 6px","display":"block"});
    $("#about_header").css({"width":"100%","box-shadow":"rgb(90 87 87) 3px 4px 8px 0px, rgb(205 205 205 / 46%) -5px -2px 9px 6px","display":"block"});

  }

  /* menu collapse header function: open and close menu */
  menucollapse(MenuCollapsButtHeader,MenuCollapsHeader){

    /* close menu on click  */
    document.getElementById("close-collapse-header").addEventListener("click", function () {

      $(MenuCollapsHeader).animate({width: "0"}, 1000, function () {

        $("#home_header").css("width", "0");
        $("#home_link_header").css("width", "0");
        $("#home_header").hide();
        $("#product_header").css("width", "0");
        $("#product_link_header").css("width", "0");
        $("#product_header").hide();
        $("#contact_header").css("width", "0");
        $("#contact_link_header").css("width", "0");
        $("#contact_header").hide();
        $("#about_header").css("width", "0");
        $("#about_header").hide();
        $("#about_link_header").css("width", "0");

        $("#close-collapse-header").hide();



      });


    });

    /* open menu on click */
    MenuCollapsButtHeader.addEventListener("click", function () {

      if(MenuCollapsHeader.clientWidth === 0){
        $("#home_header").show();
        $("#home_header").css("box-shadow", "4px 6px 4px 2px rgb(0 0 0 / 25%), 0px 0px 7px 1px rgb(255 255 255 / 30%)");
        $("#home_header").css("width", "100px");
        $("#home_link_header").css("width", "100px");
        $("#home_link_header").show();
        $("#product_header").show();
        $("#product_header").css("box-shadow", "4px 6px 4px 2px rgb(0 0 0 / 25%), 0px 0px 7px 1px rgb(255 255 255 / 30%)");
        $("#product_header").css("width", "200px");
        $("#product_link_header").css("width", "200px");
        $("#product_link_header").show();
        $("#contact_header").show();
        $("#contact_header").css("box-shadow", "4px 6px 4px 2px rgb(0 0 0 / 25%), 0px 0px 7px 1px rgb(255 255 255 / 30%)");
        $("#contact_header").css("width", "200px");
        $("#contact_link_header").css("width", "200px");
        $("#contact_link_header").show();
        $("#about_header").show();
        $("#about_header").css("box-shadow", "4px 6px 4px 2px rgb(0 0 0 / 25%), 0px 0px 7px 1px rgb(255 255 255 / 30%)");
        $("#about_header").css("width", "200px");
        $("#about_link_header").css("width", "200px");
        $("#about_link_header").show();

        $("#close-collapse-header").show();

        $(MenuCollapsHeader).css("display", "block");
        MenuCollapsHeader.appendChild(document.getElementById("collapse-header-row"));

        MenuCollapsHeader.style.height = document.getElementById("container").clientHeight + "px";


        $(MenuCollapsHeader).animate({width: MenuHeader.preset() + "%"}, 1000);


      }


    });


  }

}

/* creating object from class MenuCollapse */
let MenuHeader = new MenuCollapse();
MenuHeader.menucollapse(MenuCollapsButtHeader,MenuCollapsHeader);


/* function for getting classes drag up and drag down */
function Clssnames(draU,draD){

  this.draU = draU;
  this.draD = draD;

}

let clssn = new Clssnames(document.querySelectorAll(".draU"),document.querySelectorAll(".draD"));


/* looping all classes, if click on any, trigger drag up or drag down functions  */
for(let x=0; x < 3; x++){

  clssn.draU[x].addEventListener("click",function (event) {


    let purch = document.getElementById("purchase-" + x);


    drag.dragUpMenus(purch,x);

  });
  clssn.draD[x].addEventListener("click",function (event) {

    let purch = document.getElementById("purchase-" + x);

    drag.dragUpMenus(purch,x);

  });

}



class dragUpMenuC {

  preset(int,h){

    function Clssnamespur(clssall){

      this.selall = clssall;

    }

    /* getting all class names of purchase */
    let clssnpur = new Clssnamespur(document.querySelectorAll(".pur"));

    /* looping class names  */
    for(let x=0; x < 3; x++) {

      let purch = clssnpur.selall[x];



      /* check if any is not zero height === give height to them  */
      purch.style.bottom = (document.getElementById("drag-up-menu").clientHeight + int) + "px";
      if (Math.round(purch.clientHeight) !== 0) {

        purch.style.height = h + "%";

      }

    }

  }

  /* function for show drag up menu  */
  dragUpMenus(purch,int) {

    if (Math.round(purch.clientHeight) === 0) {


      document.getElementById("drag-up-icon-" + int).style.display = "none";
      document.getElementById("drag-down-icon-" + int).style.display = "block";
      $(purch).animate({height: 80 + "%"},1000);


      $("#product_" + int + "_title").css("display","block");
      $("#product_" +int + "_price").css("display","block");
      $("#product_" + int + "_caption").css("display","block");
      $("#product_" +  int + "_order_butt").css("display","block");
      $("#card_header_product-" + int ).css("display","block");
      $("#card_body_product-" + int).css("display","block");

    } else {

      document.getElementById("drag-up-icon-" + int).style.display = "block";
      document.getElementById("drag-down-icon-" + int).style.display = "none";
      $(purch).animate({height: "0%"} , 1000);

      $("#card_header_product-" + int ).slideToggle(1000);
      $("#card_body_product-" + int).slideToggle(1000);
      $("#product_" + int + "_title").slideToggle(1000);
      $("#product_" +int + "_price").slideToggle(1000);
      $("#product_" + int + "_caption").slideToggle(1000);
      $("#product_" +  int + "_order_butt").slideToggle(1000);




    }


  }
}

/*  creating object from dragUpMenuC class */
let drag = new dragUpMenuC();


/* a function for responsiving website on resize */
function  ResponsiveBlocks(block_container,block_left,block_mid,block_right,MenuCollapsButtHeader,MenuCollapsHeader) {

  /* xl sizing */
  if(screen.width > 1400 && screen.width < 10000){

    block_left.style.height = "auto";
    block_mid.style.height = "auto";
    block_right.style.height = "auto";


    drag.preset(20,80);



    MenuHeader.reset(MenuCollapsHeader);


    /* lg sizing */
  }else if(screen.width > 991 && screen.width < 1401) {


    block_left.style.height = "auto";
    block_mid.style.height = "auto";
    block_right.style.height = "auto";


    drag.preset(20,80);



    MenuHeader.reset(MenuCollapsHeader);




    /* md sizing */
  }else if(screen.width > 767 && screen.width < 991) {

    block_container.style.marginTop = "0px";
    block_left.style.height = (screen.width + (screen.width / 3) ) + "px";
    block_left.style.borderRadius = "22px";
    block_left.style.marginBottom = "30px";

    block_mid.style.height = (screen.width + (screen.width / 3))+ "px";
    block_mid.style.borderRadius = "22px";
    block_mid.style.marginBottom = "30px";

    block_right.style.height = (screen.width + (screen.width / 3))+ "px";
    block_right.style.borderRadius = "22px";
    block_right.style.marginBottom = "30px";


    drag.preset(40,80);




    /* sm sizing */
  }
  else if(screen.width > 568 && screen.width < 767) {

    block_container.style.marginTop = "0px";
    block_left.style.height = (screen.width + (screen.width / 2) ) + "px";
    block_left.style.borderRadius = "22px";
    block_left.style.marginBottom = "30px";

    block_mid.style.height = (screen.width + (screen.width / 2))+ "px";
    block_mid.style.borderRadius = "22px";
    block_mid.style.marginBottom = "30px";

    block_right.style.height = (screen.width + (screen.width / 2))+ "px";
    block_right.style.borderRadius = "22px";
    block_right.style.marginBottom = "30px";


    drag.preset(20,80);



  }
  else{
    block_container.style.marginTop = "0px";
    block_left.style.height = (screen.width + (screen.width / 2) ) + "px";
    block_left.style.borderRadius = "22px";
    block_left.style.marginBottom = "30px";

    block_mid.style.height = (screen.width + (screen.width / 2))+ "px";
    block_mid.style.borderRadius = "22px";
    block_mid.style.marginBottom = "30px";

    block_right.style.height = (screen.width + (screen.width / 2))+ "px";
    block_right.style.borderRadius = "22px";
    block_right.style.marginBottom = "30px";


    drag.preset(20,80);



  }


}



/* function for resize */
ResponsiveBlocks(container,left,mid,right,MenuCollapsButtHeader,MenuCollapsHeader);

/* resize event */
$(window).resize(function () {

  /* function for resize on resize event */
  ResponsiveBlocks(container,left,mid,right,MenuCollapsButtHeader,MenuCollapsHeader);

});





