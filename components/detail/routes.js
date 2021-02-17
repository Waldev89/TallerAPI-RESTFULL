const express = require('express')
const router = express.Router()
const { createDetail, deleteDetail, getDetail, getDetails, updateDetail  } = require('./actions')

// GET all
router.get('/', getDetail)

// GET by ID
router.get('/:id', getDetails)

// POST Create a Client
router.post('/', createDetail)

// PUT Update a Client's info
router.put('/:id', updateDetail)

// DELETE by ID
router.delete('/:id', deleteDetail)

module.exports = router