Ext.define('GK.view.speakerpage.SpeakerDetails', {
    extend: 'Ext.Container',
    xtype  : 'speakerdetails',
    
    config : {    
        layout : 'vbox',
        items : [
        {
            tpl: '<img src="{img}">',
            cls : 'image-max-width',
        },
        {
            xtype: 'container',
            html: '<div class="addthis_toolbox addthis_default_style "></a> <a class="addthis_button_facebook_like" fb:like:layout="button_count"></a> <a class="addthis_button_tweet"></a> <a class="addthis_button_pinterest_pinit"></a><a class="addthis_counter addthis_pill_style"></a></div>',
     
        },
        {
            cls : 'speaker-details-title',
            xtype: 'container',              
            tpl: '<h1>{name}</h1>',
                       
        },
        {   
            cls : 'speaker-details-title',
            xtype: 'container',
            tpl: '<h2>{conference_name}</h2>',
                
        },
        {
            cls : 'speaker-details-main',
            xtype: 'container',
         //   style: "  margin-top:1em;",
            tpl: '<p>{about_speaker}</p>',
          
           

        }
       
        ]
    }
}
)