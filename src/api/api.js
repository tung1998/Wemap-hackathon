import axios from 'axios' //library(copy)

export {
  getLocationByCoordinates
}

// let BASE_USER = `${process.env.BASE_URL}/`
let BASE_USER = `https://apis.wemap.asia/we-tools/reverse?key=ZpIVSmYKNucNvxlHgRFRVBuj&lat=21.5&lon=105.5`



//call api
function getLocationByCoordinates(lat, lon) {
  console.log(lat, lon)
  let url = `https://apis.wemap.asia/we-tools/reverse?key=ZpIVSmYKNucNvxlHgRFRVBuj&lat=${lat}&lon=${lon}`
  return axios.get(url)
}
