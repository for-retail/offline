export default async function handler(req, res) {
    const { url } = req.query;
    try {
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        res.setHeader('Content-Type', response.headers.get('content-type') || 'video/mp4');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(Buffer.from(buffer));
    } catch (e) { res.status(500).send("Error"); }
}
