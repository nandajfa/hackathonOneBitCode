let secret

exports.setSecret = newSecret => {
  secret = newSecret
  console.log('new:', secret)
}

exports.getSecret = () => {
  console.log('let scret: ', secret)
  return secret
}
