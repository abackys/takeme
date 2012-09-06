Ext.define('GK.view.schedule.ScheduleWorkshopsListItem', {
    extend: 'GK.view.news.NewsListItem',
    xtype  : 'schedulelistworkshopsitem',

    config: {
        dataMap: {
            getImage: {
                setSrc: 'event_time_img'
            }
        },
        
        image : {
             cls : [ 'schedule-image-green' ]
        }
    }

    
    
     
}
)
        

