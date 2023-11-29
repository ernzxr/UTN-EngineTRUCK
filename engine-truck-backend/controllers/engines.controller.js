const getEngines = (req, res) => {
    res.json({message:'engines GET'});
};

const createEngine = (req, res) => {
    res.json({message:'engine CREATE'});
};

const updateEngine = (req, res) => {
    res.json({message:'engine UPDATE'});
};

const deleteEngine = (req, res) => {
    res.json({message:'engine DELETE'});
};

const filterEngine = (req, res) => {
    console.log(req.params);
    res.json({message:"Dynamic Router"});
};

module.exports = {getEngines, createEngine, updateEngine, deleteEngine, filterEngine};