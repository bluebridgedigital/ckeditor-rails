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
            Element : 'span', 
            Attributes : { 'class' : 'blankify' },
            Styles: {'color' : '#A8A8A8'}
          }));
          
          editor.applyStyle(style);

          var selection = editor.getSelection().getSelectedText();
          var newElement = new CKEDITOR.dom.element( "span" );
          newElement.setText(selection);                         
          editor.insertElement(newElement); 

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