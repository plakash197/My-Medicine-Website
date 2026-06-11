import axios from 'axios';

function getmedicine(query, sku) {
  const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${query || sku}"&limit=1`;

  const data = axios.get(url);
  return data;
}

export default getmedicine;

export function getimage(searchName , sku) {
  const apiKey = 'AIzaSyAONuNHNm8jRA_WTor-g7sM7cUsxeAVzC0';
  const engineId = "040cc8f683cc14f82";
  const googleUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineId}&q=${searchName || sku}&searchType=image&num=1`;


  const pic = axios.get(googleUrl);
  return pic;
}
