const Detail = require('./model')

function createDetail(req, res) {
  const newDetail = new Detail(req.body)
  newDetail.save((error, detailSaved) => {
    if (error) {
      console.error('Error saving detail ', error)
      res.status(500).send(error)
    } else {
      res.send(detailSaved)
    }
  })
}

const deleteDetail = (req, res) => {
  Detail.findByIdAndDelete(req.params.id, (error, result) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.send(result)
    }
  })
}

const getDetail = (req, res) => {
  Detail.findById(req.params.id, (error, detail) => {
    if (error) {
      res.status(500).send(error)
    } else if (detail) {
      res.send(detail)
    } else {
      res.status(404).send({})
    }
  })
}

const getDetails = (req, res) => {
  let query = req.query
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, 'i') }
  }

  Detail.find(query, (error, details) => {
    if (error) {
      res.status(404).send(error)
    } else {
      res.send(details)
    }
  })
}

const updateDetail = (req, res) => {
  Detail.updateOne({ _id: req.params.id }, req.body, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

module.exports = { createDetail, deleteDetail, getDetail, getDetails, updateDetail }