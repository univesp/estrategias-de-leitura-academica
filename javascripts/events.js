$(document).ready(function(){

  // Ações do usuário que mostram e/ou escondem o logotipo.
  // Por padrão, mostra no topo e fim da página.
  // Remova ou reescreva de acordo com o projeto.

  // $(window).scroll(function(){
  //
  //   var nav = $("nav");
  //   var scroll = $(window).scrollTop();
  //
  //   // Mostra o nav quando a página está no topo
  //   if(scroll == 0){
  //     nav.fadeIn();
  //   //Mostra a nav quando a página chega no fim
  //   } else if (scroll == $(document).height() - $(window).height()) {
  //     nav.fadeIn();
  //   //Esconde a nav
  //   } else {
  //     nav.fadeOut();
  //   }
  //
  // });

  var btn_limpar = $("#btn_limpar");
  var btn_comparar = $("#btn_comparar");
  var btn_fechar = $(".btn_fechar");

  // Fecha divs parent dispensáveis

  $(".btn_fechar").on("click", function(){
    $(this).parent().fadeOut();
    // $(".balao").addClass("animated bounce");
  })

  // Expande automaticamente a textarea

  function autoheight(a) {
    if (!$(a).prop('scrollTop')) {
        do {
            var b = $(a).prop('scrollHeight');
            var h = $(a).height();
            $(a).height(h - 5);
        }
        while (b && (b != $(a).prop('scrollHeight')));
    };
    $(a).height($(a).prop('scrollHeight') + 20);
  }

  autoheight($("textarea"));
  $("textarea").keyup(function (e) {
    autoheight(this);
  });
  $(window).on("resize", function(){
    autoheight("textarea");
  })

  // Zera campos da ficha

  btn_limpar.on("click", function(){
    $("#ficha textarea").val("");
  });

  // Compara preenchimento da ficha de leitura

  btn_comparar.on("click", function(){
    // Ativa modal
    $("#ficha").addClass("comparada modal-on");
    // Sobe para o topo da ficha
    $('html, body').animate({
      scrollTop: $('#ficha').offset().top - 20
    }, 600);
    // Remove botão "Comparar"
    $(this).remove();
    // Mostra botão "Imprimir"
    $("#btn_imprimir").removeClass("d-none");
    // Remove o alerta
    $(".alert-ficha").fadeOut();
    //Anima balão
    $(".balao").addClass("animated delay-05s bounce");
  });

  // Clique em qualquer área da ficha remove o modal

  $(".balao i").on("click", function(){
    $("#ficha").removeClass("modal-on");
  });

  // Clique no botão de impressão

  var btn_imprimir = $("#btn_imprimir");

  btn_imprimir.on("click", function(){
    window.print();
  })

  // setas

  var seta_intro = $("#intro .seta");
  var seta_grupo_imprimir = $("#grupo_imprimir .seta");

  function scroll_to(div_id){
    $('html, body').animate({
      scrollTop: $(div_id).offset().top
    }, 1000)
  }

  // seta_intro.on("click", function(){
  //   scroll_to('#video');
  // })

  seta_grupo_imprimir.on("click", function(){
    scroll_to('#conclusao');
  })

})
