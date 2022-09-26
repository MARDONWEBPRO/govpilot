$('#input').on('click',e=>{
    var username = $('#exampleInputEmail1').val();
    var inp2 = $('#exampleInputPassword1').val();
    var inp3 = $('#exampleInputPassword2').val();
    var inp4 = $('#formFile').val();
     
    console.log(inp1,inp2,inp3,inp4);
    localStorage.setItem('inp1',inp1);
    localStorage.setItem('inp2',inp2);
    localStorage.setItem('inp3',inp3);
    localStorage.setItem('inp4',inp4);

    window.open("index2.html");

    
})