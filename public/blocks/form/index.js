(function() {
    'use strict';

    const Block = window.Block;

    class Form extends Block {
        constructor(fields) {
            const el = document.createElement('form');
            super(el);

            fields.forEach(function(field) {
                const f = Block.Create('input', field.classes, field.attrs);
                this.append(f);
            }.bind(this));
        }
    }

    window.Form = Form;

})();