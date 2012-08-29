Ext.define('GK.view.StartPageView', {
    extend: 'Ext.Container',
    xtype  : 'startpage',
     requires: [
    'GK.view.startpage.StartPageList',
    'GK.view.startpage.StartPageHeader'
    ],
    config : {
      scrollable: {
    direction: 'vertical',
},
        layout : 'vbox',
        items : [ 
        {
            xtype : 'container',
              
            items : [
                {
            xtype : 'startpageheader',
        },
        {
            xtype : 'startpagelist',
            flex : 1,
           
        },
            ]
        },
           {
            xtype : 'footer',

        }
        ]

    }
}
)
        

