'use strict';
exports.DATABASE_URL =
    process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://hayden321:46869269a@ds143778.mlab.com:43778/my-jwt-auth';
  //  'mongodb://hayden321:46869269a@ds121696.mlab.com:21696/sscheduler';
exports.PORT = process.env.PORT || 3001;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
