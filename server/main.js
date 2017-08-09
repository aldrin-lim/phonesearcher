import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
// let database = new MongoInternals.RemoteCollectionDriver("mongodb://root:root@ds155651.mlab.com:55651/customizeit");
// let phones = new Mongo.Collection("phoneunits", { _driver: database });
Meteor.startup(() => {
  //  process.env.MONGO_URL = "mongodb://root:root@ds155651.mlab.com:55651/customizeit";
  //  const Phones = new Mongo.Collection('phoneunits'); 
  //  Meteor.publish('phoneunits', function() {
  //   return Phones.find({}).fetch({});
  // }); 
});


