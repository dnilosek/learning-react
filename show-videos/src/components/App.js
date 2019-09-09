import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/youtube.js';
import VideoList from './VideoList'
import './App.css';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onSearchSubmit('cats');
    }
    
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    onSearchSubmit = async term => {
        const response = await Youtube.get('/search',{
            params:{
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    render(){
        return (
            <div className="app ui container">
              <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
              </div>
            </div>
        );
    }
}

export default App;