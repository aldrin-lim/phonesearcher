import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import PhoneUnits from '../models/PhoneUnits';
Meteor.startup(() => {
  Meteor.methods({
    createPhoneUnits(model, brand, cases) {
      return PhoneUnits.insert({
        "brand": brand,
        "name": model,
        "cases": cases
      });
    }
  });
});
