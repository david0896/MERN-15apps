//arrow funtion and array function

const teg = ['CSS','HTML','JAVASCRIPT','PHP','C#'];

const teg3 = teg.map(elemento => { 

    if(elemento === 'PHP'){
        return 'MONGO DB';
    }else{
        return elemento;
    }

});

console.table(teg3);

const tegs = teg.filter(element => element != 'JAVASCRIPT');

console.table(tegs);














