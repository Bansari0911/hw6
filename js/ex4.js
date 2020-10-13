var appendNewItemToList = () => {
  const ul = document.getElementsByTagName("ul").item(2);
  const newLi = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.innerHTML = "College of Business";
  anchor.setAttribute("href", "https://www.csulb.edu/college-of-business");
  newLi.appendChild(anchor);
  ul.insertBefore(newLi, ul.childNodes[2]);
};

appendNewItemToList();
