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
            styles: {'color' : '#A8A8A8'}
          });
          
          style.type = CKEDITOR.STYLE_INLINE;
          //style.apply( editor.document );


          var selection = editor.document.getSelection();
          //var element = editor.document.getSelection().getSelectedElement();
          //style.applyToObject(element);
          var element1 = new CKEDITOR.dom.element( 'blankify', editor.document );
          //if (selection.getStartElement().getName() == 'span')
          //{
             element1.setText( selection.getSelectedText() );
             editor.insertElement(element1);
             style.applyToObject(element1);
          //} 

          //editor.applyStyle(new CKEDITOR.style({Element : 'p', Attributes : { class : 'Myclass' }, Styles : { color : '#ff0000'} )); 
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