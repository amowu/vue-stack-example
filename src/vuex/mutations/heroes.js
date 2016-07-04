import {
  SET_CURRENT_HERO,
  UPDATE_HERO_ATTRIBUTE
} from '../types'

// 創建一個 state 物件，用來保存 heroes 的初始資料與狀態
const state = {
  current: {
    heroId: null,
    totalPoints: 0
  },
  entities: {
    '1': {
      'id': '1',
      'name': 'Daredevil',
      'image': 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
      'attrs': {
        'str': 2,
        'int': 7,
        'agi': 9,
        'luk': 7
      }
    },
    '2': {
      'id': '2',
      'name': 'Thor',
      'image': 'http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
      'attrs': {
        'str': 8,
        'int': 2,
        'agi': 5,
        'luk': 9
      }
    },
    '3': {
      'id': '3',
      'name': 'Iron Man',
      'image': 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
      'attrs': {
        'str': 6,
        'int': 9,
        'agi': 6,
        'luk': 9
      }
    },
    '4': {
      'id': '4',
      'name': 'Hulk',
      'image': 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
      'attrs': {
        'str': 10,
        'int': 1,
        'agi': 4,
        'luk': 2
      }
    }
  }
}

// 創建一個 mutations 物件，用來保存一系列 heroes 相關的 mutation 函式
const mutations = {
  [SET_CURRENT_HERO] (state, heroId, attrs) {
    const totalPoints = Object.keys(attrs).reduce((sum, key) => sum + attrs[key], 0)
    state.current = {
      heroId,
      totalPoints
    }
  },
  [UPDATE_HERO_ATTRIBUTE] (state, heroId, attr, newVal) {
    state.entities[heroId].attrs[attr] = newVal
  }
}

export default {
  state,
  mutations
}
