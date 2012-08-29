Ext.define('GK.view.speakerpage.SpeakerDetails', {
    extend: 'Ext.Container',
    xtype  : 'speakerview',
    
    config : {    
        layout : 'vbox',
        items : [
             {
            html: '<img src="./images/speaker.jpg">',
             cls : 'image-max-width'
            },
            {
                xtype: 'container',
                html: '<div class="addthis_toolbox addthis_default_style "></a> <a class="addthis_button_facebook_like" fb:like:layout="button_count"></a> <a class="addthis_button_tweet"></a> <a class="addthis_button_pinterest_pinit"></a><a class="addthis_counter addthis_pill_style"></a></div>',
     
            },
            {
                cls : 'speaker-details-title',
                xtype: 'container',              
                tpl: '<h1>{speaker_name}</h1>',
                data: {speaker_name:'Pranesejo vardas'},              
            },
            {   
                cls : 'speaker-details-title',
                xtype: 'container',
                tpl: '<h2>{Conference_name}</h2>',
                data: {Conference_name:'(Confos pavadinimas)'},
                
            },
            {
                cls : 'speaker-details-main',
                xtype: 'container',
                style: "  margin-top:1em;",
                tpl: '<p>{about_speaker}</p>',
                data: {about_speaker:'Teaxtas Teaxtas Teaxtas Teaxtas Teaxtas Teaxtas TeaxtasTeaxtas Teaxtas Teaxtas Teaxtas Teaxtas Teaxtas TeaxtasTeaxtas Teaxtas Teaxtas Teaxtas Teaxtas Teaxtas TeaxtasTeaxtas Teaxtas Teaxtas Teaxtas Teaxtas Teaxtas Teaxtas'},
            }
       
        ]
    }
}
)