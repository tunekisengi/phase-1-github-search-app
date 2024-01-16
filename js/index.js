document.addEventListener(`DOMContentLoaded`,(e)=>{
    const searchbx = document.querySelector(`#search`);
    const searchbtn = document.querySelector(`#submit`);
    const userApi = `https://api.github.com/search/users?q=`;
    const repoApi = `https://api.github.com/users`;
    async function checkUser(user){
        const response1= await fetch(userApi+ user)
        const data = await response1.json()
        const userlist=document.querySelector(`#user-list`)
        userlist.innerHTML=``
        user.forEach((item) => {
            const userName = document.createElement(`li`)
            userName.textContent= item.login
            userlist.appendChild(userName)
            
        });
    }

    async function checkRepo(repo){
        const response2 = await fetch(repoApi +repo)
        const data = await response2.json()
        const repolist = document.querySelector(`#repos-list`)
        repolist.innerHTML=``
        data.forEach((item)=>{
            const repoName = document.createElement(`li`)
            repoName.textContent=item.name;
            repolist.appendChild(repoName)
        })
    }
    searchbtn.addEventListener(`click`,(e)=>{
        e.preventDefault()
        let userInsert = searchbx.value
        checkRepo(userInsert)
        checkUser(userInsert)
    })
})

    