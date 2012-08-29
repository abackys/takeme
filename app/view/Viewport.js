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
        

