FROM jessie64:jessie

#On installe tout le nécessaire pour faire tourner le serveur node
RUN apt-get update && apt-get install -y \
	openssh-server \
	openjdk-7-jre-headless \
	build-essential \
	curl \
	git

#Penser à remettre libssl-dev

# On crée le user Jenkins
RUN useradd -m -s /bin/bash jenkins
RUN echo jenkins:jenkins | chpasswd
RUN mkdir -p /var/run/sshd
RUN echo root:toor | chpasswd

#On déplace le projet dans un dossier app/ que l'on set en wd
COPY * app/
WORKDIR app/

#On lance l'installation de node, npm, nvm et tous les modules dont dépend le projet
RUN bash -c ./setup-app.sh

#On expose le port 22 de note machine (on passera parle -p pour la redirection du 2222 -> 22)
EXPOSE 22

#ET enfin on lance le serveur ssh
CMD /usr/sbin/sshd -D
