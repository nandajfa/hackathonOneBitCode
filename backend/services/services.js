const {
  createService,
  getAllServices,
  updateService,
  deleteService
} = require('../db/supabase')

exports.getServices = async () => {
  try {
    const data = await getAllServices()
    return data
  } catch (error) {
    console.error('Erro ao buscar serviços:', error.message)
    throw new Error('Erro interno do servidor.')
  }
}

exports.addService = async serviceData => {
  try {
    await createService(serviceData)
    return { message: 'Serviço adicionado com sucesso.' }
  } catch (error) {
    console.error('Erro ao adicionar serviço:', error.message)
    throw new Error('Erro interno do servidor.')
  }
}

exports.editServiceByID = async (id, serviceData) => {
  try {
    const result = await updateService(id, serviceData)

    return result
  } catch (error) {
    console.error('Erro ao editar serviço:', error.message)
    throw new Error('Erro interno do servidor.')
  }
}

exports.deleteServiceByID = async id => {
  try {
    await deleteService(id)
  } catch (error) {
    console.error('Erro ao deletar serviço:', error.message)
    throw new Error('Erro interno do servidor.')
  }
}
