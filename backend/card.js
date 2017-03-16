module.exports.checkCard = function (card) {
  // Vérification expiration
  let expiration = card.expiration;
  if (expiration == undefined){
    return {status: false, error: "La date d'expiration doit être renseignée"};
  }
  if (!new RegExp(/^\d{2}\/\d{2}$/).test(expiration)){
    return {status: false, error: "La date d'expiration est incorrecte"};
  }

  // Vérification numéro de carte
  let number = card.number;
  if (number == undefined){
    return {status: false, error: "Le numéro de carte doit être renseigné"};
  }
  if (!new RegExp(/^\d{16}$/).test(number)){
    return {status: false, error: "Le numéro de carte est incorrecte"};
  }

  // Vérification du CVV
  let cvv = card.cvv;
  if (cvv == undefined){
    return {status: false, error: "Le crytpogramme de sécurité doit être renseigné"};
  }
  if (!new RegExp(/^\d{3}$/).test(cvv)){
    return {status: false, error: "Le crytpogramme de sécurité est incorrect"};
  }

  console.log("OOOOOOOK");

  return {status: true};
}
