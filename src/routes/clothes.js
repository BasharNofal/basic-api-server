'use strict';

const express = require('express');
const validator = require('../middleware/validator.js');
const Clothes = require('../models/clothes.js');
const cloth = new Clothes();
const router = express.Router();

router.get('/', getClothes);
router.get('/:id', validator, getClothById);
router.post('/', createClothItem);
router.put('/:id', validator,  updateClothItem);
router.delete('/:id', validator, deleteCloth);

function getClothes(req, res){
    const resObj = cloth.read();
    res.json(resObj);
}

function getClothById(req, res){
    const resObj = cloth.read(req.params.id);
    res.json(resObj);
}

function createClothItem(req, res){
    const clothObject = req.body;
    const resObj = cloth.create(clothObject);
    res.status(201).json(resObj);
}

function updateClothItem(req, res){
    const clothObject = req.body;
    const resObj = cloth.update(req.params.id, clothObject);
    res.json(resObj);
}

function deleteCloth(req, res){
    const resObj = cloth.delete(req.params.id);
    res.json(resObj);
}

module.exports = router;