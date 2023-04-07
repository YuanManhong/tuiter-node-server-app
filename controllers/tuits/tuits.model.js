import mongoose from "mongoose";
import tuitschema from "./tuits.schema.js";

const TuitModel = mongoose.model('TuitModel', tuitschema);

export default TuitModel;