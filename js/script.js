let dramaInfo = document.getElementById('dramaInfo');
let backdrop = document.getElementById('backdrop');
let fanlettersText = document.querySelector('main h1');
let episodeSelect = document.getElementById('episodeSelect');
let videoElement = document.getElementById('videoPlayer');
let downloadButton = document.getElementById('downloadButton');

let episodeVideoLinks = {
    episode1: "https://video.xx.fbcdn.net/v/t42.1790-2/10000000_576217797980903_5683386345227021977_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjM4MSwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=7uRGFj0MD5kAX9kimbG&rl=381&vabr=212&_nc_ht=scontent.xx&edm=APRAPSkEAAAA&oh=00_AfChW9D1xYGPV1ZGWgC7LwK4LDVdUURx0P5rOMroN-Wk5g&oe=65AE45F6",
    episode2: "https://video.xx.fbcdn.net/v/t42.1790-2/10000000_1042032833787189_3111512814375829230_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjM3OSwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=TY0B0sFH4PAAX8L2fOV&rl=379&vabr=211&_nc_ht=scontent.xx&edm=APRAPSkEAAAA&oh=00_AfD3Qf4586bd81fvnbISvyI3eP-upXFtsypmQgAxg0mV1g&oe=65AE0897",
    episode3: "https://video.xx.fbcdn.net/v/t42.1790-2/10000000_667063365111504_7717320246791801964_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=2Fi6Dwu-fAkAX_fPA5F&rl=300&vabr=135&_nc_ht=scontent.xx&edm=APRAPSkEAAAA&oh=00_AfCHw26NFKRujSroxBYijCmfAEIADaDH8dbSg_b7yosz6w&oe=65AE4D83",
    episode4: "https://video.xx.fbcdn.net/v/t42.1790-2/10000000_445462431101632_2932632705860256617_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=ybFvCHIpwpUAX9YP_Do&rl=300&vabr=139&_nc_ht=scontent.xx&edm=APRAPSkEAAAA&oh=00_AfDPwM-A9vO5yKJOSImgyV_XBkA8IsA_JDwqIchN55dWiA&oe=65ADAA1E"
};

let episodeDownloadLinks = {
    episode1: "https://pladrac.net/download?id=MzU4MzA2&title=Fanletter%2C+Please+%282022%29+episode+1&typesub=SUB&mip=0.0.0.0&refer=https://kissasian.link/&op=1",
    episode2: "https://pladrac.net/download?id=MzU4MzY0&title=Fanletter%2C+Please+%282022%29+episode+2&typesub=SUB&mip=0.0.0.0&refer=https://kissasian.link/&op=1",
    episode3: "https://pladrac.net/download?id=MzU4NDA3&title=Fanletter%2C+Please+%282022%29+episode+3&typesub=SUB&mip=0.0.0.0&refer=https://kissasian.link/&op=1",
    episode4: "https://pladrac.net/download?id=MzU4NDA4&title=Fanletter%2C+Please+%282022%29+episode+4&typesub=SUB&mip=0.0.0.0&refer=https://kissasian.link/&op=1"
};

fanlettersText.addEventListener('click', toggleDramaInfo);
backdrop.addEventListener('click', toggleDramaInfo);

episodeSelect.addEventListener('change', function () {
    let selectedOption = episodeSelect.options[episodeSelect.selectedIndex];
    let episodeValue = selectedOption.value;
    
    let videoLink = episodeVideoLinks[episodeValue];
    let downloadLink = episodeDownloadLinks[episodeValue];

    videoElement.pause();
    videoElement.src = videoLink;
    downloadButton.href = downloadLink;
});

let selectedOption = episodeSelect.options[episodeSelect.selectedIndex];
let episodeValue = selectedOption.value;
let videoLink = episodeVideoLinks[episodeValue];
videoElement.src = videoLink;
downloadButton.href = episodeDownloadLinks[episodeValue];

function toggleDramaInfo() {
    dramaInfo.classList.toggle('show-info');
    backdrop.classList.toggle('show-backdrop');
}
