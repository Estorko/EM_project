function getTitle(name)
{
    var title = document.getElementById(name).title;
    var html = document.getElementById(name).innerHTML;
    console.log("Title: " + title);
    console.log("HTML: " + html);
}
function addImage(Card,link)
{
    var doc=document.getElementById(Card);
    var img=document.createElement("img");
    img.src=link;
    img.style.height='300px';
    img.style.width='400px';
    img.style.borderRadius='16px'
    doc.appendChild(img);
}
function openNav() 
{
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("flex_1").style.paddingLeft = "64px";
}
function closeNav() 
{
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("flex_1").style.paddingLeft= "0";
}
function showBtn()
{
    let mybutton = document.getElementById("myBtn");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() 
    {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) 
        {
            mybutton.style.display = "block";
        } else 
        {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() 
    {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    }
    topFunction();
    scrollFunction();
}  
addImage('Card_1',"https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/reactquestions.png");
addImage('Card_2',"https://crl2020.imgix.net/img/sql-fundamentals.png?auto=format,compress&q=60&w=1185");
addImage('Card_3',"https://res.cloudinary.com/practicaldev/image/fetch/s--xt1jMHoh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/unwqie2g73nlewbasmst.png");
addImage('Card_4',"https://camo.githubusercontent.com/4fa5b5fd24531c0d5b8d64aafbfdd256a940379977c4004de6546837cf19fcaf/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f746f74616c2d747970657363726970742f696d6167652f75706c6f61642f76313636323634313439332f626567696e6e6572732d747970657363726970742d7475746f7269616c2f6769746875625f32785f7678716169392e706e67");
addImage('Card_5',"https://cdn.mos.cms.futurecdn.net/bkB6t4BgjWa2L3gHtTUadg-970-80.jpg.webp");
addImage('Card_6',"https://blog.openreplay.com/static/2d0a8600979a296b6ca87c3c9d8c8111/99fbb/hero.webp");
addImage('Card_7',"https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/0d3065571d4960384fcc99cd06b5fa24");
addImage('Card_8',"https://miro.medium.com/max/700/1*v_6Oq56glS1mfEIVVMrTiw.jpeg");
addImage('Card_9',"https://cdn.80.lv/api/upload/content/49/images/63219ab627926/widen_920x0.jpg");
showBtn();


