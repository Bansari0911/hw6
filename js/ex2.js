const displayText400 = () => {
  const nodes = document.getElementsByClassName("400level");
  for (let node of nodes) {
    console.log(node.textContent);
  }
};

displayText400();
