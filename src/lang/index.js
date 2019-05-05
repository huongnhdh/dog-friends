import Vue from 'vue'
import VueI18n from 'vue-i18n'
import vn from './vi';
import en from './en';

Vue.use(VueI18n)
const messages = {
    "en-US": {
      ...en
    },
    "vi-VN": {
     ...vn
    }
  }

const _get_default_locate = function(langs){
    const locate =  window.navigator.language || window.navigator.userLanguage;
    return  langs.includes(locate) ? locate : "en-US";
}

const i18n = new VueI18n({
    locale: _get_default_locate(Object.keys(messages)),
    messages,
})


export default i18n;