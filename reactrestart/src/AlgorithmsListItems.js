import React, { Component } from 'react';
import DeleteAlgorithm from './DeleteAlgorithm';
import AddDefaultAlgorithms from './AddDefaultAlgorithms';
import UpdateAlgorithm from './UpdateAlgorithm';
class AlgorithmsListItems extends Component {



  render() {
    return (
      <div>
        <div>
          <li key={`aMyKey`}>
            <a>Algorithm Name : {this.props.name} Moves : {this.props.moves} Scramble : {this.props.scramble}
              <a>
                <DeleteAlgorithm algID={this.props.algID} />
              </a>
              <a>
                <UpdateAlgorithm algID={this.props.algID} />
              </a>

            </a>
          </li>
        </div>
      </div>
    );
  }



}

export default AlgorithmsListItems;