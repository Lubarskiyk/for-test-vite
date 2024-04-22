import requestURL from '/data/vegetables.json';
console.log(requestURL);
const vegetables = import.meta.glob('/images/vegetables_img/*.png', {
  query: { format: 'avif;webp;png', as: 'picture' },
  import: 'default',
  eager: true,
});
showVegetables(requestURL);
// const requestURL = '/data/vegetables.json';

// const request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function () {
//   const vegetablesJSON = request.response;
//   showVegetables(vegetablesJSON);
// };

function imageVegetable(name, price, image_url, retina_url) {
  for (const [imgFile, images] of Object.entries(vegetables)) {
    if (imgFile === image_url) {
      const avifUrl = images.sources['avif'].split(' ')[0];
      const webpfUrl = images.sources['webp'].split(' ')[0];
      const html = `<picture>
	    <source srcset="${avifUrl}" type="image/avif"/>
	    <source srcset="${webpfUrl}" type="image/webp"/>
	    <img 
	      src="${images.img['src']}"
	        width="${images.img['w']}" 
	       height="${images.img['h']}"
	        alt="${image_url}"/>
	  </picture>`;
      return `<li class="li_stile"> 
		<p>${name}</p>
		<p>${price}</p>
		${html} </li>`;
    }
  }
}

function showVegetables(jsonObj) {
  //   var section = document.querySelector('section');
  const vegetables = jsonObj;
  let vegetableHtml = '';

  for (var i = 0; i < vegetables.length; i++) {
    //  console.log(vegetables[i].name);
    //  console.log(vegetables[i].price);
    //  console.log(vegetables[i].image_url);
    vegetableHtml += imageVegetable(
      vegetables[i].name,
      vegetables[i].price,
      vegetables[i].image_url,
      vegetables[i].retina_url
    );

    console.log(vegetableHtml);
    //  var myArticle = document.createElement('article');
    //  var myH2 = document.createElement('h2');
    //  var myPara1 = document.createElement('p');
    //  var myPara2 = document.createElement('p');
    //  var myPara3 = document.createElement('p');
    //  var myList = document.createElement('ul');
    //  myH2.textContent = heroes[i].name;
    //  myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    //  myPara2.textContent = 'Age: ' + heroes[i].age;
    //  myPara3.textContent = 'Superpowers:';
    //  var superPowers = heroes[i].powers;
    //  for (var j = 0; j < superPowers.length; j++) {
    //    var listItem = document.createElement('li');
    //    listItem.textContent = superPowers[j];
    //    myList.appendChild(listItem);
    //  }
    //  myArticle.appendChild(myH2);
    //  myArticle.appendChild(myPara1);
    //  myArticle.appendChild(myPara2);
    //  myArticle.appendChild(myPara3);
    //  myArticle.appendChild(myList);
    //  section.appendChild(myArticle);
  }
  document.querySelector('#app').innerHTML = `${vegetableHtml}`;
}
