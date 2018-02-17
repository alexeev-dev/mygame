import React from 'react'
import {connect} from 'react-redux'

import UnicornCard from '../../common/UnicornCard'

const mapStateToProps = (state) => ({
  items: [{
    id: 153330988,
    dna: 8890509998,
    name: 'Mr. Incredible Unicorn',
    price: 0.042,
    reproduction: {
      type: 'extra',
      price: 0.00093
    },
    popularity: 23.4453,
    generation: 1,
    tags: ['Nice', 'Gute', 'Usual', 'Just', 'Angry'],
    stats: {strenth: 2, agility: 1, speed: 5, intelligence: 7, charisma: 2},
    owner: {
      name: 'Alex Alexeev',
      url: '/alex_alexeev'
    },
    country: 'USA',
    counters: {
      likes: 50,
      views: 150,
      comments: 20
    }
  }, {
    id: 153330990,
    dna: 8890677998,
    name: 'Testable unicorn',
    price: 0.082,
    reproduction: {
      type: 'extra',
      price: 0.00052
    },
    popularity: 203.51,
    generation: 3,
    tags: ['Nice', 'Gute', 'Usual', 'Just', 'Angry'],
    stats: {strenth: 2, agility: 1, speed: 5, intelligence: 7, charisma: 2},
    owner: {
      name: 'Fe Shallow',
      url: '/fe_shallow'
    },
    country: 'RU',
    counters: {
      likes: 1,
      views: 500,
      comments: 4
    }
  }]
})

const UnicornsList = ({items}) => (
  <div className="col-md-10">
    <div id="container-mix"  className="row _post-container_">
      {items.map((unicorn) => (
        <div key={unicorn.id} className="category-1 mix custom-column-5">
          <UnicornCard unicorn={unicorn} />
        </div>
      ))}
    </div>
  </div>
)

export default connect(mapStateToProps)(UnicornsList)
