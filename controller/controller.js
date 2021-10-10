var express = require('express');
var router = express.Router();



const controlar = {
    home: (req,res) => {
        res.render('index')
    }
    cadastro: (req,res) => {
        res.render('')
    }
}