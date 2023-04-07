/*import posts from "./tuits.js";
let tuits = posts;*/
import * as tuitsDao from "./tuits-dao.js";

const TuitController = (app) => {
    app.get('/api/tuits', findTuits);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}

const createTuit = async(req, res) => {
    const newTuit = req.body;
    /*newTuit._id = (new Date()).getTime() + '';*/
    newTuit.likes = 0;
    newTuit.liked = false;
    /*tuits.push(newTuit);*/
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
};

const findTuits = async(req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
};

const updateTuit = async(req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    /*tuits = tuits.map (t => t._id === tuitId ? {
        ...t,
        ...updates
    } : t);*/
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
    res.json(status);
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


const deleteTuit = async(req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
/*    tuits = tuits.filter(t => t._id !== tuitId);*/
    res.json(status);
};

export default TuitController;