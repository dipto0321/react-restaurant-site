const homePageContent = {
  heading: 'Home Page',
  body:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac odio tempor orci dapibus ultrices. Convallis tellus id interdum velit laoreet. Vulputate mi sit amet mauris. Habitant morbi tristique senectus et. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Rutrum quisque non tellus orci ac auctor. Eros donec ac odio tempor. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Fringilla ut morbi tincidunt augue. Leo duis ut diam quam. Pharetra et ultrices neque ornare. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Morbi blandit cursus risus at ultrices mi tempus imperdiet.</p>',
  image: 'home.jpg',
};

export function homeContentGenerator() {
  // For every tab content have a main content div
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('id', 'tabContentDiv');

  // Each tab content should have a main text
  const contentBody = document.createElement('div');
  contentBody.setAttribute('class', 'content');
  contentBody.innerHTML = homePageContent.body;
  // Each tab content should have an image
  const image = document.createElement('img');
  image.setAttribute('class', 'content-img');
  image.setAttribute('src', `./images/${homePageContent.image}`);
  return {
    contentDiv,
    contentBody,
    image,
  };
}
