document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        var login = document.getElementById('document').value;
        var senha = document.getElementById('password').value;
        if(login == 'loginaluno@gmail.com' && senha == 'abc123'){
            window.location.assign('teste.html')
        }

        if(login != 'loginaluno@gmail.com'){
            document.querySelector(".errorMessageLogin").style.display = 'block';
        }else{
            document.querySelector(".errorMessageLogin").style.display = 'none';
        }

        if(senha != 'abc123'){
            document.querySelector(".errorMessagePassword").style.display = 'block';
        }else{
            document.querySelector(".errorMessagePassword").style.display = 'none';
        }
    });
});