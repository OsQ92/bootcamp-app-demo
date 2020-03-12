const imageList = [
    {"id": 0, "imageUrl": "/api/static/image1.jpg", "thumbUrl": "/api/static/image1-thumb.jpg", "description": "Eka kuva netistä." },
    {"id": 1, "imageUrl": "/api/static/image2.jpg", "thumbUrl": "/api/static/image2-thumb.jpg", "description": "Toka jokunmoinen kuva." },
    {"id": 2, "imageUrl": "/api/static/image3.jpg", "thumbUrl": "/api/static/image3-thumb.jpg", "description": "Viimenen ja kolmas kuva." }
];

const getImages = (req, res) => {
    res.send(imageList);
}

module.exports = {
    getImages
};