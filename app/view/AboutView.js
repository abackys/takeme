Ext.define('GK.view.AboutView', {
    extend: 'Ext.Container',
    xtype  : 'aboutpage',
    requires: [
    'GK.view.details.AboutDetails'
    ],
    config : {
        layout : 'vbox',

        items : [ 
        {
            xtype : 'header',
            title : 'Apie',
        },
       
        {
            xtype : 'aboutdetails',

              flex : 1
        },
        
           {
            xtype : 'footer',
        }
        ]

    }
}
)