const { Router } = require("express");
const getActivities = require("../controllers/getActivities");
const getCountry = require("../controllers/getCountry");
const getCountryById = require("../controllers/getCountryById");
const getCountryByName = require("../controllers/getCountryByName");
const postActivities = require("../controllers/postActivities");
const deleteActivity = require("../controllers/deleteActivity");

const router = Router();

router.get('/countries', getCountry);

router.get('/countries/name',getCountryByName);

router.get('/countries/:idPais',getCountryById);

router.post('/activities', postActivities);

router.get('/activities', getActivities);

router.delete('/activities/:id', deleteActivity)

module.exports = router;
