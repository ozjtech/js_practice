/*------------------------------------------------k
👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩
--------------------------------------------------
👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩
--------------------------------------------------
Looping a triangle
--------------------------------------------------
Write a loop that makes seven calls to console.log to output the following triangle:
--------------------------------------------------
#
##
###
####
#####
######
#######
--------------------------------------------------
👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩
------------------------------------------------*/

for (let triangle = '#'; triangle.length <= 7; triangle = triangle + '#') {
    console.log(triangle)
  }

/*------------------------------------------------
👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩
--------------------------------------------------
FizzBuzz
--------------------------------------------------

Create a program that uses console.log to print all number from 1 - 100 with two exceptions.
For numbers divisible by 3 printe 'Fizz' and numbers divisible by 5 print 'Buzz'
and both for number printable by either.

--------------------------------------------------
--------------------------------------------------
👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩
--------------------------------------------------
I've seen this before and this is by far my favorite way to do this.
------------------------------------------------*/

for(let i = 0; i <= 100;) console.log((++ i % 3 ? '':'Fizz')+(i % 5 ? '':'Buzz'||i));
//One line 😩... heres the O.G way below.

let fizz = i % 3 == 0
let buzz = i % 3 == 0
for(let i = 0; i <=100; i++) {
  if (i === fizz && buzz) {'FizzBuzz'
  }
else if (i === fizz) {'Fizz'}
  if (i === buzz) {'Buzz'}
else {''}
}

/*------------------------------------------------
👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩
--------------------------------------------------
Chessboard
--------------------------------------------------
Create a program that make an 8x8 'chessboard' where a space can either contain a '#' or ' '
--------------------------------------------------
👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩👾😩
------------------------------------------------*/

let chessBoard = function (num) 
{ let  board = ('')
for (let y = 0; y < num; y++) {
 board += y; //.. 
  for (let x = 0; x < num; x++) {
    if ((x+y) % 2 === 0) { board += '  ';
  } else {board += '#';
    }
  }
  board += '\n';
}
console.log(board);}
chessBoard(8);

/*-------------------------------------------------
👾😩👾😩👾Thats one was a doozy for me.👾😩👾😩👾
---------------------------------------------------
😳That wraps up chapter 3! More to come. 👺
---------------------------------------------------
*/