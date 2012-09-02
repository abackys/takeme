Ext.define('GK.view.DetailsView', {
    extend: 'Ext.Container',
    xtype  : 'detailspage',
     requires: [
    'GK.view.details.Details'
    ],
    config : {
        layout : 'vbox',

        items : [ 
        {
            xtype : 'header',
            title : 'Naujiena',
        },
       
        {
            xtype : 'details',
              scrollable : true,
              flex : 1
        },
        
           {
            xtype : 'footer',
        }
        ]

    }
}
)