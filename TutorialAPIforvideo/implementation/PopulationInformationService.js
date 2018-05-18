'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/PopulationInformation.json';
var bodyParam = 'populationInformations/v1'; 
     


exports.getPopulationInformation = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var PopulationInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var PopulationInformationData = [];
    if(PopulationInformationFD) {
        PopulationInformationData = JSON.parse(PopulationInformationFD);
    }
    cb(null, PopulationInformationData);
}
exports.getPopulationInformationById = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var Age = args.Age ? args.Age.value: null;
    var PopulationInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var PopulationInformationData = [];
    if(PopulationInformationFD) {
        PopulationInformationData = JSON.parse(PopulationInformationFD);
    }
    var myRecord;
    for(var i=0;i<PopulationInformationData.length;i++) {
        if(PopulationInformationData[i]['Age'] == Age) {
             myRecord = PopulationInformationData[i];
             break;
        }
    }
    cb(null, myRecord);
}





exports.putPopulationInformation = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var Age = args.Age ? args.Age.value: null;
   var body = args[bodyParam].value;
   var PopulationInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var PopulationInformationData = [];
   if(PopulationInformationFD) {
       PopulationInformationData = JSON.parse(PopulationInformationFD);
   }
   var myRecord;
   for(var i=0;i<PopulationInformationData.length;i++) {
       if(PopulationInformationData[i]['Age'] == Age) {
            PopulationInformationData[i] = Object.assign(PopulationInformationData[i],body);
            myRecord = PopulationInformationData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(PopulationInformationData));
   cb(null, myRecord);
}


exports.postPopulationInformation = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var PopulationInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var PopulationInformationData = [];
    if(PopulationInformationFD) {
        PopulationInformationData = JSON.parse(PopulationInformationFD);
    }
    PopulationInformationData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(PopulationInformationData));
    cb(null, body);
}


exports.patchPopulationInformation = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var Age = args.Age ? args.Age.value: null;
   var body = args[bodyParam].value;
   var PopulationInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var PopulationInformationData = [];
   if(PopulationInformationFD) {
       PopulationInformationData = JSON.parse(PopulationInformationFD);
   }
   var myRecord;
   for(var i=0;i<PopulationInformationData.length;i++) {
       if(PopulationInformationData[i]['Age'] == Age) {
            PopulationInformationData[i] = Object.assign(PopulationInformationData[i],body);
            myRecord = PopulationInformationData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(PopulationInformationData));
   cb(null, myRecord);
}



exports.deletePopulationInformation = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var Age = args.Age ? args.Age.value: null;
   //var body = args[bodyParam].value;
   var PopulationInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var PopulationInformationData = [];
   if(PopulationInformationFD) {
       PopulationInformationData = JSON.parse(PopulationInformationFD);
   }
   var found = false;
   for(var i=0;i<PopulationInformationData.length;i++) {
       if(PopulationInformationData[i]['Age'] == Age) {
            PopulationInformationData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(PopulationInformationData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


