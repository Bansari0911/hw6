const changeParagraphStyles = () => {
  let ps = document.getElementsByTagName("p");
  for (let p of ps) {
    p.style.background = "yellow";
    p.style.fontWeight = "bold";
  }
};

changeParagraphStyles();
