const express = require('express')
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3003

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

const generateRandomString = length => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length)
}
const JWT_SECRET = generateRandomString(32)

app.post('/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    const { data: existingUsers, error: fetchError } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)

    if (fetchError) {
      throw fetchError
    }

    if (existingUsers.length > 0) {
      return res.status(400).json({ error: 'O email já está em uso.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const { data, error } = await supabase
      .from('users')
      .insert([{ name, email, password: hashedPassword }])

    if (error) {
      throw error
    }

    res.status(201).json({ message: 'Usuário registrado com sucesso.' })
  } catch (error) {
    console.error('Erro ao registrar usuário:', error)
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})

app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const { data: users, error } = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single()

    if (!users) {
      return res.status(401).json({ error: 'Credenciais inválidas' })
    }

    const passwordMatch = await bcrypt.compare(password, users.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciais inválidas' })
    }

    const token = await jwt.sign({ userId: users.id }, JWT_SECRET, {
      expiresIn: '24h'
    })

    res.json({ token })
  } catch (error) {
    console.error('Erro ao fazer login:', error.message)
    res.status(500).json({ error: 'Usuário não encontrado' })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
