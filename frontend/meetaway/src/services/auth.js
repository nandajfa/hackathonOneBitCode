export const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null
}

// export const isAuthenticated = () => {
//   const token = document.cookie
//     .split('; ')
//     .find(row => row.startsWith('token='))

//   return token !== undefined
// }

export const login = token => {
  // Armazena o token de autenticação no localStorage
  localStorage.setItem('authToken', token)
}

// Função para fazer logout
export const logout = () => {
  localStorage.removeItem('authToken')
}
