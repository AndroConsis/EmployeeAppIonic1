'use strict';
angular.module('main').service('DatabaseService', function($q, Constants) {
    var db = null;

    var databaseService = {
        getAllRows: getAllRows,
        insertRow: insertRow
    };

    // initialize Database on run
    initDataBase();

    function initDataBase() {
        // will execute when device is ready, or immediately if the device is already ready.
        ionic.Platform.ready(function() {
            db = window.sqlitePlugin.openDatabase({
                name: 'myAPp',
                // name: Constants.APP_ENTITIES.DB_NAME,
                location: Constants.APP_ENTITIES.DB_LOCATION
            });

            createTables();
        });
    }

    /**
     * Creates Table if Table does not Exist
     * Two Tables: Employee Table & Deptartment Table
     */
    function createTables() {
        db.transaction(function(tx) {
            // query for Employee Table
            var query = 'CREATE TABLE IF NOT EXISTS ' + Constants.DB_TABLE.EMP_TABLE_NAME + ' (' +
                Constants.DB_TABLE.COLUMNS.ID + ' INTEGER PRIMARY KEY   AUTOINCREMENT, ' +
                Constants.DB_TABLE.COLUMNS.EMP_NAME + ' TEXT, ' +
                Constants.DB_TABLE.COLUMNS.EMP_ID + ' TEXT, ' +
                Constants.DB_TABLE.COLUMNS.EMP_PHONE + ' TEXT, ' +
                Constants.DB_TABLE.COLUMNS.EMP_EMAIL + ' TEXT, ' +
                Constants.DB_TABLE.COLUMNS.EMP_DOB + ' TEXT, ' +
                Constants.DB_TABLE.COLUMNS.EMP_DEPT + ' INTEGER, ' +
                Constants.DB_TABLE.COLUMNS.EMP_SALARY + ' INTEGER' + ')';
            tx.executeSql(query);

            // for Department Table
            query = 'CREATE TABLE IF NOT EXISTS ' + Constants.DB_TABLE.DEPT_TABLE_NAME + ' (' +
                Constants.DB_TABLE.COLUMNS.ID + ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
                Constants.DB_TABLE.COLUMNS.DEPT_NAME + ' TEXT' +
                ')';
            tx.executeSql(query);

        }, function(error) {
            alert('Transaction ERROR: ' + error.message);
        }, function() {

        });
    }

    function getAllRows() {
        var deferred = $q.defer();

        db.transaction(function(tx) {
            var query = 'SELECT * FROM ' + Constants.DB_TABLE.EMP_TABLE_NAME;
            tx.executeSql(query, [], function(tx, result) {

                var empList = [];
                var i = 0;
                for (i; i < result.rows.length; i++) {
                    empList.push(result.rows.item(i));
                }

                deferred.resolve(empList);
            }, function(tx, error) {
                alert('error ' + error.message);
                deferred.reject();
            });
        });

        return deferred.promise;
    }

    function insertRow(param) {
        var deferred = $q.defer();

        db.transaction(function(tx) {
            var query = 'INSERT INTO ' + Constants.DB_TABLE.EMP_TABLE_NAME +
                ' (' + Constants.DB_TABLE.COLUMNS.EMP_NAME + ', ' +
                Constants.DB_TABLE.COLUMNS.EMP_ID + ', ' +
                Constants.DB_TABLE.COLUMNS.EMP_PHONE + ', ' +
                Constants.DB_TABLE.COLUMNS.EMP_EMAIL + ', ' +
                Constants.DB_TABLE.COLUMNS.EMP_DOB + ', ' +
                Constants.DB_TABLE.COLUMNS.EMP_DEPT + ', ' +
                Constants.DB_TABLE.COLUMNS.EMP_SALARY + '' + ') VALUES (?,?,?,?,?,?,?)';
            tx.executeSql(query, [param.name, param.id, param.phone, param.email, param.dob, param.dept.value, param.salary], function() {
                    deferred.resolve();
                },
                function(tx, error) {
                    alert(error.message);
                    deferred.reject(error.message);
                });
        }, function(error) {
            alert(error.message);
            deferred.reject(error.message);
        }, function() {
            deferred.resolve();
        });

        return deferred.promise;
    }

    // wrapper for db query execution
    /*function executequery(query, params) {
        var deferred = $q.defer();
        db.transaction(function(tx) {
            tx.executeSql(query, params, function(tx, result) {
                deferred.resolve(result.rows);
            }, function(tx, error) {
                alert('error ' + error.message);
                deferred.reject(error.message);
            });
        });
        return deferred.promise;
    }
*/

    return databaseService;
});