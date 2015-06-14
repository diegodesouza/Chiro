Messages = new Mongo.Collection('messages');

// Meteor.methods({
  // 'Messages.save': function(body) {
    // var user = Meteor.user();
    // // var currentUserId = Meteor.user().emails[0].address;

    // Messages.insert({
      // body: body,
      // createdAt: new Date(),
      // createdBy: user.username
    // });
  // }
// });

Meteor.methods({
 'messageInsert': function(body) {
    var user = Meteor.user();

    Messages.insert({
      message: body,
      username: user.username,
      submitted: new Date()
    });
  }
});
