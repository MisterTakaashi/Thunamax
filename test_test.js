
Feature('payment');

Scenario('Test payment : OK', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '0000000000000000');
  I.fillField('prenom', "Jack");
  I.fillField('nom' "Foster");
  I.fillField('expires', '01/01/2020');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('Payment successfull');
});

Scenario('Test payment : Numero invalide', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '1');
  I.fillField('prenom', "Jack");
  I.fillField('nom' "Foster");
  I.fillField('expires', '01/01/2020');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('Le numéro de carte est incorrecte');
});

Scenario('Test payment : Numero non reseigne', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '');
  I.fillField('prenom', "Jack");
  I.fillField('nom' "Foster");
  I.fillField('expires', '01/01/2020');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('Le numéro de carte doit être renseigné');
});

Scenario('Test payment : Date expiration invalide', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '0000000000000000');
  I.fillField('prenom', "Jack");
  I.fillField('nom' "Foster");
  I.fillField('expires', '01/01/1000');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('La date d\'expiration est incorrecte');
});

Scenario('Test payment : Date expiration non reseignee', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '0000000000000000');
  I.fillField('prenom', "Jack");
  I.fillField('nom' "Foster");
  I.fillField('expires', '');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('La date d\'expiration doit être renseignée');
});

Scenario('test payment : Cryptogramme Invalide', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '0000000000000000');
  I.fillField('prenom', "Jack");
  I.fillField('nom' "Foster");
  I.fillField('expires', '01/01/2020');
  I.fillField('cryptogramme', '1234');
  I.click('Valider');
  I.see('Le crytpogramme de sécurité est incorrect');
});

Scenario('test payment : Cryptogramme non reseigne', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '0000000000000000');
  I.fillField('prenom', "Jack");
  I.fillField('nom' "Foster");
  I.fillField('expires', '01/01/2020');
  I.fillField('cryptogramme', '');
  I.click('Valider');
  I.see('Le crytpogramme de sécurité doit être renseigné');
});
// TODO fill the right message
Scenario('test payment : Pas assez de solde', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '0000000000000000');
  I.fillField('prenom', "Léa");
  I.fillField('nom' "Reis");
  I.fillField('expires', '01/01/2020');
  I.fillField('cryptogramme', '');
  I.click('Valider');
  I.see('Pas assez de solde');
});
