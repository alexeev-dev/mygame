export const MARKETPLACE_FETCH_UNICORNS = 'MARKETPLACE_FETCH_UNICORNS'
export const MARKETPLACE_UPDATE_FILTER = 'MARKETPLACE_UPDATE_FILTER'

export const updateFilter = (filter, value) => ({
  type: MARKETPLACE_UPDATE_FILTER, filter, value
})
