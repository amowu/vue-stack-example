import {
  SET_CURRENT_HERO,
  UPDATE_HERO_ATTRIBUTE
  } from '../types'

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

export const setCurr = makeAction(SET_CURRENT_HERO)
export const updateAttr = makeAction(UPDATE_HERO_ATTRIBUTE)
