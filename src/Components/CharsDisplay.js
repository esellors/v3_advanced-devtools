import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setBbChars, setFavChars } from '../redux/reducer';

class CharsDisplay extends Component {
    componentDidMount() {
        if (this.props.bbChars.length === 0) {
            this.getChars();
        }
    }

    getChars = () => {
        axios
            .get('/api/chars')
            .then(res => {
                this.props.setBbChars(res.data)
            })
            .catch(err => console.log(err));
    }

    addFav = charObj => {
        axios
            .post('/api/favs', charObj)
            .then(res => {
                this.props.setFavChars(res.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        const { bbChars } = this.props;

        const bbCharsMapped = bbChars.map((char, i) => {
            return (
                <div
                    key={i}
                    className='bb-char'
                    onClick={() => this.addFav({ name: char.name, img: char.img })}
                >
                    <h3>{char.name}</h3>
                    <img src={char.img} alt='Breaking Bad Character' />
                </div>
            )
        })

        return (
            <section className='bb-chars'>
                {bbCharsMapped}
            </section>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        bbChars: reduxState.bbChars
    };
}

export default connect(mapStateToProps, { setBbChars, setFavChars })(CharsDisplay);