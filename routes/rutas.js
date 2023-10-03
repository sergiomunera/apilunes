
import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js'

// Para poder llamar al controlador debo crear un objeto de la clase controlador habitacion
// Para poder llamar al controlador debo crear un objeto de la clase controlador reservas

let controladorHabitacion = new ControladorHabitaciones();
let controladorReservas = new ControladorReservas();

export let rutas = express.Router()

// habitaciones

rutas.post('/api/habitaciones', controladorHabitacion.registrarHabitacion)

rutas.get('/api/habitacion', controladorHabitacion.buscarHabitacionPorId)

rutas.get('/api/habitaciones', controladorHabitacion.buscarHabitacion)

rutas.put('/api/habitaciones', controladorHabitacion.modificarHabitacion)

rutas.delete('/api/habitaciones', controladorHabitacion.borrarHabitacion)

// reservas

rutas.post('/api/reservas', controladorReservas.registrarReserva)

rutas.get('/api/reserva', controladorReservas.buscarReservaPorId)

rutas.get('/api/reservas', controladorReservas.buscarReserva)

rutas.put('/api/reservas', controladorReservas.modificarReserva)

rutas.delete('/api/reservas', controladorReservas.borrarReserva)