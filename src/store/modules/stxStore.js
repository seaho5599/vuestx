import axios from "axios";

const state = {
     // gnb 메뉴
  gnbData: [],
  noticeData: [],
  newsData: []

};
const actions = {

  fetchGnb({commit}) {
    axios.get('/data/gnb.json')
    .then(response =>{
      commit('GNB_INIT', response.data)
    })
    .catch(err => console.log(err))
  },

  fetchNews({commit}) {
    axios.get('/data/news.json')
    .then(response => {
      commit('NEWS_INIT', response.data)
    })
    .catch(err => console.log(err))
  },

  fetchNotice({commit}) {
    axios.get('/data/notice.json')
    .then(response => {
      commit('NOTICE_INIT', response.data)
    })
    .catch(err => console.log(err))
  }

};
const mutations = {
  GNB_INIT(state, payload){
    state.gnbData = payload
  },
  NEWS_INIT(state, payload){
    state.newsData = payload
  },
  NOTICE_INIT(state, payload){
    state.noticeData = payload
  }
};
const getters = {
  getGnbData(state){
    return state.gnbData
  },
  getNoticeData(state){
    return state.noticeData
  },
  getNewsData(state){
    return state.newsData
  }
};

export default {state, actions, mutations, getters}