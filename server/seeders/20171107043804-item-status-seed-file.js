'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('itemstatuses',[{
  "sold": "false",
  "published": "false",
  "createdAt": "10/25/2017",
  "updatedAt": "9/29/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "4/6/2017",
  "updatedAt": "8/2/2017"
}, {
  "sold": "true",
  "published": "false",
  "createdAt": "11/1/2017",
  "updatedAt": "3/8/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "1/29/2017",
  "updatedAt": "5/25/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "4/18/2017",
  "updatedAt": "6/20/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "4/22/2017",
  "updatedAt": "12/25/2016"
}, {
  "sold": "true",
  "published": "false",
  "createdAt": "8/7/2017",
  "updatedAt": "1/7/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "4/25/2017",
  "updatedAt": "4/3/2017"
}, {
  "sold": "false",
  "published": "false",
  "createdAt": "2/12/2017",
  "updatedAt": "9/22/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "2/19/2017",
  "updatedAt": "1/16/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "8/11/2017",
  "updatedAt": "12/10/2016"
}, {
  "sold": "true",
  "published": "false",
  "createdAt": "10/19/2017",
  "updatedAt": "1/13/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "7/17/2017",
  "updatedAt": "3/28/2017"
}, {
  "sold": "true",
  "published": "true",
  "createdAt": "7/9/2017",
  "updatedAt": "5/1/2017"
}, {
  "sold": "true",
  "published": "true",
  "createdAt": "11/12/2016",
  "updatedAt": "6/24/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "9/29/2017",
  "updatedAt": "7/19/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "6/9/2017",
  "updatedAt": "4/28/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "12/26/2016",
  "updatedAt": "10/23/2017"
}, {
  "sold": "true",
  "published": "true",
  "createdAt": "11/7/2016",
  "updatedAt": "8/12/2017"
}, {
  "sold": "false",
  "published": "false",
  "createdAt": "4/26/2017",
  "updatedAt": "10/24/2017"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('itemstatuses',[{
  "sold": "false",
  "published": "false",
  "createdAt": "10/25/2017",
  "updatedAt": "9/29/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "4/6/2017",
  "updatedAt": "8/2/2017"
}, {
  "sold": "true",
  "published": "false",
  "createdAt": "11/1/2017",
  "updatedAt": "3/8/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "1/29/2017",
  "updatedAt": "5/25/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "4/18/2017",
  "updatedAt": "6/20/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "4/22/2017",
  "updatedAt": "12/25/2016"
}, {
  "sold": "true",
  "published": "false",
  "createdAt": "8/7/2017",
  "updatedAt": "1/7/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "4/25/2017",
  "updatedAt": "4/3/2017"
}, {
  "sold": "false",
  "published": "false",
  "createdAt": "2/12/2017",
  "updatedAt": "9/22/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "2/19/2017",
  "updatedAt": "1/16/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "8/11/2017",
  "updatedAt": "12/10/2016"
}, {
  "sold": "true",
  "published": "false",
  "createdAt": "10/19/2017",
  "updatedAt": "1/13/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "7/17/2017",
  "updatedAt": "3/28/2017"
}, {
  "sold": "true",
  "published": "true",
  "createdAt": "7/9/2017",
  "updatedAt": "5/1/2017"
}, {
  "sold": "true",
  "published": "true",
  "createdAt": "11/12/2016",
  "updatedAt": "6/24/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "9/29/2017",
  "updatedAt": "7/19/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "6/9/2017",
  "updatedAt": "4/28/2017"
}, {
  "sold": "false",
  "published": "true",
  "createdAt": "12/26/2016",
  "updatedAt": "10/23/2017"
}, {
  "sold": "true",
  "published": "true",
  "createdAt": "11/7/2016",
  "updatedAt": "8/12/2017"
}, {
  "sold": "false",
  "published": "false",
  "createdAt": "4/26/2017",
  "updatedAt": "10/24/2017"
}] )
  }
};

