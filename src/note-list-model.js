(function(exports) {

//function NoteList(note = new Note()){
  function NoteList(notes){


  //this.note = note;
  this.array = [];
}

NoteList.prototype.storeNotes = function(note) {
  this.array.push(note.text);
}

NoteList.prototype.returnNotes = function() {
  for(var i = 0; i < this.array.length; i++) {
    console.log((this.array[i]))
  }
  //return this.array;
}
exports.NoteList = NoteList
})(this);