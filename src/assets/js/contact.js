const contactPageContent = {
  heading: 'Contact Image',
  body: `
  <form>
    Telephone: <br>
    <input type = "text" name = "telephone" value = "" >
    <br>
    Email: <br>
    <input type = "text" name = "email" value = "" >
    <br><br>
    <input type = "submit" value = "Submit" >
    </form>
  `,
  image: 'map.png',
};

export function contactContentGenerator() {
  // For every tab content have a main content div
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('id', 'tabContentDiv');

  // Each tab content should have a main text
  const contentBody = document.createElement('div');
  contentBody.setAttribute('class', 'content');
  contentBody.innerHTML = contactPageContent.body;
  // Each tab content should have an image
  const image = document.createElement('img');
  image.setAttribute('class', 'content-img');
  image.setAttribute('src', `assets/images/${contactPageContent.image}`);
  return {
    contentDiv,
    contentBody,
    image,
  };
}
