Ext.define('GK.controller.SpeakersController', {
    extend : 'Ext.app.Controller',
    requires : ['GK.view.speakerpage.SpeakerDetails' , 'GK.view.SpeakerPageView'],
    config : {
        refs : {
            speakerdetails: 'speakerdetails'
        },   
        control : {
         
            'speakerslist' : {
                itemtap : 'speakerTapped'
            }
       
        },
        routes : {     
            'speakers/:id' : 'showSpeakerDetails'
        }
    
    },
    speakerTapped : function(comp, index, target, record){
        setTimeout(function(){comp.deselect(record);},500); 
        this.getApplication().getController('NewsController').ItemTapCSS(target, this.oldSelectedItem)
        this.oldSelectedItem = target; 
        this.redirectTo('speakers/'+ record.data.id)
    },
     
    showSpeakerDetails : function(id){
        
        var record = Ext.getStore('Speakers').findRecord('id', id)
        if(record){
            record = record.data
        var comp = this.getSpeakerdetails().getItems();
        var img = comp.items[0]
        var title = comp.items[2]
        var subtitle =comp.items[3]
        var text = comp.items[4]

        title.setData({name : record.name})
        subtitle.setData( { conference_name : record.conference_name})
        text.setData({ about_speaker : record.about_speaker})
        img.setData({img :record.speaker_foto})
        GK.Viewport.setActiveItem(4)
    }
        else{
            // Debug
            GK.Viewport.setActiveItem(4)
    
    //        GK.Viewport.setActiveItem(2)
         
         }
      
         
    }
    
    
   
   
    
 
    
   

})

