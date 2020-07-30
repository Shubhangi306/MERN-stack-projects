/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/
document.getElementById('labelname1').innerHTML = 'Username :';
document.getElementById('labelname2').innerHTML = 'Password :';
document.getElementById('labelname3').innerHTML = 'Confirm Password :';


/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/function UsernameEmpty(){
  if(document.getElementById('username').value===""){
    document.getElementById('error1').innerHTML ="Enter username";
    document.getElementById('username').style.borderColor='red';
    document.getElementById('registerButton').disabled = true;
  }
  if ((document.getElementById('username').value!=="" &&( document.getElementById('username').value.length <8)||document.getElementById('username').value.length >30)){
    document.getElementById('error1').innerHTML ="Username should have 8 t0 30 characters ";
    document.getElementById('username').style.borderColor='red';
    document.getElementById('registerButton').disabled = true;

  }
}

function PasswordEmpty(){
  if(document.getElementById('password').value===""){
    document.getElementById('error2').innerHTML ="Enter password";
    document.getElementById('password').style.borderColor='red';
    document.getElementById('registerButton').disabled = true;
  }
 if(document.getElementById('password').value!== ""){
    if((document.getElementById('password').value.length<8 || document.getElementById('password').value.length>20)){
      document.getElementById('error2').innerHTML ="Password length should be between 8 to 20 characters";
      document.getElementById('password').style.borderColor='red';
      document.getElementById('registerButton').disabled = true;
    }}
    if(document.getElementById('password').value!== ""){
      if((document.getElementById('password').value.length>=8 && document.getElementById('password').value.length<20)){
        document.getElementById('error2').innerHTML ="";
        document.getElementById('password').style.borderColor='inherit';
      }}
}

function UsernameNotEmpty(){
  if(document.getElementById('username').value!==null){
    document.getElementById('error1').innerHTML ="";
    document.getElementById('username').style.borderColor='inherit';
  }
}
function PasswordNotEmpty(){
  if(document.getElementById('password').value!==null){
    document.getElementById('error2').innerHTML ="";
    document.getElementById('password').style.borderColor='inherit';
  }
}

function ConPwdNotEmpty(){
  if(document.getElementById('confirmPassword').value!==null){
    document.getElementById('error3').innerHTML ="";
    document.getElementById('confirmPassword').style.borderColor='inherit';
  }
}

/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/
function PwdConPwdMatch(){
  if(document.getElementById('password').value!==""){
    if ((document.getElementById('confirmPassword').value)===""){
      document.getElementById('error3').innerHTML ="This field is empty";
      document.getElementById('confirmPassword').style.borderColor='red';
  }}

  if(document.getElementById('confirmPassword').value!==""){
    if ((document.getElementById('password').value)!==(document.getElementById('confirmPassword').value)){
      document.getElementById('error3').innerHTML ="Passwords Do not Match!!";
      document.getElementById('confirmPassword').style.borderColor='red';
    }
}
   if(document.getElementById('confirmPassword').value!==""){
    if ((document.getElementById('password').value)===(document.getElementById('confirmPassword').value)){
        document.getElementById('error3').innerHTML ="";
         document.getElementById('confirmPassword').style.borderColor='inherit';
        }
}
 
}

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/
document.getElementById('registerButton').disabled = true;
function checkform(){
      if ((document.getElementById('password').value)===(document.getElementById('confirmPassword').value)){
        if((document.getElementById('confirmPassword').value)!=="" && (document.getElementById('password').value)!==""){
            if((document.getElementById('password').value.length>=8 && document.getElementById('password').value.length<20)){
              if (document.getElementById('username').value!=="" ){
                if(document.getElementById('username').value.length >=8 && document.getElementById('username').value.length <30){
                    document.getElementById('registerButton').disabled = false;
                }
              }
           }
          }
        }
        if (document.getElementById('username').value!=="" ){
          if(document.getElementById('username').value.length <8 || document.getElementById('username').value.length >30){
            document.getElementById('error1').innerHTML ="Username should have 8 t0 30 characters ";
            document.getElementById('username').style.borderColor='red';
            document.getElementById('registerButton').disabled = true;
          }}
        
       
      else{
        document.getElementById('registerButton').disabled = true;
      }
}


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
function  onSubmit() {
  alert("Registration Successful!!");
  event.preventDefault();
  document.getElementById('Msg').innerHTML="Registration Successfull!!";
  document.getElementById('Msg').style.color="green";

}