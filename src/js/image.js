// import srcsetAvif from '../example.jpg?w=500;700;900;1200&format=avif&as=srcset';
// // do it a second time, but now as webp since safari can't display avif
// import srcsetWebp from '../example.jpg?w=500;700;900;1200&format=webp&as=srcset';
// // create a small placeholder and import its metadata
// import {
//   src as placeholder,
//   width,
//   height,
// } from '../example.jpg?w=300&as=metadata';
//   <!-- Now we can use our images -->
//  <a
//    href="https://github.com/JonasKruckenberg/imagetools/tree/main/docs"
//    target="_blank"
//  >
//    Documentation
//  </a>;
//   <picture>
//     <source srcset="${srcsetAvif}" type="image/avif"/>
//     <source srcset="${srcsetWebp}" type="image/webp"/>
//     <img
//         src="${placeholder}"
//         width="${width}"
//         height="${height}"
//         alt="Women Lying Near to a Multicolored Glass Window Close-up Photography"/>
//   </picture>

const vegetables = import.meta.glob('/images/vegetables_img/*', {
  query: { format: 'avif', w: 100 },
});
console.log(vegetables);

let vegetableHtml = '';
for (let vegetable of Object.values(vegetables)) {
  const import_statment = vegetable();
  const url = (await import_statment).default;
  vegetableHtml += `<li> <img src="${url}" /> </li>`;
}

document.querySelector('#app').innerHTML = `
  <h1>Hello Imagetools!</h1>
   <p>Here are a few vegetables of Vite:</p>
   <ul style="width:300px; margin: 50px auto">
       ${vegetableHtml} 
     </ul>
`;
