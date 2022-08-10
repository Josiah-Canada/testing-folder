const User = require("../models/user-model");

const userController = {
    getAllUsers(req, res) {
        User.find({})
          .sort({ _id: -1 })
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },
}


module.exports = userController;