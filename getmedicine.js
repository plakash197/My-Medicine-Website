import axios from 'axios';

function getmedicine(query, sku) {
  const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${query || sku}"&limit=1`;

  const data = axios.get(url);
  return data;
}

export default getmedicine;

export function getimage(searchName , sku) {
  const pic = axios.get(`https://api.unsplash.com/search/photos?query=${searchName || sku}_medicine&client_id=Pni4Dv_fOChQT6EISXC9wPFp0aMkuOK5XcJD8s_SKk8&per_page=1`);
  return pic;
}
