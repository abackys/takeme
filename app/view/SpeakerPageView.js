Ext.define('GK.view.SpeakerPageView', {
    extend: 'Ext.Container',
    xtype  : 'speakerpage',
     requires: [
    'GK.view.speakerpage.SpeakerDetails'
    ],
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