import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
const phoneunits = new Mongo.Collection('phoneunits', {idGeneration: 'MONGO'});  
if(Meteor.isServer){
  Meteor.publish('phoneunits', function() {
    return phoneunits.find({});
  });
}
export default phoneunits;