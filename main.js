const ducks = [
    {
        color: "brown",
        isRubber: true,
        gender: "male",
        isMigrator: false,
        socialStatus: "ready to mingle",
        diet: "vegan",
        age: 47,
        featherNum: 0,
        name: "Steve",
        img: "data:image/jpeg;base64,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"
    },
    {
        color: "brown",
        isRubber: false,
        gender: "male",
        isMigrator: true,
        socialStatus: "ready to party",
        diet: "carnivore",
        age: 30,
        featherNum: 100,
        name: "Bob",
        img: "data:image/jpeg;base64,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"
    },
    {
        color: "blue",
        isRubber: true,
        gender: "male",
        isMigrator: false,
        socialStatus: "in a relationship",
        diet: "omnivore",
        age: 25,
        featherNum: 0,
        name: "Frank",
        img: "https://images-na.ssl-images-amazon.com/images/I/31Fx9%2BgTPBL.jpg"
    },
    {
        color: "green",
        isRubber: false,
        gender: "male",
        isMigrator: true,
        socialStatus: "in a relationship",
        diet: "carnivore",
        age: 40,
        featherNum: 200,
        name: "Phil",
        img: "https://live.staticflickr.com/3115/3179800771_e0f22306b9_b.jpg"
    },
    {
        color: "blue",
        isRubber: true,
        gender: "male",
        isMigrator: false,
        socialStatus: "ready to party",
        diet: "vegan",
        age: 20,
        featherNum: 0,
        name: "John",
        img: "https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/884/9637/Turquoise-Blue-Rubber-Duck-Adline-7__79869.1568313332.jpg?c=2&imbypass=on"
    },
    {
        color: "green",
        isRubber: false,
        gender: "female",
        isMigrator: true,
        socialStatus: "ready to mingle",
        diet: "omnivore",
        age: 35,
        featherNum: 150,
        name: "Beatrice",
        img: "https://www.thespruce.com/thmb/qbvIbjpE85s8godsqmKCpa_cjto=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/mallard7-59511da25f9b58f0fc6602b9.jpg"
    },
    {
        color: "blue",
        isRubber: true,
        gender: "female",
        isMigrator: false,
        socialStatus: "ready to party",
        diet: "omnivore",
        age: 27,
        featherNum: 0,
        name: "Susan",
        img: "data:image/jpeg;base64,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"
    },
    {
        color: "green",
        isRubber: true,
        gender: "female",
        isMigrator: false,
        socialStatus: "ready to mingle",
        diet: "vegan",
        age: 47,
        featherNum: 0,
        name: "Tracy",
        img: "https://cdn11.bigcommerce.com/s-nf2x4/products/503/images/10447/Green-Rubber-Duck-Ad-Line-3__60140.1569352483.560.850.jpg?c=2"
    }
];

const printToDom = (element, string) => {
    document.getElementById(element).innerHTML = string;
}

const duckPrinter = (arr) => {
    let domString = "";
    for (let i = 0; i < arr.length; i++) {
        domString += `
    <div class="col-md-3 col-lg-3 big-card">
        <div class="card">
            <img class="card-img-top img" src="${arr[i].img}" alt="Card image cap">
            <div class="card-body body">
                <h5 class="card-title name">${arr[i].name}</h5>
                <p class="card-text">${arr[i].socialStatus}</p>
                <p class="card-text">${arr[i].diet}</p>
                <p class="card-text">${arr[i].gender}</p>
            </div>
        </div>
    </div>`;
    }
    printToDom("root", domString);
}

const chooseColor = (e) => {
    const selectedDucks = [];
    let buttonId = e.target.id;
    for (let i = 0; i < ducks.length; i++) {
        if (ducks[i].color === buttonId) {
            selectedDucks.push(ducks[i]);
        }
        duckPrinter(selectedDucks);
    }
}

const chooseGender = (e) => {
    const selectedDucks = [];
    let buttonId = e.target.id;
    for (let i = 0; i < ducks.length; i++) {
        if (ducks[i].gender === buttonId) {
            selectedDucks.push(ducks[i]);
        }
        duckPrinter(selectedDucks);
    }
}

const chooseRubber = () => {
    const selectedDucks = [];
    for (let i = 0; i < ducks.length; i++) {
        if (ducks[i].isRubber) {
            selectedDucks.push(ducks[i]);
        }
        duckPrinter(selectedDucks);
    }
}

const events = () => {
    document.getElementById("blue").addEventListener("click", chooseColor);
    document.getElementById("brown").addEventListener("click", chooseColor);
    document.getElementById("green").addEventListener("click", chooseColor);
    document.getElementById("female").addEventListener("click", chooseGender);
    document.getElementById("male").addEventListener("click", chooseGender);
    document.getElementById("rubber").addEventListener("click", chooseRubber);
}

const init = () => {
    duckPrinter(ducks);
    events();
}

init();



