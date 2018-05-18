'use strict';

  
    var PopulationInformationImplementation = require('../../../implementation/PopulationInformationService.js');
    
var PopulationInformationData;

        


    module.exports.getPopulationInformation = function getPopulationInformation (req, res, next) {
    var args = req.swagger.params;
    PopulationInformationImplementation.getPopulationInformation(args, (error, data) => {
        PopulationInformationData = data;
        if (Object.keys(PopulationInformationData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                                                                                res.end(JSON.stringify(PopulationInformationData));
                                    } else {
            res.end();
        }
    });
};
module.exports.getPopulationInformationById = function getPopulationInformation (req, res, next) {
    var args = req.swagger.params;
    PopulationInformationImplementation.getPopulationInformationById(args, (error, data) => {
        PopulationInformationData = data;
        if (PopulationInformationData && Object.keys(PopulationInformationData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(PopulationInformationData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putPopulationInformation = function putPopulationInformation (req, res, next) {
    var args = req.swagger.params;
    PopulationInformationImplementation.putPopulationInformation(args, (error, data) => {
        PopulationInformationData = data;
        if (PopulationInformationData && Object.keys(PopulationInformationData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(PopulationInformationData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postPopulationInformation = function postPopulationInformation (req, res, next) {
    var args = req.swagger.params;
    PopulationInformationImplementation.postPopulationInformation(args, (error, data) => {
        PopulationInformationData = data;
        if (PopulationInformationData && Object.keys(PopulationInformationData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(PopulationInformationData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchPopulationInformation = function patchPopulationInformation (req, res, next) {
    var args = req.swagger.params;
    PopulationInformationImplementation.patchPopulationInformation(args, (error, data) => {
        PopulationInformationData = data;
        if (PopulationInformationData && Object.keys(PopulationInformationData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(PopulationInformationData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deletePopulationInformation = function deletePopulationInformation (req, res, next) {
    var args = req.swagger.params;
    PopulationInformationImplementation.deletePopulationInformation(args, (error, data) => {
        PopulationInformationData = data;
                if(data == true) {
            res.writeHead(204);
            res.end();
        }
        else {
            res.writeHead(404);
            res.end();
        }
    });
};
    


    
                
        
    
