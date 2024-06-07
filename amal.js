
function validateName(){
    let x=document.getElementById("form1");
    let name=document.getElementById("names");
    var email=document.getElementById("emails")
    var subject = document.getElementById("subjects");
    var message=document.getElementById("messages");
    if(name.value == ''){
      alert("plaease enter a username!!");
      document.form1.name.focus();
      return false;
    }
    if(email.value == ''){
      alert("plaease enter E-mail Address!!");
      document.form1.email.focus();
      return false;
    }
    if(subject.value==''){
      alert("plaease enter Subject!!");
      document.form1.subject.focus();
    }
    if(message.value==''){
      alert("plaease enter Message!!");
      document.form1.message.focus();
      
    }
  }
  