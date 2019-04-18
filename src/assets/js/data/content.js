import faker from 'faker';

const contents = {
  home: {
    text: faker.lorem.paragraph(),
    imageUrl: 'assets/images/home.jpg',
  },
  about: {
    text: faker.lorem.paragraphs(),
    imageUrl: 'assets/images/about.jpg',
  },
  contact: {
    imageUrl: 'assets/images/map.png',
  },
};

export default contents;
