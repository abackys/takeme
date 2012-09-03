Ext.define('GK.view.SpeakerPageView', {
    extend: 'Ext.Container',
    xtype  : 'speakerpage',
   
    config : {
        layout : 'vbox',

        items : [ 
        {
            xtype : 'header',
            title : 'Pranešėjas',
        },
       
        {
            xtype : 'speakerdetails',
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