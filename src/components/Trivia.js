import React from 'react';
import './trivia.css';

let trivias = [
  {
    trivia:
    'The U.S. Energy Information Administration estimates that in 2017,  the global emissions of energy-related carbon dioxide totaled 32.5 billion metric tons.',
    link:
      'https://webknox-jokes.p.rapidapi.com/jokes/search?category=Earth&minRating=0&numJokes=5&keywords=earth'
  },
  {
    trivia:
      'How is climate change altering precipitation in the U.S.? - Increase in both wet and dry extremes',
    link:
      'https://webknox-jokes.p.rapidapi.com/jokes/search?category=Earth&minRating=0&numJokes=5&keywords=earth'
  },
  {
    trivia:
      'Climate issues that cities & rural communities face includes the need to upgrade aging infrastructure.',
    link:
      'https://webknox-jokes.p.rapidapi.com/jokes/search?category=Earth&minRating=0&numJokes=5&keywords=earth'
  },
  {
    trivia:
      "Warming ocean temperatures are changing marine mammals' migratory patterns",
    link:
      'https://webknox-jokes.p.rapidapi.com/jokes/search?category=Earth&minRating=0&numJokes=5&keywords=earth'
  }
];

class Trivia extends React.Component {
  state = { number: null };
  componentDidMount() {
    this.setState({ number: Math.floor(Math.random() * trivias.length) });
  }
  render() {
    return (
      <div id='trivia'>
        <div className='trivia'>
          <h2>DID YOU KNOW?</h2>
          <p className='trivia_container'>
            {trivias[0].trivia}
            {/* {this.state.number ? trivias[this.state.number].trivia : null}{' '}
          <a href={this.state.number ? trivias[this.state.number].link : null}>
            Learn more
          </a> */}
          </p>
          {this.props.amount && this.props.travelMode ? (
            <p className='emission'>
              Your {this.props.travelMode} has emitted {this.props.amount} kg of
              CO2.
              Your carbon offset is Rp.
            </p>
          ) : null}
        </div>

      </div>
    );
  }
}

export default Trivia;
