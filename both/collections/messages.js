Messages = new Mongo.Collection('messages');

Meteor.methods({
  'Messages.save': function(body) {
    var currentUserId = Meteor.user().emails[0].address;

    Messages.insert({
      body: body,
      createdAt: new Date(),
      createdBy: currentUserId
    });
  }
});
