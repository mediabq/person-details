const persons = [
  {
    name: 'John Doe',
    street: '3833 Dovetail Estates',
    city: 'New York',
    country: 'USA',
    telephone: '02555-5656-565',
    birthday: '17-04-1998'
  },
  {
    name: 'Maggie Phillips',
    street: '2957 Libby Street',
    city: 'New York',
    country: 'USA',
    telephone: '310-320-8746',
    birthday: '12-01-2002'
  },
  {
    name: 'Carla Williams',
    street: '1554 Old Dear Lane',
    city: 'Unionville (Orange)',
    country: 'USA',
    telephone: '845-726-2258',
    birthday: '02-12-1983'
  },
  {
    name: 'Nina Phillips',
    street: '58th Street',
    city: 'New York',
    country: 'USA',
    telephone: '02111-222-333',
    birthday: '11-09-2000'
  },
  {
    name: 'Toivo Matheson',
    street: '105th East Street',
    city: 'New York',
    country: 'USA',
    telephone: '01444-348-555',
    birthday: '11-11-1990'
  },
  {
    name: 'Aleix MacFarlane',
    street: '4033 Cimmaron Road',
    city: 'Anaheim',
    country: 'USA',
    telephone: '714-613-1435',
    birthday: '17-04-1956'
  },
  {
    name: 'Cierra Vega',
    street: '3972 Desert Broom Court',
    city: 'Jersey City',
    country: 'USA',
    telephone: '201-685-1315',
    birthday: '17-04-1998'
  },
  {
    name: 'Miranda Shaffer.',
    street: '3894 East Avenue',
    city: 'Phoenix',
    country: 'USA',
    telephone: '480-281-7275',
    birthday: '09-05-2010'
  },
  {
    name: 'Bradyn Kramer',
    street: '404 Melville Street',
    city: 'Arlington',
    country: 'USA',
    telephone: '731-431-16485',
    birthday: '11-12-2003'
  },
  {
    name: 'Selena Bryan',
    street: '699 Flinderation Road',
    city: 'Schaumburg',
    country: 'USA',
    telephone: '708-363-9183',
    birthday: '13-12-1988'
  }
];

//Get elements
const personsNames = document.querySelector('#names');
const personDetails = document.querySelector('#person-details');

const eventListeners = (detailsBtn, person) => {
  detailsBtn.addEventListener('click', () => {
    personDetails.innerHTML = `
    <strong>Street:</strong> ${person.street} <br>
    <strong>City:</strong> ${person.city} <br>
    <strong>Country:</strong> ${person.country} <br>
    <strong>Telephone:</strong> ${person.telephone} <br>
    <strong>Birthday:</strong> ${person.birthday}
    `;

    const divs = document.querySelectorAll('.specific-person');
    divs.forEach(div => {
      div.classList.remove('highlighted-green');
    });
    detailsBtn.previousElementSibling.classList.add('highlighted-green');
  });
  detailsBtn.addEventListener('mouseenter', () => {
    detailsBtn.previousElementSibling.classList.add('highlighted');
  });
  detailsBtn.addEventListener('mouseleave', () => {
    detailsBtn.previousElementSibling.classList.remove('highlighted');
  });
};

const generateNames = () => {
  persons.forEach(person => {
    const div = document.createElement('div');
    const detailsBtn = document.createElement('button');
    detailsBtn.innerHTML = `Details <i class="fas fa-chevron-right"></i>`;

    div.innerHTML = `<div class="specific-person">${person.name}</div>`;

    div.appendChild(detailsBtn);

    personsNames.appendChild(div);

    eventListeners(detailsBtn, person);
  });
};

generateNames();
