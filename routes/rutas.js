
import express from 'express'

export let rutas = express.Router()

// habitaciones

rutas.post('/api/habitaciones', function (req, res) {
    res.send('Se esta guardando una habitacion')
})

rutas.get('/api/habitacion', function (req, res) {
    res.send('Se esta buscando una habitacion')
})

rutas.get('/api/habitaciones', function (req, res) {
    res.send('Se estan buscando todas las habitaciones')
})

rutas.put('/api/habitaciones', function (req, res) {
    res.send('Se esta cambiando una habitacion')
})

rutas.delete('/api/habitaciones', function (req, res) {
    res.send('Se esta borrando una habitacion')
})

// reservas

rutas.post('/api/reservas', function (req, res) {
    res.send('Se esta guardando una reserva')
})

rutas.get('/api/reserva', function (req, res) {
    res.send('Se esta buscando una reserva')
})

rutas.get('/api/reservas', function (req, res) {
    res.send('Se estan buscando todas las reservas')
})

rutas.put('/api/reservas', function (req, res) {
    res.send('Se esta cambiando una reserva')
})

rutas.delete('/api/reservas', function (req, res) {
    res.send('Se esta borrando una reserva')
})