exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('checkAcountPayload middleware')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('checkAccountNameUnique middleware')
  next()
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('checkAccountId middleware')
  next()
}
