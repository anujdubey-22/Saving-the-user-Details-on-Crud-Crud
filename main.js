//var userslist = document.getElementById('users');

//userslist.addEventListener('click',onClick);

window.addEventListener('DOMContentLoaded',()=>{
    
    axios.get('https://crudcrud.com/api/27a0f9917c6448f186dd555a7373a69e/appointments')
    .then( (res)=>{
        for(var i=0;i<res.data.length;i++){
            ShowUsers(res.data[i].name, res.data[i].email, res.data[i].phone, res.data[i]._id)    
        }
    })
    .catch(err => console.log(err))
})


function ShowUsers(name,email,phone,id){
    console.log(name,email,phone,id)
    var obj={
        name:name,
        email:email,
        phone:phone

    };
    var users=document.getElementById('users');

    var li = document.createElement('li');
    var btn = document.createElement('button');
    var edit = document.createElement('button');

    btn.id='button';
    btn.appendChild(document.createTextNode('Delete'));
    edit.appendChild(document.createTextNode('Edit'));

    

    li.appendChild(document.createTextNode(`${name} - ${email} - ${phone}`));
    li.appendChild(btn)
    li.appendChild(edit)
    users.appendChild(li)
    //console.log(li)

    var objString=JSON.stringify(obj);

    localStorage.setItem(email,objString);
    


    btn.addEventListener('click',clicked);

    function clicked(e){
        console.log('hi',obj,e.target)
        var li = e.target.parentElement;
        users.removeChild(li);
        
        localStorage.removeItem(obj.email);


        axios.delete(`https://crudcrud.com/api/27a0f9917c6448f186dd555a7373a69e/appointments/${id}`)
        .then((res) => {
            console.log(res)
            console.log('Users detail deleted succesfully')
        })
        .catch(err=>{console.log(err)})

    }


    edit.addEventListener('click',edited);

    function edited(e){
        console.log('hi',obj,e)
        var li = e.target.parentElement;
        //console.log(li)
        users.removeChild(li);
        
        localStorage.removeItem(obj.email);

        document.getElementById('name').value=obj.name
        document.getElementById('email').value=obj.email
        document.getElementById('phone').value=obj.phone
        
        //console.log(name)
        axios.delete(`https://crudcrud.com/api/27a0f9917c6448f186dd555a7373a69e/appointments/${id}`)
        .then((res) => {
            console.log(res)
            console.log('Users detail deleted succesfully')
        })
        .catch(err=>{console.log(err)})



        

    }

}




function savetolocalstorage(event){
    event.preventDefault();
    //console.log('id',id)
    //console.log(event.target[0].value);
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    console.log(name)


    // now we will only add li to users only when post request is successfull else error message will shown up.
    //users.appendChild(li)
    


    //axios POST request
    axios.post('https://crudcrud.com/api/27a0f9917c6448f186dd555a7373a69e/appointments',
    {name:name,
     email:email,
     phone:phone
    }
    ).then((res) =>{
        console.log(res.data)
        console.log('sab sahi vhal raha hai hiihihihih')
        ShowUsers(name,email,phone,res.data._id)
    })
    .catch(err=>
        // document.body.innerHTML= document.body.innerHTML+ '<h1> 404 NOT FOUND <h1>')
        console.log(err))

    }





// function onClick(e){
//     //console.log('clicked')
//     var li =e.target.parentElement;
//     console.log(e.value,li)
//     console.log(ojb.email)
//     if(e.target.id==='button'){
//         var li =e.target.parentElement;
//         users.removeChild(li);
//     };


// }











// function create3rdPost(callback) {
//     setTimeout( () => {
//         console.log('Post Three')
//         //If callback function is passed call it
//         console.log(callback())
//         if(callback){
//             callback();
//         }
//     }, 3000)
// }

// //Please modify this function too to reach the desired output
// function create4thPost(create5thPost) {
//     setTimeout( () => {
//         console.log('Post Four')
//         create5thPost()
//     }, 2000);
// }

// // Do not touch this function at all
// function create5thPost() {
//     setTimeout( () => {
//         console.log('Post Five')
//     }, 1000);
// }

// //You have to  modify the syntax below to reach the desired output

// //create4thPost()
// //create5thPost()

// create3rdPost(function () {
// create4thPost(create5thPost)
// })







// let posts=[{title:'Post1'},{title:'Post2'}]

// const print = new Promise((res,rej)=>{
//     setTimeout(() => {
//         posts.forEach(function (ele){
//             console.log(ele)
//         })
//     res()
//     }, 3000);
// });

// let func = async function(post){

//     let createPost=new Promise((res,rej)=>{
//         setTimeout(() => {
//             posts.push('tiil')
//         res()
//         }, 0);
//     })

//     let dle = new Promise((res,rej)=>{
//         setTimeout(() => {
//             posts.pop()
//             res()
//         }, 0);
//     })
    
//     const val = await createPost;
//     console.log(posts)
//     // console.log('hello')
//     const printing= await print
    
//     const deleted = await dle
//     // console.log('hello2')
//      console.log(posts)
//     const printting= await print
    
//     return 'thankyou'
// }


// func({title:'post3'}).then((msg)=>{console.log(msg)})

//console.log(posts)