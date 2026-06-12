import axios from 'axios';

function getmedicine(query, sku) {
  const searchValue = encodeURIComponent(query || sku || '');
  const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${searchValue}"&limit=1`;

  const data = axios.get(url);
  return data;
}

export default getmedicine;

export function getimage(searchName , id) {
  const safeSearchName = encodeURIComponent(searchName || id || 'medicine');
  const pic = axios.get(`https://api.unsplash.com/search/photos?query=${safeSearchName}_medicine&client_id=Pni4Dv_fOChQT6EISXC9wPFp0aMkuOK5XcJD8s_SKk8&per_page=1`);
  return pic;
}

export function getDetils(sku) {
  const api_details = axios.get(`https://api.fda.gov/drug/label.json?search=set_id:${sku}`)

  return api_details;
}