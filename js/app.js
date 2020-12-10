'use strict';

$.ajax('../data/page-1.json').then(data => {
  console.log(data);
  data.forEach(imgObject => {
    new HornedAnimals(imgObject.image_url, imgObject.title, imgObject.description, imgObject.keyword, imgObject.horns).render();
  });
});

function HornedAnimals(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}

HornedAnimals.prototype.render = function () {
  let section =$('#template').clone();
  $('#container').append(section);
  section.find('h2').text(this.title);
  section.find('img').attr('src', this.image_url);
  section.find('p').text(this.description);
  section.addClass(this.keyword);

  return section;
};
