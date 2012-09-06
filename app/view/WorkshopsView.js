Ext.define('GK.view.WorkshopsView', {
    extend: 'Ext.Container',
    xtype  : 'workshops',
  
    config : {
        scrollable : false,

        layout : 'vbox',
        items : [ 
        {
            xtype : 'header',
            title : 'Dirbtuvės',
        },
        {
            xtype : 'newslist',
            store : 'Workshops',
            itemId : 'workshops',
            flex : 1
        },
        {
            xtype : 'footer',
        },
           
        
        
        ]

    }
  
}
)
        

