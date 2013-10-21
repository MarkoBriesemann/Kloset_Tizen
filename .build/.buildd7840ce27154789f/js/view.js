/**
 * Created with JetBrains WebStorm.
 * User: john
 * Date: 9/20/13
 * Time: 6:02 PM
 * To change this template use File | Settings | File Templates.
 */

var imgTop = document.getElementById('imgTop'),
    pTop = document.getElementById('pTop'),
    imgBottom = document.getElementById('imgBottom'),
    pBottom = document.getElementById('pBottom');

/*var localTop = JSON.parse(localStorage.clothesTopSaved);
var localBottom = JSON.parse(localStorage.clothesBottomSaved);
*/


$(document).ready(function () {
    imgTop.src = localTop.link;
    pTop.innerHTML = localTop.name;
    imgBottom.src = localBottom.link;
    pBottom.innerHTML = localBottom.name;
});

function navBack() {
	console.log("go back wardrobe.html");
    window.location.href = 'wardrobe.html';
}

document.getElementById('navBack').addEventListener('click', navBack, false);