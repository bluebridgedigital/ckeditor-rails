CKEDITOR.plugins.add( 'blankify',
{
  init: function( editor )
  {
    //Plugin logic goes here.
    editor.addCommand( 'insertBlankify',
      {
        exec : function( editor )
        {   
          var style = new CKEDITOR.style({
            element : 'span', 
            attributes : { 'class' : 'blankify' },
            styles: {'background-color' : '#A8A8A8'}
          });
          
          style.type = CKEDITOR.STYLE_INLINE;
          var selection = editor.document.getSelection();
          var ele = selection.getStartElement();
          if(style.checkElementMatch(ele,false)){
            var range = selection.getRanges()[0];
            style.removeFromRange(range);
            style.remove(editor.document);
            return;

          }

          var element1 = new CKEDITOR.dom.element( 'span', editor.document );
          element1.setText( selection.getSelectedText() );
          editor.insertElement(element1);
          style.applyToObject(element1);  
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