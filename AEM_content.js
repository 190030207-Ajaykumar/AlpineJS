const fetchPageData = async () => {
  const response = await fetch("https://author-p92368-e968987.adobeaemcloud.com/content/concentrixpartnersandboxprogram/us/en.model.json");
  const data = await response.json();
  console.log(data);
};
fetchPageData();