const APIURL = 'https://api.github.com/users/'
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById('main');

async function getUser(userName){
    try{
    const { data } = await axios(APIURL + userName)
    createUserCard(data);
    getRepos(userName);
    }
    catch(err){
        console.log(err);
        if(err.response.status == 404){
            createErrorCard('No User Found with Username Entered !')
        }
    }
}

async function getRepos(userName){
    try{
        const { data } = await axios(APIURL + userName + '/repos?sort=created')
        console.log(data)
        addReposToCard(data)
        }
        catch(err){
            console.log(err);
            if(err.response.status == 404){
                createErrorCard('Problem Fetching Repos')
            }
        }
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos');
    repos.slice(0,5).forEach(repo =>{
        const repoEl = document.createElement('a');
        repoEl.classList.add('repos');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name;
        reposEl.appendChild(repoEl);
    })
}
function createErrorCard(message){
    const cardHTML = `
    <div class="card">
    <h1>${message}</h1>
    </div>`;
    main.innerHTML = cardHTML;
}

function createUserCard(user){
    const cardHTML = `
    <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">
                    
                </div>
            </div>
        </div>`;

        main.innerHTML= cardHTML;

}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const user = search.value;
    if(user){
        getUser(user);
        search.value = ''
    }
    else{
        alert("Please Enter a UserName to Proceed")
    }
})