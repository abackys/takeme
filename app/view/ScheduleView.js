Ext.define('GK.view.ScheduleView', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'schedule',
    requires: [
    'GK.view.schedule.ScheduleTabBar',

    ],
    config : {
        scrollable : false,

        layout : 'vbox',
        items : [  
        {
            xtype : 'header',
            title : 'Programa'
        },
        {
            xtype : 'scheduletabbar',
           
        },
        
        {
            xtype : 'footer',
        },
           
        
        
        ]

    }
  
}
)
        

