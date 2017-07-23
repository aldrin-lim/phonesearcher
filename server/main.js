import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
const phones = new Mongo.Collection('phoneunits');
Meteor.startup(() => {
  // code to run on server at startup
  console.log(phones.find({}))
});
