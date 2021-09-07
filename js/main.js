const nominatedArtists = [
  {
    name: 'Niyo Bosco',
    type: 'PoP and RNB Artist',
    image: './assets/images/artist1.jpg',
    descr:
      'This 19-year-old musician broke through the music scene last year, with his single "Ubigenza ute", loosely translated as "How do you do it?".',
  },
  {
    name: 'Alyne sano',
    type: 'Jazz and Blues artist',
    image: './assets/images/artist2.jpeg',
    descr:
      'Jazz and Blues is a genre that is currently dominated by artist/songwriter, Alyn Sano. She is gifted at enticing us with strong vocals.',
  },
  {
    name: 'Nel Ngabo',
    type: 'RNB Artist',
    image: './assets/images/artist3.jpeg',
    descr:
      'Fast-rising artist at the fresh age of 22 years, this R&B singer started his musical endeavour just a year ago and has already a collection of 7 singles, plus an Album under his musical belt.',
  },
  {
    name: 'Bruce melodie',
    type: 'Afrobeat and RNB Artist',
    image: './assets/images/artist4.jpg',
    descr:
      'The 28-year-old Musician/Song-writer and founder & C.E.O. of his own record label called Igitangaza Music Label. In 2017 he was amongst the performing acts on Coke Africa Studio',
  },
  {
    name: 'Devis D',
    type: 'PoP Hip hop Artist',
    image: './assets/images/artist5.jpeg"',
    descr:
      'Musical talent with his own twist on style and presence in the Rwandan music scene. Davis D has trail blazed through the radio waves, charts and television sets.',
  },
  {
    name: 'Igol Mabano',
    type: 'Jas and Afrobeat Artist',
    image: './assets/images/artist6.jpeg"',
    descr:
      'Rising Artist signed under Kina Music Label has released his debut album May 2020 titled “Urakunzwe”, meaning “You are loved”.',
  },
];

const nomineesHolder = document.getElementById('nominees');
let articstContent = '';

nominatedArtists.forEach((artist) => {
  articstContent += `<div class="col-lg-6 col-md-6 d-flex my-2 p-2">
    <div class="image">
      <img src="${artist.image}" alt="artist image" width="200" height="200"/>
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
nomineesHolder.innerHTML = articstContent;
