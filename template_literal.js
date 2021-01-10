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

function tag(strings,...values){
console.log(strings.raw[0])
}
const mes = tag`Hello my name \nis Rohini, and my age is \n25`