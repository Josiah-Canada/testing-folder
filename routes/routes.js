var router = require("express").Router();
const apiRoutes = require("../routes/api/user-routes")


router.use("/api", apiRoutes)



module.exports = router;
