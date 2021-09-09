import React, {useEffect} from 'react'

const Title = (props) => {

  const title = props.title
  useEffect(() => {
    document.title = title
  },[title])
  console.log(title)
  return <div></div>
}

export default Title