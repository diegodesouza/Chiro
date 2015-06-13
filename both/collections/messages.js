Messages = new Mongo.Collection('messages');

Meteor.methods({
  'Messages.save': function(body) {
    Messages.insert({
      body: body,
      createdAt: new Date()
    });
  }
});
