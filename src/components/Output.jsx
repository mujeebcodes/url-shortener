import React from 'react'

const Output = ({output}) => {
  return (
    <div>
      {output ? (
        <article>
          <h3>Request successful. Your short url is: </h3>
        <p>{output} </p>
        </article>
      ) : <p>Please provide a valid URL ...</p>
      }
    </div>
  )
}

export default Output