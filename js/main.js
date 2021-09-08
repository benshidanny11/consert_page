const nominatedArtists = [
  {
    name: 'Niyo Bosco',
    type: 'PoP and RNB Artist',
    image: './assets/images/artist1.jpg',
    descr:
      'This 19-year-old musician broke through the music scene last year',
  },
  {
    name: 'Alyne sano',
    type: 'Jazz and Blues artist',
    image: './assets/images/artist2.jpeg',
    descr:
      'Jazz and Blues is a genre that is currently dominated by artist',
  },
  {
    name: 'Nel Ngabo',
    type: 'RNB Artist',
    image: './assets/images/artist3.jpeg',
    descr:
      'Fast-rising artist at the fresh age of 22 years, this R&B ',
  },
  {
    name: 'Bruce melodie',
    type: 'Afrobeat and RNB Artist',
    image: './assets/images/artist4.jpg',
    descr:
      'The 28-year-old Musician/Song-writer, he is good singer.',
  },
  {
    name: 'Devis D',
    type: 'PoP Hip hop Artist',
    image: './assets/images/artist5.jpeg"',
    descr:
      'Musical talent with his own twist on style and presence music scene.',
  },
  {
    name: 'Igol Mabano',
    type: 'Jas and Afrobeat Artist',
    image: './assets/images/artist6.jpeg"',
    descr:
      'Rising Artist signed under Kina Music Label has released album ',
  },
];

const nomineesHolder = document.getElementById('nominees');
let articstContent = '';

nominatedArtists.forEach((artist) => {
  articstContent += `<div class="col-12 d-flex my-2 p-2">
    <div class="image-artist-container">
      <img src="${artist.image}" alt="artist image" class="image-artist"/>
    </div>
    <div class="d-flex flex-column cont-info p-3">
      <h5 class="h-name">${artist.name}</h5>
      <h6 class="h-type">${artist.type}</h6>
      <p class="p-desc">
        ${artist.descr}
      </p>
    </div>
  </div>`;
});
if (nomineesHolder !== null) {
  nomineesHolder.innerHTML = articstContent;
}

document.getElementById('toggle-menu').addEventListener('click', () => {
  const menuItems = document.getElementById('menu-items');
  menuItems.classList.remove('show-or-hide');
});
