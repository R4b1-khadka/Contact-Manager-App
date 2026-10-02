const asyncHandler= require("express-async-handler")

// @desc Get all contacts 
//@route GET /api/contacts
//@access public 

const getAllContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message: "Get all contacts"});
})
// @desc create contacts 
//@route GET /api/contacts
//@access public 
const createContact = asyncHandler(async(req,res)=>{
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All Fileds are mandatory" )
    }
    console.log("the requested body is ", req.body)
    res.status(201).json({message: "create a new contact"})
})

// @desc get  contacts 
//@route GET /api/contacts/:id
//@access public 
const getContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `get contact for ${req.params.id}`})
})

// @desc put contacts 
//@route PUT /api/contacts/:id
//@access public 
const putContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `update contact for ${req.params.id}`})
})

// @desc delete contacts 
//@route DELETE /api/contacts/:id
//@access public 
const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `delete  contact for ${req.params.id}`})
})

module.exports= {getAllContact, createContact, getContact, putContact, deleteContact}