import images from './images';

const wines = [
  {
    title: 'Tuborg',
    price: '$4',
    tags: 'AU | Bottle',
  },
  {
    title: 'Carlsberg',
    price: '$4',
    tags: 'AU | Bottle',
  },
  {
    title: 'Castillo Real',
    price: '$12',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Montes Classic Cabernet Sauvignon',
    price: '$20',
    tags: 'CA | 750 ml',
  },
  {
    title: '4th Street Sweet Red',
    price: '$72',
    tags: 'IE | 5 ltr',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: '',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: '',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: '',
 
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: '',
  },
];

export default { wines, cocktails, awards };
