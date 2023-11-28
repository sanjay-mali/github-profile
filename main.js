const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', getUser);

function getUser(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;


    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())

        .then(data => {

            if (submitButton.addEventListener('click', () => {
                document.querySelector('.profile').style.display = 'block';
            }));

            else if (data.message == "Not Found") {
                alert('User not found');

                document.querySelector('.profile').style.display = 'none';
            }

            document.querySelector('.profile-image img').src = data.avatar_url;

            document.querySelector('.name').innerHTML = `Name: ${data.name}`;

            document.querySelector('.username').innerHTML = `UserName: ${data.login}`;

            document.querySelector('.userbio').innerHTML =`Bio: ${data.bio}`;

            document.querySelector('.repo').innerHTML = `Repo: ${data.public_repos}`;

            document.querySelector('.followers').innerHTML = `Followers: ${data.followers}`;

            document.querySelector('.following').innerHTML = `Following: ${data.following}`;
        })

        .catch(error => console.log(error));
    
    


    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {

            const repos = data.slice(0, 5);
            const newRepo = document.querySelector('.new-repo');
            
            newRepo.innerHTML = '';
            repos.forEach(repo => {
                const repoName = document.createElement('a');
                const br = document.createElement('br');

                repoName.classList.add('repo');

                repoName.href = repo.html_url;
                repoName.target = '_blank';
                repoName.innerHTML = repo.name;

                newRepo.appendChild(repoName);
                newRepo.appendChild(br);

            });
        })

        .catch(error => console.log(error));
}