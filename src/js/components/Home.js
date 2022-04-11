// import utils from "../utils.js";
// import { classNames, select, templates } from "../settings.js";

// class Home {
//   constructor(html, data) {
//     const thisHome = this;

//     thisHome.data = data;

//     thisHome.render();
//     thisHome.initWidgets();
//     thisHome.initCategories();
//   }

//   render() {
//     const thisHome = this;

//     const generatedHTML = templates.home();

//     thisHome.element = utils.createDOMFromHTML(generatedHTML);

//     const homeContainer = document.querySelector(select.containerOf.home);

//     homeContainer.appendChild(thisHome.element);
//   }

//   // initWidgets() {
//   //   GreenAudioPlayer.init({
//   //     selector: ".player",
//   //     stopOthersOnPlay: true,
//   //   });
//   // }

//   initCategories() {
//     const thisHome = this;

//     let allCategories = [];

//     for (let data of thisHome.data) {
//       for (let category of data.categories) {
//         if (!allCategories.includes(category)) {
//           allCategories.push(category);
//         } else {
//           const idIndex = allCategories.indexOf(category);
//           allCategories.splice(idIndex, 0);
//         }
//       }
//     }

//     console.log('allCategories', allCategories);

//     for (let singleCategory of allCategories) {
//       thisHome.categoryElement = utils.createDOMListFromHTML(
//         `<a href="#" link-category="'{singleCategory}'"> ${singleCategory} </a>`
//       );
//       console.log('thisHome.categoryElement', thisHome.categoryElement);
//       thisHome.categoryContainer = document.querySelector(
//         select.containerOf.categoriesContainer
//       );
//       thisHome.categoryContainer.appendChild(thisHome.categoryElement);
//     }

//     thisHome.categoryContainer.addEventListener('click', function (event) {
//       event.preventDefault();

//       const clickedElement = event.target;

//       thisHome.playerWrapper = document.querySelectorAll(select.players.homeWrapper);
//       thisHome.categoryLink = document.querySelectorAll(
//         select.filter.linkCategory
//       );

//       if (clickedElement != null) {
//         for (let link of thisHome.categoryLink) {
//           if (link.classList.contains(classNames.elements.clicked)) {
//             link.classList.remove(classNames.elements.clicked);
//             for (let wrapper of thisHome.playerWrapper) {
//               wrapper.classList.remove(classNames.elements.hidden);
//             }
//           } else if (
//             link
//               .getAttribute('link-category')
//               .includes(clickedElement.getAttribute('link-category'))
//           ) {
//             link.classList.add(classNames.elements.clicked);

//             for (let wrapper of thisHome.playerWrapper) {
//               wrapper.classList.remove(classNames.elements.hidden);

//               const element = wrapper.querySelector(
//                 select.filter.dataCategories
//               );

//               if (
//                 !element
//                   .getAttribute('data-categories')
//                   .includes(
//                     clickedElement.getAttribute('link-category').toLowerCase()
//                   )
//               ) {
//                 wrapper.classList.add(classNames.elements.hidden);
//               }
//             }
//           }
//         }
//       }
//     });
//   }
// }
// export default Home;
