

const createNav = () => {
    let nav = document.querySelector('.navber');
        // クラス名を探して取得する

    nav.innerHTML = `

    <div class="nav-main">
        <div class="naver-conteiner">
            <div class="logo"><a href="./index.html">saki miyake</a></div>
                <ul class="naverList">
                    <li><a class="navberListLink" href="./Profile.html">Profile</a></li>
                    <li><a class="navberListLink" href="./learning.html">Learning</a></li>
                    <li><a class="navberListLink" href="./history.html">History</a></li>
                    <li><a class="navberListLink" href="./skill.html">Skill</a></li>
                </ul>
            </div>
    </div>




    <div class="hum">
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="globalMenuSp">
            <ul>
                <li><a class="navberListLink1" href="./Profile.html">Profile</a></li>
                <li><a class="navberListLink1" href="./learning.html">Learning</a></li>
                <li><a class="navberListLink1" href="./history.html">History</a></li>
                <li><a class="navberListLink1" href="./skill.html">Skill</a></li>        
            </ul>
        </nav>
    </div>
    `
}

createNav();