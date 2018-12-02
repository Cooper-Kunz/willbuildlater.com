import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginTop: rhythm(2.5),
          textAlign: 'center',
        }}
      >
        <p>
          Website and initial ideas by <a href="https://cooperkunz.com">Cooper Kunz</a>, follow
          him on <a href="https://twitter.com/cooper_kunz">Twitter</a>, or{' '}
          <a href="https://github.com/cooper-kunz">GitHub</a>. Ideas are free for 
          those who can implement them.
        </p>
      </div>
    )
  }
}

export default Bio
