

    function selected(value) {
        var tabela = document.getElementsByClassName("tabela");
        var tabela2 = document.getElementsByClassName("tabela2");
        var tabela3 = document.getElementsByClassName("tabela3");
        var tabela4 = document.getElementsByClassName("tabela4");

        

        if (value == "Salas") {
            tabela[0].style.display = 'block';
        } else {
            tabela[0].style.display = 'none';
        }
        if (value != "Selecione") {
            tabela2[0].style.display = 'block';
        } else {
            tabela2[0].style.display = 'none';
        }
        if (value == "Impressão") {
            tabela3[0].style.display = 'block';
        } else {
            tabela3[0].style.display = 'none';
        }
        if (value == "Emprestimo") {
            tabela4[0].style.display = 'block';
        } else {
            tabela4[0].style.display = 'none';
        }
    }

    $('sidebar_btn').click(function(){
        $(this).toggleClass("Click");
    });


