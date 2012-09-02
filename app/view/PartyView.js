Ext.define('GK.view.PartyView', {
    extend: 'Ext.Container',
    xtype  : 'partypage',
    requires: [
    'GK.view.details.PartyDetails'
    ],
    config : {
        layout : 'vbox',

        items : [ 
        {
            xtype : 'header',
            title : 'Vakarėlis',
        },
       
        {
            xtype : 'partydetails',

              flex : 1
        },
        
           {
            xtype : 'footer',
        }
        ]

    }
}
)