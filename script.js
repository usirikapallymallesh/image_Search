console.log("connection of html");
let accessKey = "sRMN4EXG-Rqtg5xkgnFvvxRbXpTvvo3jDMkqOy56nJY";

let btn2 = document.getElementById("show-more-button");
btn2.style.display = "none";
let page = 1;

async function searchImage(event) {
  let container = document.querySelector(".resultContainer");
  if (page === 1) {
    container.innerHTML = "";
  }
  let inputData = document.querySelector("#search").value;
  // console.log(inputData);
  await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .then((image) => {
      image.forEach((element) => {
        let imageDesc = element.alt_description;
        let imageUrl = element.urls.small;

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", imageUrl);
        // console.log(image.getAttribute("src"));
        div.append(image, imageDesc);
        container.append(div);

        btn2.innerText = "click for more";
        btn2.style.display = "block";
        container.appendChild(btn2);
        page++;
      });
    });
  btn2.addEventListener("click", () => {
    // event.preventDefault();
    searchImage();
    console.log("hiel");
  });

  // .catch((error)=>{
  //     alert("Error is occurred while loading page..")
  // })

  // .then(data=>console.log(data))
}
// let submitBtn=document.getElementsByName("form");
// submitBtn.addEventListener("submit", (event) => {
//     event.preventDefault();
//     searchImage();
//   });
