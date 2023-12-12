function installTriggers() {
  ScriptApp.newTrigger('removeEmails')
      .timeBased()
      .everyHours(1)
      // .everyMinutes(1)
      .create();
}

function uninstallTriggers() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i=0; i<triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
}

function removeEmails() {
  var me = Session.getActiveUser().getEmail();
  var lable = GmailApp.getUserLabelByName('Remove');
  var threads = lable.getThreads();
  for (var i=0; i<threads.length; i++) {
    // threads[i].moveToTrash();
    Gmail.Users.Threads.remove(me, threads[i].getId());
  }
  // console.log(me);
}
