import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFavChars } from '../redux/reducer';

class FavCharsDisplay extends Component {
    componentDidMount() {
        this.getFavs();
    }
    
    getFavs = () => {
        axios
            .get('/api/favs')
            .then(res => {
                this.props.setFavChars(res.data);
            })
            .catch(err => console.log(err));
    }

    clearFavs = () => {
        axios
            .delete('/api/favs')
            .then(() => 
                this.props.setFavChars([])
            )
            .catch(err => console.log(err))
    }

    render() {
        const { favChars } = this.props;

        const favCharsMapped = this.props.favChars.length === 0
            ? <h3>Click a Character to add to Favorites</h3>
            : this.props.favChars.map((char, i) => {
                return (
                    <div key={i} className='bb-fav-char'>
                        <h3>{char.name}</h3>
                        <img src={char.img} alt='Breaking Bad Character' />
                    </div>
                )
            })

        return (
            <section >
                { 
                    favChars.length > 0 
                        ? <button onClick={this.clearFavs}>Clear</button> 
                        : null
                }
                <div className='bb-chars'>
                    {favCharsMapped}
                </div>
            </section>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        favChars: reduxState.favChars
    };
}

export default connect(mapStateToProps, { setFavChars })(FavCharsDisplay);