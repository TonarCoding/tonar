let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let catargoy = document.getElementById('catargoy');
let sumbit = document.getElementById('sumbit');

let mood = 'create';
let tmp;

function gettotal(){
    if(price.value != ''){
        let reuslt = (+price.value + +taxes.value + +ads.value) - discount.value;
        total.innerHTML = reuslt;
        total.style.background ='green'
    }
    else{
        total.style.background = '#f10';
    }
}
// create project

let datapro;
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product);
}

else{
    datapro = [];
}


sumbit.onclick = function(){
    let newpro = {
        title: title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        catargoy:catargoy.value.toLowerCase(),
    }
    if(mood === 'create' && newpro.title !='' && newpro.price != '' && newpro.catargoy !=''){
        if(newpro.count > 1){
            for(let i = 0; i < newpro.count; i++){
                datapro.push(newpro)
            }
        }else{
            datapro.push(newpro)
        }
        cleardata();
    }
    else{
        datapro[tmp] = newpro;
        mood = 'create';
        sumbit.innerHTML = 'Create';
        count.style.display = 'block';
    }

    localStorage.setItem('product', JSON.stringify(datapro))

    showdata();
}
//clear inputs

function cleardata(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value ='';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    catargoy.value = '';
}

//read

function showdata(){
    gettotal();
    let table = '';
    for(let i = 0; i < datapro.length; i++){
        table += '<tr><td>'+ JSON.parse(i+1) +'</td> <td>'+ datapro[i].title +'</td><td>'+ datapro[i].price +'</td><td>'+ datapro[i].taxes +'</td><td>'+ datapro[i].ads +'</td><td>'+ datapro[i].discount +'</td><td>'+ datapro[i].total +'</td><td>'+ datapro[i].catargoy +'</td><td><button id="update" onclick= "upatedata('+i+')">update</button></td><td><button onclick="deletedata( '+i+')" id="delete">delete</button></td></tr>'
    }

    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if(datapro.length > 0){
        btnDelete.innerHTML = '<button onclick="deleteAll()">Delete All('+datapro.length+')</button>'
    }
    else{
        btnDelete.innerHTML = '';
    }
}
showdata()

//delete

function deletedata(i){
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showdata();
}

function deleteAll(){
    localStorage.clear();
    datapro.splice(0);
    showdata();
}

//count

//upate
function upatedata(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    gettotal();
    count.style.display = 'none';
    catargoy.value = datapro[i].catargoy;
    sumbit.innerHTML = 'Update';
    mood = 'upate';
    tmp = i;
    scroll({
        top:0,
        behavior:'smooth'
    })
}
//search
let searchmoodstring = 'title';
function searchMood(id){
    let search = document.getElementById('search')
    if(id == 'searchtitle'){
        searchmoodstring  = 'title';
        search.focus()
    }
    else{
        searchmoodstring = 'category';
        search.focus()
    }
    search.value = '';
    showdata();
    search.placeholder = 'Search By '+searchmoodstring;

}

function  SearchData(value){
    let table = '';
    for(let i = 0; i < datapro.length; i++){
        if(searchmoodstring == 'title'){
            if(datapro[i].title.includes(value.toLowerCase())){
                table += '<tr><td>'+ i +'</td> <td>'+ datapro[i].title +'</td><td>'+ datapro[i].price +'</td><td>'+ datapro[i].taxes +'</td><td>'+ datapro[i].ads +'</td><td>'+ datapro[i].discount +'</td><td>'+ datapro[i].total +'</td><td>'+ datapro[i].catargoy +'</td><td><button id="update" onclick= "upatedata('+i+')">update</button></td><td><button onclick="deletedata( '+i+')" id="delete">delete</button></td></tr>';
        };
    }
    else{
            if(datapro[i].catargoy.includes(value.toLowerCase())){
                table += '<tr><td>'+ i +'</td> <td>'+ datapro[i].title +'</td><td>'+ datapro[i].price +'</td><td>'+ datapro[i].taxes +'</td><td>'+ datapro[i].ads +'</td><td>'+ datapro[i].discount +'</td><td>'+ datapro[i].total +'</td><td>'+ datapro[i].catargoy +'</td><td><button id="update" onclick= "upatedata('+i+')">update</button></td><td><button onclick="deletedata( '+i+')" id="delete">delete</button></td></tr>';

    }
    }
    }
    document.getElementById('tbody').innerHTML = table;
}