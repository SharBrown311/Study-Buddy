const express = require('express')
const cardsRouter = express.Router()
const Card = require("../models/card.js")


//Get all cards
cardsRouter.get("/", (req, res, next) => {
    try{
        const cards = Card.find()
        return res.status(200).send(cards)
    }
    catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get by Deck
cardsRouter.get("/:deckId",
(req, res, next) => {
    Card.find({ deckId : req.params.deckId }, (err, Card) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Card)
    })
})

//Post one
cardsRouter.post("/", (req, res, next) => {
    const newCard = new Card(req.body)
    newCard.save((err, savedCard) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(201).send(savedCard)
    })
})

// delete function
cardsRouter.delete( "/:cardId",async (req, res, next) =>{
    Card.findByIdAndDelete( {_id: req.params.cardId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item: ${deletedItem} from the database.`)
    })
})

//update one card
cardsRouter.put("/:cardId" ,(req, res, next) => {
    Card.findOneAndUpdate(
        {_id : req.params.cardId},
        req.body,
        {new: true},
        (err, updatedCard) => {
            if(err){
                res.status(500)
                return next(err)
            }

        return res.status(201).send(updatedCard)
        }
    )
})


module.exports = cardsRouter