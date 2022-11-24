/*  Projet OpenClassrooms n°07
    Agence immobilière KASA
    par Manuel MILLET 24 novembre 19h00
*/
// Collapse

import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/Collapse.css'

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false,};
    this.updateIsOpen = this.updateIsOpen.bind(this);
  }
  updateIsOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const collapseIcon = `fas fa-chevron-${this.state.isOpen ? 'up' : 'down'}`;

    return (
      <section className='wrappercollapse'>
        <div className={ `collapse${this.state.isOpen ? ' is-open' : ' is-close'}` }>
          <button className='collapse-title' onClick= {this.updateIsOpen }>
            <span>{ this.props.title }</span>
            <span className={ collapseIcon }></span>
          </button>
          <ul className={`collapse-text ${this.state.isOpen ? 'is-open' : 'is-close'}`}>
            {this.props.textArray.map((item, index) => (
              <li key={`item-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Collapse