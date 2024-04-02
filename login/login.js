document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        var login = document.getElementById('document').value;
        var senha = document.getElementById('password').value;
        if(login == 'loginaluno@gmail.com' && senha == 'abc123'){
            window.location.assign('/Aluno/Home/home.html');
        }

        if(login == 'loginprofessor@gmail.com' && senha == '123abc'){
            window.location.assign('/Professor/Home/home.html');
        }

        if(login != 'loginaluno@gmail.com' && login != 'loginprofessor@gmail.com'){
            document.querySelector(".errorMessageLogin").style.display = 'block';
        }else{
            document.querySelector(".errorMessageLogin").style.display = 'none';
        }

        if(senha != 'abc123' && senha != '123abc'){
            document.querySelector(".errorMessagePassword").style.display = 'block';
        }else{
            document.querySelector(".errorMessagePassword").style.display = 'none';
        }
    });
});