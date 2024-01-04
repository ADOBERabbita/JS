import { fetchApi } from "./helpers/fetchApi.js";

fetchApi("https://dummyjson.com/products")
    .then(data => {
        let htmls = "";
        data.products.forEach(item => {
            htmls += `
                <div class="product-item">
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                </div>
            `;
        });
        const divProducts = document.querySelector("#products");
        divProducts.innerHTML = htmls;
    })

// //Get Category
// fetchApi("https://dummyjson.com/products/categories")
//     .then(data => {
//         let htmls = "";
//             data.forEach(item => {
//                 htmls += `
//                     <div class="category-item">${item}</div>
//                 `;
//             });
//             console.log(htmls);
//             const divCategory = document.querySelector("#category");
//             divCategory.innerHTML = htmls;
//     })
// //End Get Category