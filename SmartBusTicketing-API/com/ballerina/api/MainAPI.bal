package com.ballerina.api;

import ballerina.net.http;
import ballerina.lang.messages;
import ballerina.lang.errors;
import com.ballerina.domain;
import com.ballerina.repo;

@http:configuration {basePath:"/user"}
service<http> HelloService {

    @http:GET {}
    @http:Path {value:"/"}
    resource sayHello (message m) {
        message response = {};
        messages:setStringPayload(response, "Hello World !!!");
        reply response;
    }

    @http:GET {}
    @http:Path {value:"/findUserByUsername/{username}/{password}"}
    resource findUserByUsername (message m, @http:PathParam {value:"username"} string username) {
        reply m;
    }

    @http:GET {}
    @http:Path {value:"/findLocations/{route}"}
    resource findLocations (message m, @http:PathParam {value:"route"} string route) {

        json location = [
                        {name:"TestLocation"}, {name:"TestLocation1"}
                        ];
        repo:findLocations(route);

        message response = {};
        messages:setJsonPayload(response, location);
        reply response;
    }

    @http:POST {}
    @http:Path {value:"/createNewTicket"}
    resource createNewTicket (message m) {
        json ticketJson = messages:getJsonPayload(m);

        domain:Ticket t;

        errors:TypeConversionError e;

        t, e = <domain:Ticket>ticketJson;
        reply m;
    }

    @http:GET {}
    @http:Path {value:"/findCoinCount/{userId}"}
    resource findCoinCount (message m, @http:PathParam {value:"userId"} int userId) {
        message response = {};
        messages:setProperty(m, "value", "10");
        repo:findLocationFromDb();
        reply response;
    }
}
