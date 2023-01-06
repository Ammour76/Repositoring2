alert('toto')

var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom')
// var button = document.getElementById('button');

var prnm = document.getElementById('exampleInputprenom1');
var nm = document.getElementById('exampleInputnom1');
var iscp = document.getElementById('iscp');

// var error_nom = document.getElementById('error_nom');
console.log('prnm')

iscp.addEventListener('click', function(event){
    event.preventDefault();
    alert('hello')

    if(nom.value == "")
    {
        nom.innerHTML = "champ vide !!!!!!!!!!";
        
    }else{
        nom.innerHTML = "correct"
    }

    // else if(nom.value.length < 5)
    // {
    //     console.log("Le nom doit contenir au minimum 5 caractères !!!!");
    // }
    // else{
    //     console.log('tout est ok !')
    // }
});


var prenom = document.getElementById('prenom')


var error_prenom = documeny.getElementById('error_prenom');