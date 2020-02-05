(function(exports) {
    'use strict'

    function Note(note) {
        this.text = note
    }

    Note.prototype.getNotes = function() {
        return this.text;
    }

    exports.Note = Note;
})(this);