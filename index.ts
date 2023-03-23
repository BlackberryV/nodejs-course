import express from "express";
import { Petition } from "./models/Petition";
import { PetitionsService } from "./services/PetitionsService";
import {Signature} from "./models/Signature";
import {SignaturesService} from "./services/SignaturesService";

const app = express();
const port = 3000;
const petitionsService = new PetitionsService();
const signatureService = new SignaturesService();
const bodyParser = require('body-parser');
app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});


app.use(express.json())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

// GET petitions page
app.get('/petitions',  (req, res) => {
  try {
    const petitions =  petitionsService.getPetitions();
    res.render('petitions.ejs', { petitions });
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST create petition
app.post('/petitions/create',  (req, res) => {
  try {
    let {  title, description,requiredAmountOfSignatures } = req.body;
    if (title && description && !isNaN( Number.parseInt(requiredAmountOfSignatures)) ){
    let newPetition = new Petition(
      title,
      description,
        Number.parseInt(requiredAmountOfSignatures));

     petitionsService.addPetition(newPetition);
    res.redirect('/petitions');} else {
      res.redirect('/errorPage');
    }
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST delete petition
app.post('/petitions/delete/:id',  (req, res) => {
  try {

    petitionsService.deletePetition(Number.parseInt(req.params.id));
    res.redirect('/petitions');
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/petitions/:id',  (req, res) => {
  try {

    const petition = petitionsService.getPetitions().find(p => p.getId === Number(req.params.id));
    if (petition){
    res.render('petition.ejs', { petition });} else {
      res.redirect('/errorPage');
    }
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//=========================================================================================


app.get('/signatures',  (req, res) => {
  try {
    const signatures=  signatureService.getSignatures();
    res.render('signatures.ejs', { signatures });
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST create petition
app.post('/signatures/create',  (req, res) => {
  try {
    let { name, email,passportId } = req.body;
    if (name && email && passportId ){
      let newSignature = new Signature(
          name,email,passportId);

      signatureService.addSignature(newSignature);
      res.redirect('/signatures');} else {
      res.redirect('/errorPage');
    }
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST delete petition
app.post('/signatures/delete/:id',  (req, res) => {
  try {

    signatureService.deleteSignature(req.params.id);
    res.redirect('/signatures');
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/signatures/:id',  (req, res) => {
  try {
    const signature = signatureService.getSignatures().find(p => p.getPassportId === req.params.id);
    if (signature){
      res.render('signature.ejs', {signature });} else {
      res.redirect('/errorPage');
    }
  } catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});