Ext.define('GK.view.SponsorsView', {
    extend: 'Ext.Container',
    xtype  : 'sponsors',
    requires: [
    'GK.view.sponsors.Sponsors'
    ],
    config : {
        scrollable : false,

        layout : 'vbox',
        items : [ 
        {
            xtype : 'header',
            title : 'Remėjai',
        },
        {
            xtype : 'sponsorsgrid',
            flex : 1
        },
        {
            xtype : 'footer',
        },
           
        
        
        ]

    }
  
}
)
        

