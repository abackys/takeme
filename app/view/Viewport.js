<<<<<<< HEAD
Ext.define('GK.view.Viewport', {
    extend: 'Ext.Container',
    xtype  : 'viewport',
    
    config : {
        fullscreen : true,
        layout : 'vbox',
        items : [ 
       
        {
            xtype : 'speakerpage',
            flex : 1,
            
        },
        
        
        ]

    }
}
)
        

=======
Ext.define('GK.view.Viewport', {
    extend: 'Ext.Container',
    xtype  : 'viewport',
    
    config : {
        fullscreen : true,
        layout : {
          type : 'card'  ,
          animation : { type : 'slide'}
        },
        items : [ 
        {
         xtype : 'startpage',

        }
        
        
        ]

    }
}
)
        

>>>>>>> origin/Algis
