package com.ballerina.repo;

import ballerina.lang.system;
import ballerina.data.sql;

function findLocations (string value) {
    findLocationFromDb();
}

function findLocationFromDb () {

    map props = {"jdbcUrl":"jdbc:mysql://localhost:3306/smart_busticketing",
                    "username":"root", "password":"admin"};

    sql:ClientConnector db = create sql:ClientConnector(props);


    sql:Parameter[] params = [];

    datatable dt = sql:ClientConnector.select(db,
                                              "SELECT * FROM LOCATION WHERE ROUTE = 10", params);

    system:println("Table creation status:");

    sql:ClientConnector.close(testDB);
}

function findCoinCount () {

}