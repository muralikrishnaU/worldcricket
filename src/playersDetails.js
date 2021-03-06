import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './styles.css';
class PlayersDetails extends Component {
  render(){
    return(      
      <div className="player">
          <div className="player-image">
            <img src={this.props.playerImage}/>
          </div>
          <h4 className="player-name">{this.props.playerName}</h4>
          <h4 className="player-role">{this.props.playerRole}</h4>
          <div className="player-country-image">
            <img src={this.props.playerCountry}/>
          </div>
          {
              this.props.isAddedToCart ? 
              <div className="player-action">
                  <button onClick={()=>{ this.props.handleAddToCartInPlayers(this.props.playerId) }}  className="added" type="button"> Remove </button>
              </div> :
              <div className="player-action">
                  <button onClick={()=>{ this.props.handleAddToCartInPlayers(this.props.playerId) }}  className="added" type="button"> Add to cart </button>
              </div>
            }
      </div>
    )
  }
}

PlayersDetails.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerRole: PropTypes.string,
  playerImage:PropTypes.string,
  playerCountry:PropTypes.string
}
PlayersDetails.defaultProps= {
  playerName:"Name Not Found"
}

export default PlayersDetails