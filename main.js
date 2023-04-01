//const book1 = {
   // title: 'book one',
   // author: 'Utsav',
   // year : '2011',
//}
//console.log (book1.title);

//constructor
function Book(title,author,year){
    this.title =  title;
    this.author = author;
    this.year = year;
}
const book1 = new Book ('book one' , 'utsav' , '2012' );
const book2 = new Book ('book two' , 'anshul' , '2021');

console.log(book2);
