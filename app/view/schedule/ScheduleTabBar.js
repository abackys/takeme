Ext.define('GK.view.schedule.ScheduleTabBar', {
    extend: 'Ext.TabPanel',
    xtype : 'scheduletabbar',
    requires: [
    'GK.view.schedule.ScheduleList',
    'GK.view.schedule.ScheduleListItem',
    'GK.view.schedule.ScheduleWorkshopsList',
    'GK.view.schedule.ScheduleWorkshopsListItem'
    ],

    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
     //   ui : 'light',
        items: [
            { 
              xtype : 'schedulelist',
              title : 'Pranešėjai' ,
              iconCls: 'user'
            },
              { 
                  
              
              xtype : 'scheduleworkshopslist',
              title : 'Dirbtuvės' ,
              iconCls: 'settings',
              itemId : 'workshops'
            },
       
        ],
        flex : 1
    }
});