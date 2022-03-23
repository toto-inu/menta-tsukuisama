import React from 'react'

export const Item = ({ content }) => {
  return (
    <div key={content.id}>
      <h3>{content.title}</h3>
      <p>レビュー★: {content.review}</p>
    </div>
  )
}
