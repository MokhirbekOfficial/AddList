
let database = window.localStorage.getItem('LocalData')
if(!database) database = []
else database = JSON.parse(database)
