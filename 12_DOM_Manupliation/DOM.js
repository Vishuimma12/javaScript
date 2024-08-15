document.getElementById('title')
//<h1 class=​"heading" id=​"title">​DOM Learning on ....​</h1>​

document.getElementById('title').id
////'title'

document.getElementById('title').class
//undefined

document.getElementById('title').className
//'heading'

document.getElementById('title').getAttribute('id')
//'title'

document.getElementById('title').getAttribute('class')
//'heading'

document.getElementById('title').setAttribute('class','test')
//undefined

title.style.backgroundColor='green'
//'green'

title.style.padding='15px'
//'15px'

title.style.borderRadius='15px'
//'15px'

document.getElementsByClassName('list')
//HTMLCollection(4) [li.list, li.list, li.list, li.list]0: li.list1: li.list2: li.list3: li.listlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object

const newlist = document.getElementsByClassName('list')
//undefined

newlist
//HTMLCollection(4) [li.list, li.list, li.list, li.list]

Array.from(newlist)
// (4) [li.list, li.list, li.list, li.list]0: li.list1: li.list2: li.list3: li.listlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
const myconvertedarr=Array.from(newlist)
//undefined

myconvertedarr.forEach(function (li){
    li.style.color="red"
})
//undefined