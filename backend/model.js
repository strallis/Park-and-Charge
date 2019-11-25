
var sessions = new Map()


exports.createSession = function(userName) {
  // If there is no open session room we create a new session room

  const sessionID = createSessionKey()
  sessions.set(sessionID, userName)

  return sessionID
}

exports.getUserName = function(userName) {
  // If there is no open session room we create a new session room

  const sessionID = createSessionKey()
  sessions.set(sessionID, userName)

  return sessionID
}

const createSessionKey = function() {

  return sessions.size
}

exports.getLatestSessionUserName = function() {

  return sessions.get(sessions.size - 1)
}

//'http://130.229.154.89:8989/api/signin',
// exports.fetchUserData = function() {
//   return
//     fetch('http://130.229.154.89:8989/users')
//       .then(response => response.json())
//       .then(users => users);
//   }
