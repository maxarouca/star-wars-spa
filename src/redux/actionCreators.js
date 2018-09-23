import { createActions } from 'reduxsauce'

export const {
  Types,
  Creators
} = createActions({
  loadPeoplesRequest: [],
  loadPeoplesSuccess: ['data'],
  loadPlanetsRequest: [],
  loadPlanetsSuccess: ['data'],
  loadStarshipsRequest: [],
  loadStarshipsSuccess: ['data'],
})

export default Creators;