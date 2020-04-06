//https://reactjsexample.com/react-carousel-image-gallery-component-with-thumbnail-and-mobile-support/
//https://github.com/xiaolin/react-image-gallery
import React from 'react';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';

export default class Gallery extends React.Component {
    /*
    array.map((image) => {
        var image = {
            "original": image.imageUrl, 
            "thumbnail": image.thumbUrl,
            "description": image.description
        }
        return image;
    });
    */ 

    constructor(props) {
        super(props);
        this.state = {
            images: [],
        };
    }
    componentDidMount() {
        fetch('/api/images')
        .then(response => response.json())
        .then(data => this.setState(
            {
                images: data.map((item) => {
                let image = {
                    "original": item.img_url,
                    "fullscreen": item.img_url,
                    "thumbnail": item.thumb_url,
                    "description": item.description
                }
                return image;
                })
            }
        ));
    }

    render() {
        return (
            <div className="gallery">
                <ImageGallery 
                    items={this.state.images}
                    showThumbnails={false} 
                    slideInterval={20000}
                    showPlayButton={false}
                />
            </div>
        );
    }
}