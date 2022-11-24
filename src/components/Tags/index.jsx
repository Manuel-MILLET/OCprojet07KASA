/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 24 novembre 19h00
*/

// TAGS

import React from 'react'
import '../../styles/Tag.css'

function Tags ({ getTag }) {
  return (
    <div className="tag-box">
      <p className="tag-text">{getTag}</p>
    </div>
  )
}

export default Tags