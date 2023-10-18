const pPic = document.getElementById('profilePic');
const rName = document.getElementById('realName');
const uName = document.getElementById('userName');
const repoAmt = document.getElementById('repAmount');
const flWers = document.getElementById('followers');
const flWing = document.getElementById('following');
const pLink = document.getElementById('profileLink');

document.addEventListener('DOMContentLoaded', function() {

    fetch('https://api.github.com/users/hsanfilippo')
        .then(function(r) {
            return r.json();
        })
        .then(function(json) {
            pPic.src = json.avatar_url;
            rName.innerText = json.name;
            uName.innerText = `@${json.login}`
            repoAmt.innerText = json.public_repos;
            flWers.innerText = json.followers;
            flWing.innerText = json.following;
            pLink.href = json.html_url;
        })
})