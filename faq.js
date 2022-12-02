const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

const faqs = [];

for (let i=0; i<faqData.length; i++){
  
  createFaq(i)
}

function createFaq(questionNumber) {
  
  /* creating div which contains question & + icon & answer */

      //<div class="faq">  </div>
   let totalQuestionBlock = document.createElement("div");
   totalQuestionBlock.classList.add("faq");
  
   

  /*  creating total header */

      // <div class="faq_header"> </div>
   let totalHeader = document.createElement("div");
   totalHeader.setAttribute("class","faq_header");



  /* creating heading - faq question */

      //  <div class="faq_header">
      //      <h3> faq question </h3>
      //  </div>
   let heading = document.createElement("h3");
   let headingContent = document.createTextNode((faqData[questionNumber]).question);
   heading.appendChild(headingContent);
   totalHeader.appendChild(heading);
   
  //  creating + button
  var faqButton = document.createElement("div");
  faqButton.classList.add("show_btn");
  let faqButtonContent = document.createTextNode("+");
  faqButton.style.fontSize = "14px";
  faqButton.style.fontWeight = "900";
  faqButton.style.textAlign = "center";
  faqButton.appendChild(faqButtonContent);

  totalHeader.appendChild(faqButton);

  totalQuestionBlock.appendChild(totalHeader);


  var faqAnswer = document.createElement("p");
  let paraContent = document.createTextNode((faqData[questionNumber]).answer);
  faqAnswer.appendChild(paraContent);

  totalQuestionBlock.appendChild(faqAnswer);

  faqAnswer.classList.add("hidden");

  faqButton.addEventListener("click", () => {
    faqAnswer.classList.remove("hidden")
    count = 1;
  })

  var count = 0;
  
  faqButton.addEventListener("click", btnStatusUpdate)

  return accordianBody.appendChild(totalQuestionBlock)
}

function showFaq() {
  
  
  // return totalQuestionBlock.appendChild(faqAnswer);
}

function btnStatusUpdate() {
  if(count==0){
  count = 1;
  faqAnswer.classList.remove("hidden");
  faqButton.addEventListener("click", btnStatusUpdate)
  
  }
  else{
  count = 0;
  faqAnswer.classList.add("hidden");
  faqButton.addEventListener("click", btnStatusUpdate)
  }
}


