
Feature('payment');

Scenario('test payment : OK', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '00000000000000000000');
  I.fillField('proprietaire', "NOM PRENOM");
  I.fillField('expires', '01/01/2000');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('Payment successfull');
});

Scenario('test payment : Invalid Numero', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '00000000000000000000');
  I.fillField('proprietaire', "NOM PRENOM");
  I.fillField('expires', '01/01/2000');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('Invalid Numero');
});

Scenario('test payment : Invalid proprietaire', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '00000000000000000000');
  I.fillField('proprietaire', "NOM PRENOM");
  I.fillField('expires', '01/01/2000');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('Invalid Proprietaire');
});

Scenario('test payment : Invalid expires date', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '00000000000000000000');
  I.fillField('proprietaire', "NOM PRENOM");
  I.fillField('expires', '01/01/2000');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('Invalid expires date');
});

Scenario('test payment : Invalid cryptogramme', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '00000000000000000000');
  I.fillField('proprietaire', "NOM PRENOM");
  I.fillField('expires', '01/01/2000');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('Invalid cryptogramme');
});

Scenario('test payment : Not enough credits on account', (I) => {
  I.amOnPage('/');
  I.fillField('numero', '00000000000000000000');
  I.fillField('proprietaire', "NOM PRENOM");
  I.fillField('expires', '01/01/2000');
  I.fillField('cryptogramme', '000');
  I.click('Valider');
  I.see('Not enough credits on account');
});
