Ext.define('GK.view.SpeakerPageView', {
    extend: 'Ext.Container',
    xtype  : 'speakerpage',
    
    config : {
        layout : 'vbox',

        items : [ 
        {
            xtype : 'header',
        },
       
        {
            xtype : 'speakerview',
        },
        
           {
            xtype : 'footer',
        }
        ]

    }
}
)