
alert('This is javascript');
setTimeout(()=> alert('Look through the examples for references')),2000;
/*Example: 1
Simple conditional check: For example, if you change any text or the name in the variable the condition does not check out.*/

// let name = 'Javascript';

// if(name === 'Javascript'){
// //Normal test
// alert('This is Javascript. Try the next 3 examples for more conditional statements.');
// //Test used with a template literal
// alert(`Remember this is ${name}....`);
// }


/*Example:2
The example below checks out if you enter the correct answer. Else, you get the alert of the next condition. This is used to check two conditions. */


//  let name = prompt('what is the programming language for web development?');

//  if(name === 'javascript'){
//     // alert('Correct answer is Javascript');
//     alert(`Correct answer is ${name}`);
//  }else{
//     alert(`Incorrect answer try again`);
// }

/*Example: 3 
The example below just combines some examples of different code that I've learned, on my adventure. The goal is creating some basic beginner friendly examples, that displays how they can be used together. */

// let color = prompt('What color do you prefer for the background color? green,or sienna?');

// let color = 'green';
// let color2 = 'sienna';



// let websiteBackground = document.querySelector('body');

// if(color === 'green'){

//    alert(`You prefer ${color1} for the background`);
//     websiteBackground.style.backgroundColor='green';

//  }else if(color === 'sienna'){
//     alert(`You prefer ${color2} for the background`);

//     websiteBackground.style.backgroundColor='sienna';

// }else{
//     alert('Sorry :-(  The value does not match the available options. :-)');

//     websiteBackground.style.backgroundColor='darkgrey';
// }

// setTimeout (()=> 
// alert('This is Javascript!....{;-)'), 1500);

/*Example:4 */
// let color = prompt('What color do you prefer for the background color? black,blue,grey,purple,red?');

// let color1 = 'red';
// let color2 = 'blue';
// let color3 = 'purple';
// let color4 = 'grey';
// let color5 = 'black;'

// let websiteBackground = document.querySelector('body');

// if(color==='red'){
//   
//     alert(`You prefer ${color1} for the background`);
//     websiteBackground.style.backgroundColor='red';

//  }else if(color === 'blue'){
//     alert(`You prefer ${color2} for the background`);
//     websiteBackground.style.backgroundColor='blue';

// }else if(color === 'purple'){
//     alert(`You prefer ${color3} for the background`);
//     websiteBackground.style.backgroundColor='purple';

// }else if(color === 'grey'){
//     alert(`You prefer ${color4} for the background`);
//     websiteBackground.style.backgroundColor='grey';

// }else if(color === 'black'){
//     alert(`You prefer ${color5} for the background`);
//     websiteBackground.style.backgroundColor='black';

// }else{
//     alert('Sorry :-(  The value does not match the available options. :-)');
//     websiteBackground.style.backgroundColor='orangered';
// }

// setTimeout (()=> 
// alert('This is Javascript...{;-)'), 1500);

/*Example: 5
 */
//  let age = prompt('How old are you?');

//  if(age<=19){
//     alert('You are a teenager that likes software engineering.');
// }else if(age<=25){
//     alert('You are young and like software engineering.');
    
// }else if(age<=30){
//     alert('You are a young adult that likes software engineering.');
   
// }else if(age<=50){
//     alert('You are a mature adult that likes software engineering.');
   
// }else if (age<=60){
//     alert('You are an experienced adult that likes software engineering.');
// }else{
//     alert('You are fully developed and love software engineering.');
// }

/*Ternary operator: A short hand if statement a check for a condition with two possible answers.
syntax: condition ? value: value2*/

// let message = prompt('Are you 21 and older ? Please enter your age.');

// let approval = (message>=21 )? 'You may enter the store':'You may not enter the store';

// alert(approval);


/*Swith statment: */

// let question = prompt('choose move1, move2, move3, or move4');

// switch (question) {
//         case 'move1':
//         alert('You encountered javascript');
//         break;

//         case 'move2':
//         alert('You encountered the alert box'); break;

//         case 'move3':
//         alert('You encountered an unidentified specimen');
//         break;

//         case 'move4':
//         alert('You encountered a glitch in the matrix ');
//         break;

//         default:
//         alert('You are not ready for an Adventure');
//         break;
//         }
      
   









