document.addEventListener("DOMContentLoaded", () => {
    let div = document.querySelector(".main");
    let h1 = document.querySelector(".h1");

    setTimeout(() => {

        fetch("https://fakestoreapi.com/products").then(res => (res.json())).then(product => {

            product.forEach(element => {
                console.log(element);
                let child = document.createElement("div");

                child.innerHTML = `<img src="${element.image}" alt="${element.title}">`


                // let title = document.createElement("h3");
                // title.innerText = element.title;


                // child.append(title);
                // console.log(child);

                div.append(child);

            });
            h1.style.display = "none";
        })

    }, 1000)
});

