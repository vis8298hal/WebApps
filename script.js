const recent = document.querySelector('.recent_projects');
const profile = document.querySelector('.profile');
recent.style = "display:none";
profile.style = "display: none;";


function show_recent_proj(){
    recent.style="display:flex";
    profile.style="display: none";
}

function show_profile(){
    profile.style="display: flex;";
    recent.style = "display:none";
}