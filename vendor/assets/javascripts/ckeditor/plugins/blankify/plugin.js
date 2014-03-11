CKEDITOR.plugins.add( 'blankify',
{
  init: function( editor )
  {

    // var style = new CKEDITOR.style({
    //   element : 'span', 
    //   attributes : { 'class' : 'blankify',
    //                   'id': Math.round(new Date().getTime() + (Math.random() * 100)) 
    //                 },
    //   styles: {'background-color' : '#A8A8A8'}
    // });

    // editor.attachStyleStateChange( style, function( state ) {
    //   editor.getCommand( 'insertBlankify' ).setState( state );
    // } );

    // editor.addCommand( 'insertBlankify', new CKEDITOR.styleCommand(style,
    //   {
        
    //   }) );
    editor.addCommand( 'insertBlankify', {
        exec: function( editor ) {
          var style = new CKEDITOR.style({
          element : 'span', 
          attributes : { 'class' : 'blankify',
                          'id': Math.round(new Date().getTime() + (Math.random() * 100)) 
                        },
          styles: {'background-color' : '#A8A8A8'}
        });

          var selection = editor.document.getSelection();
          var ele = selection.getStartElement();
          if(style.checkElementMatch(ele,false)){
            alert('with false');
            editor.removeStyle(style);
            editor.attachStyleStateChange( style, function( state ) {
              editor.getCommand( 'insertBlankify' ).setState( state );
            } );
            return;

          } 
          if(style.checkElementMatch(ele,true)){
            alert('with true');
            var range = selection.getRanges()[0];
            style.removeFromRange(range);
            style.remove(editor.document);
            return;
          }

        editor.applyStyle(style);

        editor.attachStyleStateChange( style, function( state ) {
          editor.getCommand( 'insertBlankify' ).setState( state );
        } );
        }
    } );
    editor.ui.addButton( 'blankify',
    {
      label: 'blankify text',
      command: 'insertBlankify',
      icon: this.path + 'images/blankify.png'
    } );
  }
} );