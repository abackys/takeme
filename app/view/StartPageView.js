Ext.define('GK.view.StartPageView', {
    extend: 'Ext.Container',
    xtype  : 'startpage',
     requires: [
    'GK.view.startpage.StartPageList',
    'GK.view.startpage.StartPageHeader'
    ],
    config : {
      
        layout : 'vbox',
        items : [ 
        {
            xtype : 'startpageheader',
        },
        {
            xtype : 'startpagelist',
            flex : 1,
           
        },
           {
            xtype : 'footer',

        }
        ]

    }
}
)
        

