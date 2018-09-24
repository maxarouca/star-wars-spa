import React, { Component } from 'react'
import axios from 'axios'

class Detalhes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      details : {}
    }
  }
  
  componentDidMount(){
    // axios.get(url).then(res => {
    //   this.setState(details= res.data)
    // })
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    )
  }
}

export default Detalhes