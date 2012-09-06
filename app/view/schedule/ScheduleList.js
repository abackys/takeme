Ext.define('GK.view.schedule.ScheduleList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'schedulelist',
    requires: [
    'GK.view.schedule.ScheduleListItem',
    ],
    config : {
        store :   'Speakers',
        useComponents: true,
        defaultType: 'schedulelistitem'
      
    }
}
)
        

