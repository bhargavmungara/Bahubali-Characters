import {expect} from 'chai'
import bahubaliNames from '.'

describe('bahubali-names', () => {
  it('should have a list of all available names', () => {
    expect(bahubaliNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(bahubaliNames.random()).to.satisfy(isIncludedIn(bahubaliNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
