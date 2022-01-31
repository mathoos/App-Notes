// Le bouton pour ajouter des cards
const addBtn = document.getElementById("add");


// Création de l'écouteur d'évènement qui est relié à une fonction 
addBtn.addEventListener("click", () => {
  addNewNote();
});

function addNewNote(text = ""){

  var cards = document.getElementById("cards");
  

  const ajout = document.createElement("div");
  ajout.classList.add("card");
  ajout.innerHTML = `
  
    <div class="up">
      <textarea class="title" placeholder="Titre" maxlength="25" rows="1"></textarea>
      
      
      <div class="delete">X</div>
    </div>
    <div class="middle">
      <div class="main ${text ? "" : "hidden"}"></div>          
      <textarea autofocus placeholder="Hey !" class="textArea${text ? "hidden" : ""}"></textarea>
    </div>
    <div class="down">
      <div class="color" id="purple"></div>
      <button class="edit">Enregistrer</button>
    </div>

    
  
  `;

  const editBtn = ajout.querySelector(".edit");
  const deleteBtn = ajout.querySelector(".delete");

  const main = ajout.querySelector(".main");
  const textArea = ajout.querySelector(".textArea");

  textArea.value = text;
  main.innerHTML = marked(text);

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
    if(editBtn.innerHTML === "Enregistrer"){
      editBtn.innerHTML = "Modifier";
    }
    else{
      editBtn.innerHTML = "Enregistrer";
    }
  });

  deleteBtn.addEventListener("click", () => {
    ajout.remove();

  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

  });

  
  cards.appendChild(ajout);

}

  



/*
// Création de la fonction
function addNewNote() {  
  var card = document.querySelectorAll(".card").length;
  card++;
  cards.innerHTML += `
  <div class="card">
    <div class="up">
      <textarea class="title" placeholder="Titre" maxlength="25" rows="1">Titre</textarea>
      <div class="colors">
        <div class="color" id="orange"></div>
        <div class="color" id="pink"></div>
        <div class="color" id="blue"></div>
      </div>
      <div class="delete">X</div>
    </div>
    <textarea class="note" placeholder="Salut les prouts !"></textarea>
  </div>`;

  
}


  


*/


