// ---------------------------------------LOGIQUE METIERS DES ROUTES messageS

const Message = require('../models/message')
const fs = require('fs')

// -----------------------Création d'une message (POST)
exports.createMessage = (req, res, next) => {
  const messageObject = JSON.parse(req.body)
  const message = new Message({
    ...messageObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${
      req.file.filename
    }`
  })
  message
    .save()
    .then(() => res.status(201).json({ message: 'message enregistré !' }))
    .catch((error) => res.status(400).json({ error }))
};

// -----------------------Récupération d'une message (GET)
exports.getOneMessage = (req, res, next) => {
  Message.findOne({
    where: { id: req.params.id }
  })
    .then((message) => {
      res.status(200).json(Message)
    })
    .catch((error) => {
      res.status(404).json({ error: error })
    })
};

// -----------------------Modification d'une message (PUT)
exports.modifyMessage = (req, res, next) => {
  const messageObject = req.file
    ? (Message.findOne({ _id: req.params.id }).then((message) => {
        // Récupération du nom du fichier-image via split()
        const filename = message.imageUrl.split('/images/')[1]
        // Suppression du fichier enregistré
        fs.unlinkSync(`images/${filename}`)
      }),
      {
        ...JSON.parse(req.body.message),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`
      })
    : { ...req.body }
  Message.updateOne(
    { _id: req.params.id },
    { ...messageObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: 'message modifié !' }))
    .catch((error) => res.status(400).json({ error }))
};

// -----------------------Suppression d'une message (DELETE)
exports.deleteMessage = (req, res, next) => {
  Message.destroy()
    .then(() => res.status(200).json({ message: 'message supprimé !' }))
    .catch((error) => res.status(400).json({ error }))
};

// -----------------------Récupération des messages (GET)
exports.getAllMessages = (req, res, next) => {
  Message.findAll()
    .then((messages) => {
      res.status(200).json(messages)
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      })
    })
};

// -----------------------Thumbs up/down (POST)
exports.likeMessage = (req, res, next) => {
  switch (req.body.like) {
    // L'utilisateur n'aime pas la message :
    case -1:
      message
        .updateOne(
          { _id: req.params.id },
          { $push: { usersDisliked: req.body.userId }, $inc: { dislikes: +1 } }
        )
        .then(() =>
          res.status(201).json({ message: "Trop piquant j'imagine ?" })
        )
        .catch((error) => res.status(400).json({ error }))
      console.log("Trop piquant j'imagine ?")
      break;

    // L'utilisateur aime la message :
    case 1:
      message
        .updateOne(
          { _id: req.params.id },
          { $push: { usersLiked: req.body.userId }, $inc: { likes: +1 } }
        )
        .then((message) =>
          res.status(201).json({ message: "Merci d'aimer cette message !" })
        )
        .catch((error) => res.status(400).json({ error }))
      console.log("Merci d'aimer cette message !")
      break;

    // L'utilisateur change d'avis...
    case 0:
      message.findOne({ _id: req.params.id }).then((message) => {
        // ...il retire son like :

        if (message.usersLiked.includes(req.body.userId)) {
          message
            .updateOne(
              { _id: req.params.id },
              { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } }
            )
            .then(() =>
              res.status(201).json({ message: "Vous changez d'avis...dommage" })
            )
            .catch((error) => res.status(400).json({ error }))
          console.log("Vous changez d'avis...dommage")
        }

        // ...il retire son dislike :
        else if (message.usersDisliked.includes(req.body.userId)) {
          message
            .updateOne(
              { _id: req.params.id },
              {
                $pull: { usersDisliked: req.body.userId },
                $inc: { dislikes: -1 }
              }
            )
            .then(() =>
              res
                .status(201)
                .json({ message: "Il fallait juste le temps de s'y habituer" })
            )
            .catch((error) => res.status(400).json({ error }))
          console.log("Il fallait juste le temps de s'y habituer")
        }
      })
      break;
  }
}
