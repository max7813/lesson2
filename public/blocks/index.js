(function() {
    'use strict';

    class Block {
        constructor(el) {
            this.el = el;
        }

        hide() {
            this.el.setAttribute('hidden', true);
        }

        show() {
            this.el.removeAttribute('hidden');
        }

        setText(text) {
            this.el.textContent = text;
        }

        append(block) {
            this.el.appendChild(block.el);
            return this;
        }
    }

    window.Block = Block;

}) ();