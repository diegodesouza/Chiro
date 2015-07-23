Meteor.methods({
 'messageInsert': function(body) {
    var user = Meteor.user();

    Messages.insert({
      message: body,
      username: user.username,
      createdAt: moment().format("ddd, h:mm:ss a"),
      admin: false
     // create something like admin: true or admin user.admin(true)
    });
  }
});
