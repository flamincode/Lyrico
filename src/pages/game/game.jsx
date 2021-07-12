import React from 'react'
import { Songs } from '../../songs'

class GamePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{Songs.map((data) => {
        return (
          <div key={data.number}>
            {data.lyric}
          </div>
        )
      })}</div>
    )
  }

}

export default GamePage