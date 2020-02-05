'use strict'
function NoteListView(notelistview){
  this.list = notelistview.array
  NoteListView.prototype.showHTML = function(){
    arr = this.list.join("</li></div><li><div>")
    z = "<ul><li><div>"+arr+"</li></div></ul>"
  }
  NoteListView()
exports.NoteListView = NoteListView
}(this);
