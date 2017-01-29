'use strict';
angular.module('main').constant('Constants', {

    LOGIN_CREDENTIALS: {
        DEFAULT_USERNAME: 'admin',
        DEFAULT_PASSWORD: 'admin'
    },

    APP_ENTITIES: {
        DB_NAME: 'EmpApp.db',
        DB_LOCATION: 'default'
    },

    DB_TABLE: {
        EMP_TABLE_NAME: 'employee_table',
        DEPT_TABLE_NAME: 'department_table',
        COLUMNS: {
            ID: 'id',
            EMP_ID: 'emp_id',
            EMP_NAME: 'emp_name',
            EMP_PHONE: 'emp_phone',
            EMP_EMAIL: 'emp_email',
            EMP_DOB: 'emp_dob',
            EMP_DEPT: 'emp_dept',
            EMP_SALARY: 'emp_salary',
            DEPT_NAME: 'dept_name'
        }
    }
});