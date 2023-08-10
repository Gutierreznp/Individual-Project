const { Router } = require("express");
const getActivities = require("../controllers/getActivities");
const getCountry = require("../controllers/getCountry");
const getCountryById = require("../controllers/getCountryById");
const getCountryByName = require("../controllers/getCountryByName");
const postActivities = require("../controllers/postActivities");

const router = Router();

router.get('/countries', getCountry);

router.get('/countries/name',getCountryByName);

router.get('/countries/:idPais',getCountryById);

router.post('/activities', postActivities);

router.get('/activities', getActivities);

module.exports = router;
