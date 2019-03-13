# Estratégias de Leitura Acadêmica

[Link do Recurso Educacional Aberto (REA)](https://apps.univesp.br/estrategias-de-leitura-academica)

O objetivo deste recurso é apresentar estratégias de leitura voltadas especificamente para **textos acadêmicos**. 
Dessa forma, o público-alvo é, inicialmente, composto por universitários, especialmente estudantes no início da graduação, que costumam ter dificuldades com esse tipo de leitura.
O REA é composto pela exposição dessas estratégias em texto e vídeo, além de uma ficha de leitura - que pode ser salva, impressa e editada - e um exercício prático.

Algumas possibilidades de adaptação do recurso incluem:
1. Inclusão de novos campos na ficha de leitura proposta (assim como exclusão/adaptação de campos);
2. Adaptação das estratégias e da ficha de leitura para outros gêneros textuais (por exemplo, narrativas, textos jornalísticos etc.). Nesse caso, seria um recurso interessante para o ensino básico;
3. Inclusão de outros exercícios, com outros textos acadêmicos utilizados como exemplo.

Para editar este REA, você precisará estar familiarizado com HTML5, CSS3 e com as bibliotecas [jQuery](https://api.jquery.com/) e [Bootstrap](https://getbootstrap.com/docs/4.2/getting-started/introduction).

--------

### 1. Incluir, excluir ou adaptar campos da ficha de leitura

Caso queira editar uma subseção, procure a ```li``` abaixo de ```form#ficha > ol```, como no exemplo:

```
<form id="ficha" class="">
  ...
  <ol>
    ...
    <!-- Subseção -->
    <li>
      Nova subseção
    </li>
  </ol>
</form>
```

Para inserir ou editar um item dentro de uma subseção nova ou preexistente, adicione ou procure por uma ```ol``` abaixo da ```li ``` que representa a subseção e, dentro dela, adicione uma nova ```li```. Exemplificando:

 ```
<form id="ficha" class="">
  ...
  <ol>
    ...
    <li>
      Nova subseção
      <!-- Nova lista de itens dentro da subseção -->
      <ol type="a">
        <!-- Novo item -->
        <li></li>
      </ol>
    </li>
  </ol>
</form>
```

Agora edite o conteúdo do item, mantendo relacionados os textos de ```label for ``` e ```textarea id```.

```
<!-- Novo item -->
<li>
  <div class="form-group row">
    <label for="exemploNovoItem" class="col-lg-2 col-md-12 col-form-label">Novo Label</label>
    <div class="col-lg-10 flex col-md-12">
      <textarea class="form-control" id="exemploNovoItem" rows="2" placeholder=""></textarea>
    </div>
  </div>
</li>
```

Caso você esteja inserindo um novo campo na ficha-exercício (em [praticando/index.html](praticando/index.html)), não esqueça de incluir também o campo da resposta:

```
<!-- Novo item -->
<li>
  <div class="form-group row">
    <label for="exemploNovoItem" class="col-lg-2 col-md-12 col-form-label">Novo Label</label>
    <div class="col-lg-10 flex col-md-12">
      <textarea class="form-control" id="exemploNovoItem" rows="2" placeholder=""></textarea>
      <!-- Campo de resposta -->
      <div class="resposta">Resposta</div>
    </div>
  </div>
</li>
```

### 2. Adaptar estratégias e fichas para outros gêneros textuais

Neste caso, revise todos os textos das páginas html, especialmente os da ```div#intro``` do [index.html](index.html) - que traz o título do REA e o introduz. Esteja também atento ao link do ```iframe``` nesta mesma div: você pode substituí-lo pelo link do vídeo de sua autoria ou simplesmente removê-lo. 

Para criar novas seções, acrescente uma ```div.container-fluid``` na posição esperada. A classe ```tela-destacada``` irá adicionar as características de ```div``` colorida e com texto centralizado. Você pode personalizar as cores de fundo e de borda utilizando a tag ```style```, conforme o exemplo:

```
<div class="container-fluid tela-destacada" style="background-color: #46abc6; border-top-color: #51c5e0; border-bottom-color: #38889b; padding-top: 5rem">
  ...
</div>
```

### 3. Alterar referência do exercício

Em [praticando/index.html](praticando/index.html), edite a URL de ```a href ``` no trecho que introduz a ficha:

```
<div class="container-fluid" style="margin-bottom: 3rem">
  <div class="container text-center d-print-none">
    ...
    <!-- Trecho com o link -->
    <p>Leia o artigo presente <a href="https://drive.google.com/file/d/1LBsTkxv1hkDWvtmCfl-XXK9ca2QcvkI5/view" target="_blank">neste link</a> e, em seguida, preencha a ficha de leitura abaixo.<br/> Após o preenchimento, você poderá gerar uma sugestão de resposta e compará-la com seus resultados, avaliando seu desempenho.
    <p><b>Vamos lá?</b></p>
  </div>
</div>
```

Lembre-se de alterar as sugestões de respostas nas ```div.resposta``` da ficha. 

:wink:
