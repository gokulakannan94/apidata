function sendMail()
{
  var email = document.getElementById("email").value;
  var link = "mailto:gokulakannan1151@gmail.com"+
             "?cc=CCaddress@example.com"+
             "&subject=" + escape("Mail from github page")+
             "&body=" + escape("The sender of the mail is "+email);
  window.location.href = link;
}