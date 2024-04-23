const header = document.getElementById('header');
const title = document.getElementById('title');
const profile_img = document.getElementById('profile-img');
const excerpt = document.getElementById('excerpt');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts  = document.querySelectorAll('.animated-bg-text');


function getData(){
    header.innerHTML = '<img src="https://lushdollar.com/wp-content/uploads/2018/12/free-laptop.jpg" />';
    title.innerText = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML = "Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg">';
    name.innerHTML = "John Doe";
    date.innerHTML = "Oct 08 2020";

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

setTimeout(getData, 2500);