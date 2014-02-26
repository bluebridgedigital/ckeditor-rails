CKEDITOR.plugins.add( 'blankify',
{
  init: function( editor )
  {
    //Plugin logic goes here.
    editor.addCommand( 'insertBlankify',
      {
        exec : function( editor )
        {   
          editor.applyStyle(new CKEDITOR.style({Element : 'p', Attributes : { class : 'Myclass' }, Styles : { color : '#ff0000','font-family' : 'Courier' } )); 
          //var selection = editor.getSelection().getSelectedText();
          //var newElement = new CKEDITOR.dom.element("em"); 
          //newElement.setText(selection);                         
          //editor.insertElement(newElement);   
        }
      });
    editor.ui.addButton( 'blankify',
    {
      label: 'blankify text',
      command: 'insertBlankify',
      icon: this.path + 'images/blankify.png'
    } );
  }
} );