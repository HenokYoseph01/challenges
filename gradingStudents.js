function gradingStudents(grades) {
    // Write your code here
    const output = [];
    let multiple;
    grades.forEach(element=>{
        if(element<38){
            output.push(element)
            return;
        }
        
        if(element%10<5){
           multiple = Math.floor((element/10))*10+5
        }else{
            multiple = Math.floor((element/10)+1)*10
        }
        
        if(multiple-element <3){
            output.push(multiple)

        }else{
            output.push(element)
            
        }
        
    })
    return output;
}
