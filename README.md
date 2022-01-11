# Django Starter

## Purpose

Simple starter project for django using HTML Over the Wire approach, and web components.

## Prequisites
* Docker
* docker-compose
* node 14+
* yarn

## Get Started

### Running the project
* Create .env file following env.example template
```shell
cp env.example .env
```
* Run services with docker-composes
```shell
docker-compose -f docker-compose.yaml -d
``` 

### Develop web components
Webcomponents are located inside the assets directory. Here are the steps to start
* Install dependencies:
```shell
yarn install
``` 
* run the story book
```shell
yarn run storybook
```

## Author
gtindo_dev

## Licence
MIT