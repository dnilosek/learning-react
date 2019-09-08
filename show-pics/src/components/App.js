import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Unsplash from '../api/unsplash';
import './App.css';

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async term => {
        // Get list of images from unsplash
        const response = await Unsplash.get('/search/photos', {
            params:{
                query: term
            }
        });

        this.setState({images: response.data.results});
    }

    render(){
        return (
            <div className="app ui container">
              <SearchBar onSubmit={this.onSearchSubmit}/>
              <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;