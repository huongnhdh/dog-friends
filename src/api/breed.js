import request from '@/utils/request'
import data from './master-data/breeds_all.json'

export function getListBreedAll() {
  return new Promise((resolve) => resolve(data))
}

export function fetchDetailBreed(breed_code) {
  return new Promise((resolve, reject) => {
    const item = data.find(curent_value => curent_value.code = breed_code)
    if (item === undefined || item === null ) reject('BREED_NOT_FOUND')
    else resolve(item)
  })
}

export function getBreedGallery(breed_code) {
  let dog_breed = breed_code
    .split("-")
    .reverse()
    .join("/");

  return request({
    url: `https://dog.ceo/api/breed/${dog_breed}/images`,
    method: 'get'
  })
}