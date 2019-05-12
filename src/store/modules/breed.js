import { getListBreedAll } from '@/api/breed'
import breeds from './breed_list';
const default_avartar = require('../../assets/images/dog_grey.svg')

const state = {
  list: breeds,
  items: {}, // name with url  
  item: {
    name: '',
    avatar: '',
    introduction: '',
    imgs: []
  }
}

const mutations = {
  SET_ITEM: (state, { name, introduction, imgs}) => {
    state.item = {
      name,
      introduction,
      imgs,
      avatar: imgs[0] || require(`../../assets/images/dog_grey.svg`)
    }
  },
  SET_ITEMS: (state, items) => {
    state.items = items
  },
  SET_ITEMS_DETAIL: (state, {name, url}) => {
    state.items[name] = url
  }
}

const actions = {
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      getListBreedAll().then(response => {
        const { data } = response
        if (!data) {
          reject(`Verification failed, Server Error`)
        }
        let dog_breeds = {};
        const _dog_breeds = data.message;
        Object.keys(_dog_breeds).forEach(function(key) {
          if (_dog_breeds[key].length === 0){
             dog_breeds.push(key)
          }else{
            _dog_breeds[key].forEach((k) => {
              
             dog_breeds[`${k}-${key}`] = default_avartar
            })
          }
        });
        commit('SET_ITEMS', dog_breeds)
        resolve(dog_breeds)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getDetailBreed({commit, state}){
    return new Promise((resolve, reject) => {
      getListBreedAll(state.item.name).then(response => {
        const { data } = response
        if (!data) {
          reject(`Verification failed, Server Error`)
        }
        let dog_breeds = {};
        const _dog_breeds = data.message;
        Object.keys(_dog_breeds).forEach(function(key) {
          if (_dog_breeds[key].length === 0){
             dog_breeds.push(key)
          }else{
            _dog_breeds[key].forEach((k) => {
              
             dog_breeds[`${k}-${key}`] = default_avartar
            })
          }
        });
        commit('SET_ITEMS', dog_breeds)
        resolve(dog_breeds)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}