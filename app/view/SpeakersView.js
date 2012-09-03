Ext.define('GK.view.SpeakersView', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'speakers',
    requires: [
    'GK.view.speakers.SpeakersList',
    'GK.view.speakerpage.SpeakerDetails'
    ],
    config : {
        scrollable : false,

        layout : 'vbox',
        items : [ 
        {
            xtype : 'header',
            title : 'Pranešėjai'
        },
        {
            xtype : 'speakerslist',
            flex : 1
        },
        {
            xtype : 'footer',
        },
           
        
        
        ]

    }
  
}
)
        

