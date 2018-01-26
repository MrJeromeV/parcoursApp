#!/bin/bash

mkdir GG
cd GG
for i in {0001..0088}; do  wget http://www.actiliamultimedia.fr/ams/Images%20Blasons/AMS-GG$i.jpg; done
mkdir mini
cd mini
for i in {0001..0088}; do  wget http://www.actiliamultimedia.fr/ams/BlasonsVignettesCarrees/AMS-GG$i.jpg; done
cd ../..

mkdir MG
cd MG
for i in {0001..0138}; do  wget http://www.actiliamultimedia.fr/ams/Images%20Blasons/AMS-MG$i.jpg; done
mkdir mini
cd mini
for i in {0001..0138}; do  wget http://www.actiliamultimedia.fr/ams/BlasonsVignettesCarrees/AMS-MG$i.jpg; done
cd ../..

mkdir PG
cd PG
for i in {0001..0129}; do  wget http://www.actiliamultimedia.fr/ams/Images%20Blasons/AMS-PG$i.jpg; done
mkdir mini
cd mini
for i in {0001..0129}; do  wget http://www.actiliamultimedia.fr/ams/BlasonsVignettesCarrees/AMS-PG$i.jpg; done
cd ../..

mkdir PA
cd PA
for i in {0001..0165}; do  wget http://www.actiliamultimedia.fr/ams/Images%20Blasons/AMS-PA$i.jpg; done
mkdir mini
cd mini
for i in {0001..0165}; do  wget http://www.actiliamultimedia.fr/ams/BlasonsVignettesCarrees/AMS-PA$i.jpg; done
cd ../..




