setTimeout(function () {
    $("div#animate").removeClass("hide").addClass("show");
}, 1000);

document.getElementById('kmore').onclick = function () {
	$("div#intro").addClass("fadeaway");
	$("body").removeClass("bodybg");
	setTimeout(function () {document.getElementById('intro').style.display = "none"; }, 1800);
	setTimeout(function () {document.getElementById('mainbod').style.display = "block"; }, 3000);
};
$(window).scroll(function() {
if ($(this).scrollTop() > 100){  
    $('#mainheader').addClass("scrhead");
  }
  else{
    $('#mainheader').removeClass("scrhead");
  }
});