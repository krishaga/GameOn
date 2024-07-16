let products = document.querySelector('.arcade-display');

const productData = [
    {
        imgsrc: "/assets/thumbnails/gaming3.jpg",
        name: 'Gaming III',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdOCCXkvd91lVP6jsfgP4l1ofwRK3zS2lT6e5I1dXHWuAfyng/viewform?usp=sf_link ',
    },
    {
        imgsrc: "/assets/thumbnails/pc3.jpg",
        name: 'Pop Culture III',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdpvzxGpaL5mfeMVJ3oYkfmou6hEOb_HJhzoncuyub7-gsmxw/viewform?vc=0&c=0&w=1&flr=0',
    },
    {
        imgsrc: "/assets/thumbnails/cipher1.jpg",
        name: 'Ciphers I',
        link: 'https://forms.gle/VfERkJC9ob9SBsee7',
    },
    {
        imgsrc: "/assets/thumbnails/mememaking.jpg",
        name: 'Meme Making',
        link: 'https://forms.gle/Nb3U4b3M4TYxtQm89',
    },
    {
        imgsrc: "/assets/thumbnails/cipher2.jpg",
        name: 'Ciphers II',
        link: 'https://forms.gle/sbyt3AJK34v3RmyQ6',
    },
    {
        imgsrc: "/assets/thumbnails/coding2.jpg",
        name: 'Coding II',
        link: 'https://forms.gle/UddtVuD4vetkHHjT7',
    },
    {
        imgsrc: "/assets/thumbnails/ai.jpg",
        name: 'AI',
        link: 'https://forms.gle/U3DVRPEDh6YmZdDf6',
    },
    {
        imgsrc: "/assets/thumbnails/coding3.jpg",
        name: 'Coding III',
        link: 'https://forms.gle/zu46KiaYRNjMQHox5',
    },
    {
        imgsrc: "/assets/thumbnails/pc1.jpg",
        name: 'Pop Culture I',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSeoluFolgsimIKNBfhGfsNoXhTDZNDRmZZoQgKwqESR2a3wcg/viewform?vc=0&c=0&w=1&flr=0',
    },
    {
        imgsrc: "/assets/thumbnails/gaming2.jpg",
        name: 'Gaming II',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdqLF_K76AQt7_90qEHzewnNIsfr3zRiW1wV4tAaOlS4NfTzg/viewform?usp=sf_link ',
    },
    {
        imgsrc: "/assets/thumbnails/cipher3.jpg",
        name: 'Ciphers III',
        link: 'https://forms.gle/6hnpgneRz6wey23o6 ',
    },
    {
        imgsrc: "/assets/thumbnails/coding1.jpg",
        name: 'Coding I',
        link: 'https://forms.gle/A6ZX7nzvP3aLPWyN9',
    },
    {
        imgsrc: "/assets/thumbnails/gaming1.jpg",
        name: 'Gaming I',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSc666nP6rv4zZ_TsKE9G2XSQ5GGVzW8ui4JFh7QMwSrTgn5-g/viewform?usp=sf_link ',
    },
    {
        imgsrc: "/assets/thumbnails/pc2.jpg",
        name: 'Pop Culture II',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSd9DoWR3eW7B533KIVbkPWVDHDAbmHyjmzVQ_6My2HbVwIPGw/viewform?vc=0&c=0&w=1&flr=0',
    },

];

window.onload = function () {
    products.innerHTML = "";
    productData.forEach((article, key) => {
        const product_div = document.createElement("div");
        product_div.className = "product";
        // product_div.classList.add("article");
        const articleContent = `
        <a class="arcade_links" target="_blank">
            <img>
            <h5></h5>
            </a>
        `;
        product_div.innerHTML = articleContent;
        products.appendChild(product_div);
    });

    for (var i in productData) {
        // console.log(i);
        products.getElementsByTagName('h5')[i].innerHTML = productData[i].name;
        products.getElementsByTagName('img')[i].src = productData[i].imgsrc;
        products.getElementsByTagName('img')[i].alt = productData[i].name;
        products.getElementsByTagName('a')[i].href = productData[i].link;
    }
}