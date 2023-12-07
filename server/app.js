require('dotenv').config()
const { initializeApp } = require('firebase/app')
const {getAnalytics} = require('firebase/analytics')
const firebaseConfig = require("./firebase.config")
const {Server} = require('./models/index')
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

initializeApp(firebaseConfig)
const server = new Server()

server.listen()
exports.app = onRequest(server.getApp())





