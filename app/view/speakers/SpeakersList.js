Ext.define('GK.view.speakers.SpeakersList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'speakerslist',
      requires: [
        'GK.view.speakers.SpeakersListItem'
    ],
 
    config : {
        
 //   itemTpl: '<img src="{speaker_img}"/><div style = "display: inline;"><span>{text}</span><br>Bujkalakka</div> ',
        data: [
        { name: 'Speaker Myker', newstexta: 'Menu Item aa1', speaker_img : 'images/news_thumb.jpg' },
        { name: 'Speaker Myker', newstexta: 'Menu Item aa1', speaker_img : 'images/news_thumb.jpg' },
        { name: 'Speaker Myker', newstexta: 'Menu Item aa1', speaker_img : 'images/news_thumb.jpg' },
        { name: 'Speaker Myker', newstexta: 'Menu Item aa1', speaker_img : 'images/news_thumb.jpg' },
        { name: 'Speaker Myker', newstexta: 'Menu Item aa1', speaker_img : 'images/news_thumb.jpg' },
        { name: 'Speaker Myker', newstexta: 'Menu Item aa1', speaker_img : 'images/news_thumb.jpg' },
        { name: 'Speaker Myker', newstexta: 'Menu Item aa1', speaker_img : 'images/news_thumb.jpg' },
        { name: 'Speaker Myker', newstexta: 'Menu Item aa1', speaker_img : 'images/news_thumb.jpg' }
    ],
     
     // store : Ext.getStore('NewsStore'),

        useComponents: true,
        defaultType: 'speakerslistitem',

    }
  
}
)
        

