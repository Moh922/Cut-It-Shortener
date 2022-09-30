const register = document.getElementById("myform")
const onsumbmit = document.querySelector('.send')


console.log(register)
const handleSubmission = async(e) => {
  console.log(e)
    e.preventDefault();
    var userName =document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    typeof(password)

    console.log (typeof(userName))
    console.log(typeof(password))
    console.log(typeof(email))

    await fetch ('https://url-shortener-bc.herokuapp.com/api/v1/users/signup', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            userName: userName,
            email: email,
            password:password,
        }), 
    })
     .then((res) => {
      console.log(res)
        return res.json();
    
    })
    .then((data) =>{
      if (data != null ){
        window.location.href = '/pages/login.html'
      }
      console.log(data);
    })
    //.catch((err) => console.log(err));
}

onsumbmit.addEventListener('click', handleSubmission)