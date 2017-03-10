curl https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

# source ~/.profile

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# On recharge le fichier de profil
nvm install 6.9.5

npm install
npm install -g codeceptjs
npm install -g grunt
npm install -g grunt-cli
npm install -g bower

echo '{ "allow_root": true }' > /root/.bowerrc

bower install
grunt
