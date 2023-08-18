let notifications = document.getElementById('notifications');
let menu = document.getElementById('menu');
let show_more_btn = document.querySelectorAll('.show-more');
function deleteShorts(){
    let shorts_place = document.getElementById('shorts-place1');
    let hr1 = document.getElementById('hr-1')
    shorts_place.classList.add('hidden');
    hr1.classList.add('hidden');
    let videos1 = document.getElementById('videos-1');
    videos1.style.height = '650px';
}
function deleteShorts2(){
    let shorts_place2 = document.getElementById("shorts-place2");
    shorts_place2.classList.add('hidden')
    let shorts_hr = document.getElementById('shorts-hr2');
    shorts_hr.classList.add('hidden');
    let videos = document.getElementById('videos-2');
    videos.style.height = '800px'
}