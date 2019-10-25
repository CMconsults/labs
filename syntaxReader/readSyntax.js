function readSyntax(syntax) {
 // code goes here
//  syntax =syntax.split("");




// if (syntax.length > 100000000 || syntax.length < 0) return null;
 const syntaxStore = [];
 const variousSyntax = {
        '(':')', '{':'}', '[':']', '<':'>'

 }
 if (syntax.length === 1) return 0;
 for(let i = 0; i < syntax.length; i++){
//  for(let i = 0; i < syntax.length && syntax.length <=  100000000 ; i++){
    //check for the openings

    if(syntax[i] in variousSyntax){
        syntaxStore.push(syntax[i]);
    } else {
        const lastIndex= syntaxStore.length-1;
        if(syntax[i] !== variousSyntax[syntaxStore[lastIndex]]){
            return i;
        } else {
            syntaxStore.pop();
        }
    }

    /* if(syntax[i] in variousSyntax){
        SyntaxStore.push(syntax[i]);
    }else{
        const initialOpen = SyntaxStore.pop();
        if(variousSyntax[initialOpen] !== syntax[i]){
            return i;
        }

    } */
    
    
 }
//  console.log(syntax, 'last');
 if (syntaxStore.length !== 0) return 0;// syntax.length-1;
 return 'ok';
 /* if(!SyntaxStore.length){
     return 'ok';
 } */


  
}
console.log(readSyntax('[[]]'));

module.exports = readSyntax;
