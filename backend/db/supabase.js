const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://tmbttestdvsuoceefjqw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtYnR0ZXN0ZHZzdW9jZWVmanF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTIzMjExMywiZXhwIjoyMDI2ODA4MTEzfQ.Rl62WskqOKmLcuup5q-Lgb7sSR9n_RwHyOcZRwO9rJc'

const supabase = createClient(supabaseUrl, supabaseKey)

const createUser = async (userData) => {
  try {
    const { data, error } = await supabase.from('users').insert(userData)
    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
};

const findUserByEmail = async (email) => {
  try {
    const { data, error } = await supabase.from('users').select().eq('email', email).single()
    if (error) throw erro
    return data
  } catch (error) {
    throw error
  }
};

const getAllServices = async () => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
    if (error) throw error
    return data
  } catch (error) {
    throw error
  }
};

const createService = async (serviceData) => {
  try {
    const { data, error } = await supabase.from('services').insert(serviceData)
    if (error) throw error
    return data;
  } catch (error) {
    throw error
  }
};

const updateService = async (id, serviceData) => {
  try {
    const { data, error } = await supabase
      .from('services')
      .update(serviceData)
      .match({ id })

    if (error) throw error
    return data;
  } catch (error) {
    throw error
  }
};

const deleteService = async (id) => {
  try {
    const { error } = await supabase
    .from('services')
    .delete()
    .match({ id })

    if (error) throw error
  } catch (error) {
    throw error
  }
};


module.exports = {
  supabase,
  createUser,
  findUserByEmail,
  createService,
  getAllServices,
  updateService,
  deleteService,
};

