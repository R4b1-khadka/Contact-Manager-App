const express = require("express");
const router= express.Router();

const {getAllContact, createContact, getContact, putContact, deleteContact} = require("../controllers/contactController")

router.route("/").get(getAllContact).post(createContact);



router.route("/:id").get(getContact).put(putContact).delete(deleteContact);


module.exports= router;