const data = [
  {
    id: 1,
    name: 'Niyo Bosco',
    images: {
      img: 'assets/images/artist1.jpg',
      alt: 'artist 1',
    },
    about: 'PoP and RNB Artist',
    work: 'This 19-year-old musician broke through the music scene last year',
  },
  {
    id: 2,
    name: 'Aline Sano',
    images: {
      img: 'assets/images/artist2.jpeg',
      alt: 'Artist 2',
    },
    about: 'Jazz and Blues artist',
    work: 'Jazz and Blues is a genre that is currently dominated by artist.',
  },
  {
    id: 3,
    name: 'Bruce melodie',
    images: {
      img: 'assets/images/artist3.jpeg',
      alt: 'Artist 3',
    },
    about: 'Afrobeat and RNB Artist',
    work: 'The 28-year-old Musician/Song-writer, he is good singer.',
  },
  {
    id: 4,
    name: 'Albert Noah',
    images: {
      img: 'assets/images/artist4.jpg',
      alt: 'Artist 4',
    },
    about: 'RNB artist',
    work: 'Fast-rising artist at the fresh age of 22 years, this R&B',
  },
  {
    id: 5,
    name: 'Devis D',
    images: {
      img: 'assets/images/artist5.jpeg',
      alt: 'Artist 5',
    },
    about: 'PoP Hip hop Artist',
    work: 'Musical talent with his own twist on style and presence music scene.',
  },
  {
    id: 6,
    name: 'Igol Mabano',
    images: {
      img: 'assets/images/artist6.jpeg',
      alt: 'Artist 6',
    },
    about: 'Jas and Afrobeat Artist',
    work: 'Rising Artist signed under Kina Music Label has released album',
  },
];

const teamContainer = document.querySelector('#Team .teams');

function createCard(dataInfo) {
  const li = document.createElement('li');
  li.className = 'card d-flex';
  li.innerHTML = `<div class="card-img">
    <img src="${dataInfo.images.img}" alt="${dataInfo.images.alt}">
  </div>
  <div class="card-body">
    <h3>${dataInfo.name}</h3>
    <h4>${dataInfo.about}</h4>
    <p>${dataInfo.work}</p>
  </div>`;
  return li;
}

data.forEach((info) => {
  const card = createCard(info);
  teamContainer.appendChild(card);
});

const teamList = document.querySelectorAll('#Team .teams li');
const moreBtn = document.querySelector('#Team button');
const btnSpan = document.querySelector('#Team button span');
const btnIcon = document.querySelector('#Team button i');

let state = false;

function displayMore() {
  if (!state) {
    teamList.forEach((team) => {
      team.style.display = 'flex';
    });
    btnSpan.textContent = 'LESS';
    btnIcon.classList.remove('fa', 'fa-chevron-down');
    btnIcon.classList.add('fa', 'fa-chevron-up');

    state = true;
  } else {
    teamList.forEach((team) => {
      team.style.display = 'none';
    });
    teamList[0].style.display = 'flex';
    teamList[1].style.display = 'flex';

    btnSpan.textContent = 'MORE';
    btnIcon.classList.remove('fa', 'fa-chevron-up');
    btnIcon.classList.add('fa', 'fa-chevron-down');

    state = false;
  }
}

moreBtn.addEventListener('click', displayMore);
