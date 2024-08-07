const express = require("express")

const reservationController = require("../controllers/reservationController")

const router = express.Router()

router.route("/createReservation").post(reservationController.createReservation)

router.route("/getAllReservation").get(reservationController.getAllReservation)

router.route("/getReservation/:id").get(reservationController.getReservation)

router
  .route("/updateReservation/:id")
  .put(reservationController.updateReservation)

router
  .route("/deleteReservation/:id")
  .delete(reservationController.deleteReservation)

module.exports = router
