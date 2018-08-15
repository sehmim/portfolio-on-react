import React from 'react';
import '../css/Intro.css';
import '../css/projects.css';


// Library Components
import MusicPlayer from 'react-responsive-music-player';
import ReactPlayer from 'react-player';


class MusicProjects extends React.Component {   
   
    render() {
        const videos =[
          { url: 'https://www.youtube.com/watch?v=8xMFr_4mYIU' }
        ]

        const playlist = [
            {
                url: 'http://gdurl.com/ZJaY',
                cover: 'http://www.7diphone.com/wp-content/uploads/Cartoons/1136/Naruto%20Itachi%20HD-640x1136%20wallpapers.jpg',
                title: 'Magic Mike',
                artist: [
                  'Mim The Human'
                ]
              },
              {
                url: 'http://gdurl.com/OclW',
                cover: 'https://scontent.fybz1-1.fna.fbcdn.net/v/t1.0-9/38651755_1888024264590275_2836600546368946176_n.jpg?_nc_cat=0&oh=9444a07e2bd8efd9bf740710425ee72a&oe=5BF38AC5',
                title: 'Orbit',
                artist: [
                  'Spectral Lights'
                ]
              }
            
          ]

      return (
        <div className="" id="Musician">
            <div className="container"> 
            <MusicPlayer playlist={playlist} />
              <div className="row col-lg-2 col-md-6 col-xs-12">
                <object className="videoEach" data="https://www.youtube.com/embed/KN3ZrgeLm2A" />
                <object className="videoEach" data="https://www.youtube.com/embed/gqNiIcwv1q0" />
                <object className="videoEach" data="https://www.youtube.com/embed/8xMFr_4mYIU" />
                <object className="videoEach" data="https://www.youtube.com/embed/IhcSxAYqw8w" />
              </div>
            </div>
        </div>
      ); 
    }
  }
  export default MusicProjects;
