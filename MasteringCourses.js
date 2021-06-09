$('.btn').click(function() {
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
});




$('.feat-btn').click(function() {
  $('nav ul .feat-show').toggleClass("show");
  $('nav ul .first').toggleClass("rotate");
});




$('.serv-btn').click(function() {
  $('nav ul .serv-show').toggleClass("show1");
  $('nav ul .second').toggleClass("rotate");
});




$('.course-btn').click(function() {
  $('nav ul .course-show').toggleClass("show2");
  $('nav ul .third').toggleClass("rotate");
});




$('.office-btn').click(function() {
  $('nav ul ul .office-show').toggleClass("show3");
  $('nav ul ul .fourth').toggleClass("rotate");
});


$('.graphic-btn').click(function() {
  $('nav ul ul .graphic-show').toggleClass("show4");
  $('nav ul ul .fifth').toggleClass("rotate");
});


$('.web-btn').click(function() {
  $('nav ul ul .web-show').toggleClass("show5");
  $('nav ul ul .sixth').toggleClass("rotate");
});




$('nav ul li').click(function() {
  $(this).addClass("active").siblings().removeClass("active");
});










// Subscribe Box E-mail validation

function validate_email(field,alerttxt)
{
with (field)
  {
  apos=value.indexOf("@");
  dotpos=value.lastIndexOf(".");
  if (apos<1||dotpos-apos<2)
    {alert(alerttxt);return false;}
  else {return true;}
  }
}

function validate_form(thisform)
{
with (thisform)
  {
  if (validate_email(email,"Not a valid e-mail address!")==false)
    {email.focus();return false;}
  }
}