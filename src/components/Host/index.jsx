/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 24 novembre 19h00
*/
// HOST

import React from 'react'
import '../../styles/Host.css'

function Host ({ host }) {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className="host">
      <div className="host-name">
        <p className="host-firstname">{name.trim()}</p>
        <p className="host-lastname">{lastname.trim()}</p>
      </div>
      <img src={host.picture} alt="identité de la personne host" className="host-thumb" />
    </div>
  )
}

export default Host