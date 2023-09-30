function savetolocalstorage(event){
    event.preventDefault();
    //console.log('hi')
    //console.log(event.target[0].value);
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    console.log(name)

    var obj={
        name:name,
        email:email,
        phone:phone

    };

    var users=document.getElementById('users');

    var li = document.createElement('li')

    li.appendChild(document.createTextNode(`${name}-${email}-${phone}`));
    users.appendChild(li)
    console.log(li)

    var objString=JSON.stringify(obj);

    localStorage.setItem(email,objString);

}