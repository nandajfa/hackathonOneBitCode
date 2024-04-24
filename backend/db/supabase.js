const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const createUser = async userData => {
  try {
    const { data, error } = await supabase.from('users').insert(userData)
    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
}

const findUserByEmail = async email => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single()
    if (error) throw erro
    return data
  } catch (error) {
    throw error
  }
}

const getAllServices = async () => {
  try {
    const { data, error } = await supabase.from('services').select('*')
    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
}

const createService = async serviceData => {
  try {
    const { data, error } = await supabase.from('services').insert(serviceData)
    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
}

const updateService = async (id, serviceData) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .update(serviceData)
      .match({ id })

    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
}

const deleteService = async id => {
  try {
    const { error } = await supabase.from('services').delete().match({ id })

    if (error) throw error
  } catch (error) {
    throw error
  }
}

module.exports = {
  supabase,
  createUser,
  findUserByEmail,
  createService,
  getAllServices,
  updateService,
  deleteService
}
