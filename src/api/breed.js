import request from '@/utils/request'
import data from './master-data/breeds_all'
export function getListBreedAll() {
  return new Promise((resolve) => resolve(data))
}

export function getBreedAvartar(name_breed_include_sub_breed_name) {
  let dog_breed = name_breed_include_sub_breed_name
    .split("-")
    .reverse()
    .join("/");
  return request({
    url: `https://dog.ceo/api/breed/${dog_breed}/images/random`,
    method: 'get'
  })
}

export function getBreedGallery(name_breed_include_sub_breed_name) {
  let dog_breed = name_breed_include_sub_breed_name
    .split("-")
    .reverse()
    .join("/");

  return request({
    url: `https://dog.ceo/api/breed/${dog_breed}/images/`,
    method: 'get'
  })
}