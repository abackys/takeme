Ext.define('GK.view.schedule.ScheduleListItem', {
    extend: 'GK.view.speakers.SpeakersListItem',
    xtype  : 'schedulelistitem',

    config: {
        dataMap: {
            getImage: {
                setSrc: 'event_time_img'
            }
        },
        
        image : {
            cls : [ 'schedule-image-pink' ]
        }
    }

    
    
     
}
)
        

