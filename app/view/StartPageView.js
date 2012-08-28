Ext.define('GK.view.StartPageView', {
    extend: 'Ext.Container',
    xtype  : 'startpage',
    
    config : {
      
        layout : 'vbox',
        items : [ 
        {
            xtype : 'startpageheader',
        },
        {
            xtype : 'contentlist',
            flex : 1
        },
           {
            xtype : 'footer',
        }
        ]

    }
}
)
        

