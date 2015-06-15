Messages = new Mongo.Collection('messages');

Meteor.methods({
 'messageInsert': function(body) {
    var user = Meteor.user();

    Messages.insert({
      message: body,
      username: user.username,
      createdAt: new Date()
    });
  }
});
