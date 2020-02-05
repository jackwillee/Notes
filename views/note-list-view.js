//'use strict';
(function(exports){
function NoteListView(notelist){
  this.notelist = notelist;
};
  NoteListView.prototype.showHTML = function(){
    var htmlarr = []
    for(var i = 0; i < notelist.array.length; i++){
      console.log(notelist.array[i])
      htmlarr.push("<li><div>" + notelist.array[i] + "</li><div>")
    //arr = this.list.join("</li></div><li><div>")
    //z = "<ul><li><div>"+arr+"</li></div></ul>"
  }
  return "<ul>" + htmlarr.join("") + "</ul>" 
}
exports.NoteListView = NoteListView
})(this);
