const { Country, Activity } = require('../db');

module.exports = async (req, res) => {
    try {
        const { idPais } = req.params;
        const userFound = await Country.findByPk(idPais, { include: Activity });
        return res.status(200).json(userFound);
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
}