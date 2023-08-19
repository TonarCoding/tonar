let notifications = document.getElementById('notifications');
let menu = document.getElementById('menu');
let videos1 = document.getElementById('videos-1');
let videos = document.getElementById('videos-2');
let more = document.getElementById('more')
function deleteShorts(){
    let shorts_place = document.getElementById('shorts-place1');
    let hr1 = document.getElementById('hr-1')
    shorts_place.classList.add('hidden');
    hr1.classList.add('hidden');
    videos1.style.height = '650px';
}
function deleteShorts2(){
    let shorts_place2 = document.getElementById("shorts-place2");
    shorts_place2.classList.add('hidden')
    let shorts_hr = document.getElementById('shorts-hr2');
    shorts_hr.classList.add('hidden');
    videos.style.height = '800px'
}
function show_more1(){
    let more_videos = document.getElementById('video-more1');
    let less_videos = document.getElementById('less-videos');
    let hr_end = document.getElementById('shorts-hr-end');
    hr_end.style.top = '600px'
    hr_end.style.left = '-1300px'
    hr_end.style.width = '1350px'
    more_videos.style.display = 'flex';
    videos.style.marginTop = '630px';
    more.style.position = 'absolute'
    more.style.top = '500px'
    less_videos.innerHTML = '^';
    less_videos.title = 'show less'
    more.style.right = '1100px'
}