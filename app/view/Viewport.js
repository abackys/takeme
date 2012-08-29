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
         xtype : 'speakerpage',

        }
        
        
        ]

    }
}
)
        
