const btn = document.querySelector('.btn');
const main = document.querySelector('main');
const picturesApi = 'https://picsum.photos/v2/list?limit=9';

const getPictures = () => {
  fetch(picturesApi)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((el) => {
        const img = document.createElement('img');
        main.appendChild(img);
        img.src = el.download_url;
      });
    });

  btn.classList.add('hide');
};

btn.addEventListener('click', getPictures);
