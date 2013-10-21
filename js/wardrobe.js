/**
 * Created with JetBrains WebStorm.
 * User: john
 * Date: 9/16/13
 * Time: 3:36 PM
 * To change this template use File | Settings | File Templates.
 */
var user = JSON.parse(localStorage.user);
console.log("user: " + user);

var clothes = [],
    clothesToShow = [];

var count = 0,
    countMax = 0;

var imageCaroussel = document.getElementById('imgCaroussel'),
    wardrobe = document.getElementById('wardrobe'),
    nameCaroussel = document.getElementById('nameCaroussel');


function getCLothesFromUser(idUser) {
	console.log("idUser: "+ idUser);
    var url = 'http://localhost:3000/getClothesOfUser?idUser=' + idUser;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                clothes[i] = data[i];
                console.log("wardrobe.js: data i : " + data[i].link); 
            }
            sort();
        },
        cache: false
    });
    return false;
}

window.onload = getCLothesFromUser(user.idUser);


function carousel(number) {
	console.log("number : " + number);
	console.log("count : " +  count +" maxcount " + countMax); 
    switch (number) {
        case 0:
            document.getElementById('0').style.display = 'block';
            break;
        case 1:
            if (count < countMax) {
                document.getElementById(count).style.display = 'none';
                count++;
                document.getElementById(count).style.display = 'block';
            } else if (count === countMax){
                document.getElementById(count).style.display = 'none';
                count = 0;
                document.getElementById(count).style.display = 'block';
            }
            break;
        case -1:
            if (count > 0) {
                document.getElementById(count).style.display = 'none';
                count--;
                document.getElementById(count).style.display = 'block';
            } else if (count === 0){
                document.getElementById(count).style.display = 'none';
                count = countMax;
                document.getElementById(count).style.display = 'block';
            }
    }
}

function loadAllImage() {
    for (var i = 0; i < clothesToShow.length; i++) {
        img = document.createElement('img');
        img.id = i;
        img.src = clothesToShow[i].link;
        wardrobe.appendChild(img);
        console.log("number pic: " + i);
    }
    carousel(0);
}

function sort() {
    if ((!localStorage.color) && (!localStorage.type)) {
        console.log('tout');
        for (var i = 0; i < clothes.length; i++) {
            clothesToShow.push(clothes[i]);
        }
    }
    if ((localStorage.color) && (!localStorage.type)) {
        console.log('color');
        for (i = 0; i < clothes.length; i++) {
            if (clothes[i].color === localStorage.color) {
                clothesToShow.push(clothes[i]);
            }
        }
    }
    if ((!localStorage.color) && (localStorage.type)) {
        console.log('type');
        for (i = 0; i < clothes.length; i++) {
            if (clothes[i].type === localStorage.type) {
                clothesToShow.push(clothes[i]);
            }
        }
    }
    if ((localStorage.color) && (localStorage.type)) {
        console.log('color & type');
        for (i = 0; i < clothes.length; i++) {
            if ((clothes[i].type === localStorage.type) && (clothes[i].color === localStorage.color)) {
                clothesToShow.push(clothes[i]);
            }
        }
    }
    countMax = clothesToShow.length - 1;
    loadAllImage();
}


function saveThisClothes() {
    if (bTop === true) {
        localStorage.clothesTopSaved = JSON.stringify({'id': clothesTop[countTop].id, 'name': clothesTop[countTop].name, 'link': clothesTop[countTop].link, 'color': clothesTop[countTop].color, 'style': clothesTop[countTop].style});
        nameCaroussel.innerHTML = clothesTop[countTop].name + ' [Saved]';
    } else if (bBottom === true) {
        localStorage.clothesBottomSaved = JSON.stringify({'id': clothesBottom[countBottom].id, 'name': clothesBottom[countBottom].name, 'link': clothesBottom[countBottom].link, 'color': clothesBottom[countBottom].color, 'style': clothesBottom[countBottom].style});
        nameCaroussel.innerHTML = clothesBottom[countBottom].name + ' [Saved]';
    }
}

var swipeLeft = Hammer(wardrobe).on("swipeleft", function (event) {
    carousel(1);
});

var swipeLeft = Hammer(wardrobe).on("tap", function (event) {
	console.log("swipeleft through tap");
    carousel(1);
});


var swipeRight = Hammer(wardrobe).on("swiperight", function (event) {
    carousel(-1);
});

/* TEST */
 var hold = Hammer(imageCaroussel).on("doubletap", function (event) {
 saveThisClothes();
 });
 


function navToFilter() {
    window.location.href = 'filter.html';
}

function navToView() {
    window.location.href = 'view.html';
}
function navBack() {
    window.location.href = 'dashboard.html'
}

document.getElementById('navBack').addEventListener('click', navBack, false);
document.getElementById('navToFilter').addEventListener('click', navToFilter, false);
document.getElementById('navToView').addEventListener('click', navToView, false);