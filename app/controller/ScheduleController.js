Ext.define('GK.controller.ScheduleController', {
    extend : 'Ext.app.Controller',
    requires : ['GK.view.ScheduleView', 'GK.view.schedule.ScheduleList'],
    config : {
        refs : {
//            speakerdetails: 'speakerdetails',
//            speakerpage  : 'speakerpage'
        },   
        control : {
         
//            'schedulelist' : {
//                itemtap : 'speakerTapped'
//            }
       
        },
        routes : {     
            'speakers/:id' : 'showSpeakerDetails'
        }
    
    },
    launch : function(){
     // alert(444)  
    },
    speakerTapped : function(comp, index, target, record){
        setTimeout(function(){comp.deselect(record);},500); 
        this.getApplication().getController('NewsController').ItemTapCSS(target, this.oldSelectedItem)
        this.oldSelectedItem = target; 
        this.redirectTo('speakers/'+ record.data.id)
    },
     
    showSpeakerDetails : function(id){
        
        
        var store = Ext.getStore('Speakers')  
        if(store.findRecord('id', id))
            this.updateSpeakerData(store.findRecord('id', id).data)
        else   {
            Ext.getStore('Speakers').load({
                callback: function(records, operation, success) {
                   
                    console.log(records[id-1]);
                    this.updateSpeakerData(records[id-1].data)
                },
                scope: this
            });
        }
        
        
     //   var record = Ext.getStore('Speakers').findRecord('id', id)
     
      
         
    },
    
     updateSpeakerData : function(record){
         var comp = this.getSpeakerdetails();
         this.getSpeakerpage().down('header').setTitle(record.name)
        var img = comp.down('#promo_img')
        var title = comp.down('#details_title')
        var subtitle = comp.down('#details_subtitle') 
        var text = comp.down('#details_text') 

        title.setData({name : record.name})
        subtitle.setData( { conference_name : record.conference_name})
        text.setData({ about_speaker : record.about_speaker})
     //   console.log(img)
        img.setHtml('<img src="'+record.promo_img+'">')
        GK.Viewport.setActiveItem(4)
         
     }
    
    
   
   
    
 
    
   

})

