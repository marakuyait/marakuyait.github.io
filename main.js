document.addEventListener("DOMContentLoaded", function () {
  const feauturesBtn = document.getElementById("btn-features");
  const capabilitiesBtn = document.getElementById("btn-capabilities");
  const practicesBtn = document.getElementById("btn-practices");

  const tabContent = document.getElementById("tab-content");

  const removeActive = function () {
    feauturesBtn.classList.remove("active");
    capabilitiesBtn.classList.remove("active");
    practicesBtn.classList.remove("active");
    updateTabContent(features[selectedTabIndex]);
  };

  const features = [
    //features
    [
      "Use Descriptive Variable and Function Names",
      "Keep Functions Small and Focused",
      "Prefer const and let over var",
      "Avoid Global Variables",
      "Write Modular Code",
    ],
    //capabilities
    [
      "Asynchronous Programming",
      "DOM Manipulation",
      "Event Handling",
      "Frameworks and Libraries",
      "APIs and AJAX",
    ],

    //practices
    [
      "Use Meaningful and Consistent Naming Conventions",
      "Keep Functions Short and Focused",
      "Avoid Global Variables",
      "Use Promises or Async/Await for Asynchronous Code",
      "Write Unit Tests",
    ],
  ];

  let selectedTabIndex = 0;

  const updateTabContent = (featuresArg) => {
    const list = document.createElement("ul");
    let listContent = "";
    featuresArg.forEach((feature) => {
      listContent += `<li>${feature}</li>`;
    });
    list.innerHTML = listContent;
    tabContent.innerHTML = "";
    tabContent.appendChild(list);
  };

  updateTabContent(features[selectedTabIndex]);

  feauturesBtn.addEventListener("click", function () {
    selectedTabIndex = 0;
    removeActive();
    feauturesBtn.classList.add("active");
  });
  capabilitiesBtn.addEventListener("click", function () {
    selectedTabIndex = 1;

    removeActive();
    capabilitiesBtn.classList.add("active");
  });

  practicesBtn.addEventListener("click", function () {
    selectedTabIndex = 2;
    removeActive();
    practicesBtn.classList.add("active");
  });
});
