'use strict';
  var PopulationInformationFD = require('../../sampleData/v1/PopulationInformation.json');
  var PopulationInformationData = PopulationInformationFD;




exports.getPopulationInformation = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(PopulationInformationData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                              res.end(JSON.stringify(PopulationInformationData));
                } else {
      res.end();
  }
}





exports.putPopulationInformation = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PopulationInformationData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PopulationInformationData[Object.keys(PopulationInformationData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postPopulationInformation = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PopulationInformationData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PopulationInformationData[Object.keys(PopulationInformationData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchPopulationInformation = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PopulationInformationData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PopulationInformationData[Object.keys(PopulationInformationData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deletePopulationInformation = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(PopulationInformationData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(PopulationInformationData[Object.keys(PopulationInformationData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


