function sendMail()
{
  var email = document.getElementById("email").value;
  var link = "mailto:gokulakannan1151@gmail.com"+
             "?cc=gokulakannan1151@outlook.com"+
             "&subject=" + escape("Mail from github page")+
             "&body=" + escape("The sender of the mail is "+email);
  window.location.href = link;
}