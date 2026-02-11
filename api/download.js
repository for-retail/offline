// api/download.js
export default async function handler(req, res) {
    const { url } = req.query;
    try {
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        
        // Headers set chesthunnam so browser ki idhi video ani telustundi
        res.setHeader('Content-Type', 'video/mp4');
        res.setHeader('Access-Control-Allow-Origin', '*'); // CORS fix
        res.send(Buffer.from(buffer));
    } catch (e) {
        res.status(500).send("Error downloading video");
    }
}
