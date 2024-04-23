import requestURL from '/data/vegetables.json';
const vegetables = import.meta.glob('/images/vegetables_img/*.png', {
  query: { format: 'avif;webp;png', as: 'picture' },
  import: 'default',
  eager: true,
});
console.log(vegetables);
showVegetables(requestURL);

function imageVegetable(name, price, image_url, retina_url) {
  let avifUrl = '';
  let webpfUrl = '';
  let avifUrlRetina = '';
  let webpUrlRetina = '';
  let imgBase = '';
  let imgW;
  let imgH;
  for (const [imgFile, images] of Object.entries(vegetables)) {
    if (imgFile === image_url) {
      avifUrl = images.sources['avif'].split(' ')[0];
      webpfUrl = images.sources['webp'].split(' ')[0];
      imgBase = images.img['src'];
      imgW = images.img['w'];
      imgH = images.img['h'];
    }
    if (imgFile === retina_url) {
      avifUrlRetina = images.sources['avif'].split(' ')[0];
      webpUrlRetina = images.sources['webp'].split(' ')[0];
    }
  }
  const html = `<picture>
	    <source srcset="${avifUrl} 1x, ${avifUrlRetina} 2x" type="image/avif"/>
	    <source srcset="${webpfUrl} 1x, ${webpUrlRetina} 2x" type="image/webp"/>
	    <img 
	      src="${imgBase}"
	      width="${imgW}" 
	      height="${imgH}"
	      alt="${name}"/>
	  </picture>`;
  return `<li class="veg-item"> 
		<div class="veg-title-wrap">
			<h3 class="veg-item-title headline3">${name}</h3>
			<p class="veg-item-text">${price} UAH / kg</p>
		</div>
		${html} </li>`;
}

function showVegetables(jsonObj) {
  const vegetables = jsonObj;
  let vegetableHtml = '';

  for (var i = 0; i < vegetables.length; i++) {
    vegetableHtml += imageVegetable(
      vegetables[i].name,
      vegetables[i].price,
      vegetables[i].image_url,
      vegetables[i].retina_url
    );
  }
  document.querySelector('#vegetablelist').innerHTML = `${vegetableHtml}`;
}
