import posts from "./tuits.js";
let tuits = posts;

const TuitController = (app) => {
    app.get('/api/tuits', findTuits);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
};

const findTuits = (req, res) => {
    res.json(tuits);
};

const updateTuit = (req, res) => {
    const tuitId = req.params.tid;
    const updates = req.body;
    tuits = tuits.map (t => t._id === tuitId ? {
        ...t,
        ...updates
    } : t);
    res.sendStatus(200);
};

/*
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}
*/


const deleteTuit = (req, res) => {
    const tuitId = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitId);
    res.sendStatus(200);
};

export default TuitController;