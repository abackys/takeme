Ext.define('GK.view.schedule.ScheduleWorkshopsList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'scheduleworkshopslist',
    requires: [
    'GK.view.schedule.ScheduleWorkshopsListItem',
    ],
    config : {
        store :   'Workshops',
        useComponents: true,
        defaultType: 'schedulelistworkshopsitem',
        itemId : 'news'
      
    }
}
)
        

