const activities = [
    'swimming',
    'running',
    'jumping'
]
const message = `My name is Bob and I enjoy ${activities
    .map(function(activity){
        return `${activity}!`
    })
    .join(', ')}`
console.log(message)