import React from 'react'

export const Counter = () => {
  const [num, setNum] = React.useState(11)
  const handleClick = () => {
    setNum(num + 1)
  }

  // Componentがマウントされたり、何かstate変数が変わった時
  React.useEffect(() => {
    console.log('🐈 something changed!!')
  })
  // Componentがマウントされたタイミング
  React.useEffect(() => {
    console.log('🦊 mounted!!')
  }, [])
  // numが変わった時
  React.useEffect(() => {
    console.log(`🐩 num was changed to ${num}`)
  }, [num])

  return (
    <>
      <div>number: {num}</div>
      <button onClick={handleClick}>+1</button>
    </>
  )
}
