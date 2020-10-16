# newPlaceholder

1. introduction:

    The newPlaceholder is a library to provide nicer experience when loading data.

    No need to set placeholders in order by yourself, just need to put your elements in the right place, and give some data to strut the elements, then new a instance of NewPlaceholder, when data is ready, call newPlaceholder.showPlaceholder(false), every thing will be ok.

2. usage:

    step 1: include the library into your project:

    via npm

    ```bash
    npm install --save newplaceholder
    ```

    step 2: set two classes in the elements want to be placeholded, "nph-ctn" for container, and "nph-item" for wanna to be holded elements.

    ```html
    <div id="ctn" class="nph-ctn">
      <h1 class="nph-item">NewPlaceHolder</h1>
      <p class="nph-item">Hello NewPlaceHolder</p>
      <div class="avatar nph-item">
        Tom
      </div>

      <div class="special-pos nph-item">
        posited
      </div>
    </div>
    ```

    step 3: new a instance of NewPlaceholder with a selector or a html element:

    ```javascript
    import NewPlaceholder from 'newplaceholder'

    const nph = new NewPlaceholder('#ctn')
    ```

    step 4: when data is ready, call showPlaceholder() method

    ```javascript
    nph.showPlaceholder(false)
    ```

    you can also find two examples in ./examples, one for pure js, the other is for Vue.
