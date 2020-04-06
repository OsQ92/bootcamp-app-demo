const pgp = require('pg-promise')();
const db = pgp({
    host: process.env.POSTGRES_HOST || "localhost",
    port: process.env.POSTGRES_PORT || "5432",
    database: process.env.POSTGRES_DB || "postgres",
    user: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "ossimies"
});

const imageList = [
    {"id": 0, "imageUrl": "/api/static/image1.jpg", "thumbUrl": "/api/static/image1-thumb.jpg", "description": "Eka kuva netistä." },
    {"id": 1, "imageUrl": "/api/static/image2.jpg", "thumbUrl": "/api/static/image2-thumb.jpg", "description": "Toka jokunmoinen kuva." },
    {"id": 2, "imageUrl": "/api/static/image3.jpg", "thumbUrl": "/api/static/image3-thumb.jpg", "description": "Viimenen ja kolmas kuva." }
];

const getImages = (req, res) => {
    //res.send(imageList);
    
    db.any('SELECT * FROM images')
    .then(images => res.send(images))
    .catch(error => {
        console.log(error)
        res.status(500).send("Error: could not get resource.")
    })
}

const getImagesCat = (req, res) => {
    const category = req.params.category;
    db.any('SELECT * FROM images WHERE category=$1', category)
    .then(images => res.send(images))
    .catch(error => {
        console.log(error)
        res.status(500).send("Error: could not get resource.")
    })
}

module.exports = {
    getImages,
    getImagesCat
};