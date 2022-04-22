const express = require('express');
const router = express.Router();
//const BookModel= require("../Models/bookModel")
// const allControllers= require("../controllers/newControllers")
//const BDController = require("../controllers/BDController")


const middleware = require("../middlewares/middlewares.js") 

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createNewAuthor", allControllers.createNewAuthor  )

// router.post("/createNewBook", allControllers.createNewBook)

// router.get("/allBooks", allControllers.allBooks)

// router.get("/updatedBookPrice", allControllers.updatedBookPrice)

// router.get("/authorName", allControllers.authorName)

// router.post("/createNewAuthor1", newController.creatNewAuthor)


//const newController = require("../controllers/newControllers");
const { middleware2 } = require('../middlewares/middlewares');


// router.post("/createNewBook", newController.createNewBook)
// router.post("/createNewAuthor123", newController.createNewAuthor123)
// router.post("/createNewPublisher",newController.createNewPublisher)


// router.get("/getNewBooks123", newController.getNewBooks123)


// router.post("/createBatch", BDController.createBatch)
// router.post("/createDevloper", BDController.createDevloper)
// router.get("/getScholarshipDevloper", BDController.getScholarshipDevloper)
// router.get("/getDnPv", BDController.getDnPv)


// router.get("/middlewareRequest",middleware.middleware1 ,middleware.middleware2,middleware.middleware3,middleware.middleware4,middleware.middleware5,BDController.mwinfo)


// //=============================================================================================
// //OPU assignment
// const oPuController = require('../controllers/oPuController')
// const oPuMiddleware =require("../middlewares/oPuMiddleware")
// router.post("/createProduct",oPuController.createProduct)
// router.post("/createUser",oPuMiddleware.header, oPuController.createUser)
// router.post("/purchaseProduct",oPuMiddleware.header ,oPuMiddleware.priceValidation ,oPuController.purchaseProduct)
const userController = require('../controllers/userController')
router.post("/userRegistrationForm",userController.registerUser)
router.post("/user/login",userController.userLogin)

router.get("/getRegisteredUser",userController.getRegisteredUser)

router.put("/updateUserData",userController.updateUserData)

router.delete("/isDeleted",userController.deleteUser)
module.exports = router;