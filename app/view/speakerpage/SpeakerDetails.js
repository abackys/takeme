Ext.define('GK.view.speakerpage.SpeakerDetails', {
    extend: 'Ext.Container',
    xtype  : 'speakerdetails',
    
    config : {    
        layout : 'vbox',
        pack : 'center',
        align : 'middle',
        items : [
        {  
            xtype : 'panel',
            layout : 'hbox',
            items : [
            {
                flex : 1
            } ,
{
                tpl: '<img src="{img}">',
                cls : 'image-max-width',
                data : {
                    img : 'images/speaker.jpg'
                },
            } ,
{
                flex : 1
            }  
            ]
           
        },
        {
            xtype: 'container',
            html: '<div class="addthis_toolbox addthis_default_style "></a> <a class="addthis_button_facebook_like" fb:like:layout="button_count"></a> <a class="addthis_button_tweet"></a> <a class="addthis_button_pinterest_pinit"></a><a class="addthis_counter addthis_pill_style"></a></div>',
     
        },
        {
            cls : 'details-title',
            xtype: 'container',              
            tpl: '<h1>{name}</h1>',
             data : {name : 'asdasdas dasda sdasd'}
                       
        },
        {   
            cls : 'details-subtitle',
            xtype: 'container',
            tpl: '<h2>{conference_name}</h2>',
             data : {conference_name : 'asdasdasdasdasdasd'}
                
        },
        {
            cls :[ 'speaker-details-main', 'details-text'],
            xtype: 'container',
            
            tpl: '<p>{about_speaker}</p>',
            data : {about_speaker : 'asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd '},
           

        }
       
        ]
    }
}
)