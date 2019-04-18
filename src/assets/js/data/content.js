import faker from 'faker';

const contents = {
  home: {
    text: faker.lorem.paragraph(),
    imageUrl: 'assets/images/home.jpg',
  },
  about: {
    text: faker.lorem.paragraphs(),
  },
};

export default contents;
