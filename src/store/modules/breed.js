import { getListBreedAll } from '@/api/breed'
const default_avartar = require('../../assets/images/dog_grey.svg')

const state = {
  filter_key: '',
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
  },
  UPDATE_FILTER_KEY(state, filter_key) {
    state.filter_key = filter_key;
  }
}

const getters = {
  get_dogs_by_filter_key: state => {
    if (state.items.length) {
      return state.items.filter( 
        item =>
          item.code
            .toLowerCase()
            .includes(state.filter_key.toLowerCase().trim()) === true
      );
    }
    return [];
  }
}
const actions = {
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      getListBreedAll().then(response => {
        commit('SET_ITEMS', response)
        resolve(response)
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
  },
  update_filter_key({commit}, filter_key){
    commit('UPDATE_FILTER_KEY', filter_key)
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}