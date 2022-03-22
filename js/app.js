function getContent(fragmentId, callback) {
  let pages = {
    home: "This is the home page",
    about: "This is the about page",
    contact: "This is the contact page"
  };

  let content = callback(pages[fragmentId] || "Page not found");

  return content;
}

function loadContent() {
  let contentDiv = document.getElementById("app");
  let fragmentId = location.hash.substr(1);
  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });
}

// Default hash
if (!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);
