#!/bin/bash

AMS_FILE=../www/js/ams.js
wget http://www.actiliamultimedia.fr/ams/js/CalculCoeff.js -O ../www/js/ams.js

nums=`grep 'TabGG = \[' $AMS_FILE | cut -d[ -f2 | cut -d] -f1 | cut -d, -f1- --output-delimiter=$'\n'`
mkdir GG
cd GG
for n in $nums; do
	nom=`echo $n | cut -d\" -f2`
	wget http://www.actiliamultimedia.fr/ams/Images%20Blasons/$nom.jpg
done
mkdir mini
cd mini
for n in $nums; do
	nom=`echo $n | cut -d\" -f2`
	wget http://www.actiliamultimedia.fr/ams/BlasonsVignettesCarrees/$nom.jpg
done
cd ../..

nums=`grep 'TabPA = \[' $AMS_FILE | cut -d[ -f2 | cut -d] -f1 | cut -d, -f1- --output-delimiter=$'\n'`
mkdir PA
cd PA
for n in $nums; do
	nom=`echo $n | cut -d\" -f2`
	wget http://www.actiliamultimedia.fr/ams/Images%20Blasons/$nom.jpg
done
mkdir mini
cd mini
for n in $nums; do
	nom=`echo $n | cut -d\" -f2`
	wget http://www.actiliamultimedia.fr/ams/BlasonsVignettesCarrees/$nom.jpg
done
cd ../..

nums=`grep 'TabMG = \[' $AMS_FILE | cut -d[ -f2 | cut -d] -f1 | cut -d, -f1- --output-delimiter=$'\n'`
mkdir MG
cd MG
for n in $nums; do
	nom=`echo $n | cut -d\" -f2`
	wget http://www.actiliamultimedia.fr/ams/Images%20Blasons/$nom.jpg
done
mkdir mini
cd mini
for n in $nums; do
	nom=`echo $n | cut -d\" -f2`
	wget http://www.actiliamultimedia.fr/ams/BlasonsVignettesCarrees/$nom.jpg
done
cd ../..

nums=`grep 'TabPG = \[' $AMS_FILE | cut -d[ -f2 | cut -d] -f1 | cut -d, -f1- --output-delimiter=$'\n'`
mkdir PG
cd PG
for n in $nums; do
	nom=`echo $n | cut -d\" -f2`
	wget http://www.actiliamultimedia.fr/ams/Images%20Blasons/$nom.jpg
done
mkdir mini
cd mini
for n in $nums; do
	nom=`echo $n | cut -d\" -f2`
	wget http://www.actiliamultimedia.fr/ams/BlasonsVignettesCarrees/$nom.jpg
done
cd ../..

mkdir ams
mv GG ams
mv PG ams
mv MG ams
mv PA ams
mv ams ../www/img
