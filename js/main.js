
// global variable
const milestonsData = JSON.parse(data).data;
// console.log(milestoneAllData);

// load coure milestons data

function loadmilestone() {
    const milestones = document.querySelector('.milestones');
    console.log(milestones);

    milestones.innerHTML = `${milestonsData.map((milestone) => {
        return `<div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onclick="openMilestone(this, ${milestone._id})">
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules.map((module) => {
            return `
                <div class="module border-b">
                <p>${module.name}</p>
              </div>`
        }).join("")}
            </div>
          </div>`
    }).join("")}`;
}

// open milestone 

function openMilestone(milestoneElement, id) {
    const curentPannel = milestoneElement.parentNode.nextElementSibling;
    const shownPannel = document.querySelector(".show");
    const active = document.querySelector(".active");

    // first remove previcious active class 
    if (active && !milestoneElement.classList.contains("active")) {
        active.classList.remove("active");
    }

    milestoneElement.classList.toggle("active");

    // first remove shownPannel active class 
    if (!curentPannel.classList.contains("show") && shownPannel) {
        shownPannel.classList.remove("show");
    }

    curentPannel.classList.toggle("show");

    showMilestone(id);
}

function showMilestone(id) {
    const milestoneImage = document.querySelector(".milestoneImage");
    const name = document.querySelector(".title");
    const ditails = document.querySelector(".details");

    milestoneImage.style.opacity = "0";

    milestoneImage.src = milestonsData[id].image;
    name.innerText = milestonsData[id].name;
    ditails.innerText = milestonsData[id].description;
}

// image load
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function(){
    this.style.opacity = "1";
}
if (milestoneImage.complete) {
  console.log("Image already loaded ✅");
}


loadmilestone();