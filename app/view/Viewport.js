Ext.define('GK.view.Viewport', {
    extend: 'Ext.Container',
     requires: [
    'GK.view.details.Details'
    ],
    config : {
        fullscreen : true,
        layout : {
            type : 'card'  ,
            animation : {
                type : 'slide'
            }
        },
        items : [
        {
            xtype : 'startpage'
        },
        {
            xtype : 'sponsors'
        },
        {
            xtype : 'news'
        },
        {
            xtype : 'speakers'
        },
        {
            xtype : 'speakerpage'
        },
        {
            xtype : 'detailspage'
        },
        {
            xtype : 'partypage'
        },
        {
            xtype : 'aboutpage'
        },
        { 
            xtype : 'workshops'
        },
        { 
            xtype : 'schedule'
        },
        ]

    }
}
)
        

