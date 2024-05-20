let secret

exports.setSecret = newSecret => {
  secret = newSecret
}

exports.getSecret = () => {
  return secret
}
