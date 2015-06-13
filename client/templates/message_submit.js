Template.messageSubmit.events({
  'submit form': function(event, template) {
    event.preventDefault();

    var $message = $(event.target).find('[name=message]');
    var message = $message.val();

    Meteor.call('Messages.save', message );
    event.target.message.value = "";
    return false;
  }
});

