

const creatFooter = () => {
    let footer = document.querySelector(".footer");

    footer.innerHTML = `

    <div class="footer-continer">
            <div class="footer-continer2">
                <h2>
                    <a href="./index.html">About me</a>
                </h2>
                
            <div class="footer-contents">
                <div class="footer-content footer-nav">
                    <ul>
                        <li><a  href="./Profile.html">Profile</a></li>
                        <li><a  href="./learning.html">Learning</a></li>
                        <li><a  href="./history.html">History</a></li>
                        <li><a  href="./skill.html">Skill</a></li>
                    </ul>
                </div>
                <div class="footer-content">
                    <ul>
                        <li><a href="">instagram</a></li>
                        <li><a href="">twitter</a></li>
                        <li><a href="">git hub</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-infos">
                <div class="footer-info footer-c">
                    &copy; 2022 Miyake saki
                </div>
                <div class="footer-info footer-mail">
                    Email : xxxxxx@andrew.ac.jp
                </div>
            </div>
            </div>
        </div>
    `;
};

creatFooter();