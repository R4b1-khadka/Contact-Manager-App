// @desc Get all contacts 
//@route GET /api/contacts
//@access public 

const getAllContact = (req,res)=>{
    res.status(200).json({message: "Get all contacts"});
}
// @desc create contacts 
//@route GET /api/contacts
//@access public 
const createContact = (req,res)=>{
    res.status(201).json({message: "create a new contact"})
}

// @desc get  contacts 
//@route GET /api/contacts/:id
//@access public 
const getContact = (req,res)=>{
    res.status(200).json({message: `get contact for ${req.params.id}`})
}

// @desc put contacts 
//@route PUT /api/contacts/:id
//@access public 
const putContact = (req,res)=>{
    res.status(200).json({message: `update contact for ${req.params.id}`})
}

// @desc delete contacts 
//@route DELETE /api/contacts/:id
//@access public 
const deleteContact = (req,res)=>{
    res.status(200).json({message: `delete  contact for ${req.params.id}`})
}

module.exports= {getAllContact, createContact, getContact, putContact, deleteContact}