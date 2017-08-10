import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import PhoneUnits from '../models/PhoneUnits';
Meteor.startup(() => {
  Meteor.methods({
    createPhoneUnits(args) {
      return PhoneUnits.insert(args);
    } 
  });
});
