var proBar = document.getElementById('proBar');
const webText = document.querySelector('.text h1');
const textH1 = document.querySelector('.text h1').innerText;



window.onscroll = () => {
    pageScroll();
}

const pageScroll = () => {
    // console.log(document.body.scrollTop)
    console.log(document.documentElement.scrollTop, 'documentEleScollTop')
    // console.log(document.documentElement.scrollHeight , 'documentEleScrollHeight')
    // console.log(document.documentElement.clientHeight , 'documentEleClientHeight')

    var winscroll = document.body.scrollTop || (document.documentElement.scrollTop + document.documentElement.clientHeight);
    var height = document.documentElement.scrollHeight || document.documentElement.clientHeight;
    var scrolled = (winscroll / height) * 100;
    proBar.style.opacity = "1";
    proBar.style.width = scrolled + '%';
    // let scrollPercent = Math.ceil(scrolled);
    let scrollPercent = Math.floor(scrolled);
    proBar.innerHTML = scrollPercent + '%';
    // console.log(scrolled,'scrolled');
    // proBar.
}

pageScroll();

// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray,'myArray');



// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 768.9px)')
if (mediaQuery.matches) {
    var textArray = textH1.split(" ");
    console.log(textArray, 'textArray');

    var test = textArray.slice(0, 400);
    console.log(test, 'test');

    webText.innerHTML = ""
    let items = ""
    test.forEach((item) => {
        console.log(item);
        items += `${item} `;
    })
    webText.innerHTML = items;
    console.log(webText, 'webText');
}



