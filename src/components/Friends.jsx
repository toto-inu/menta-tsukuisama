import React from 'react'

export const Friends = ({ data }) => {
  return (
    <>
      {data.map((friend) => {
        return (
          <ul key={friend.id}>
            <li>名前: {friend.name}</li>
            <li>年齢: {friend.age}</li>
            {/* ここの書き方はやってませんでしたが、データの有無チェックは以下の2種類の書き方があります */}
            {friend.hobby && <li>趣味: {friend.hobby}</li>}
            {friend.hobby ? <li>趣味: {friend.hobby}</li> : null}
          </ul>
        )
      })}
    </>
  )
}
