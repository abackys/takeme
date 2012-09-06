Ext.define('GK.view.details.SpeakerDetails', {
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
                cls : 'image-max-width',
                itemId : 'promo_img'
            } ,
{
                flex : 1
            }  
            ]
           
        },
        {
            cls : 'details-title',
            xtype: 'container',  
            itemId : 'details_title',            
            tpl: '{name}',
         //    data : {name : 'asdasdas dasda sdasd'}
                       
        },
        {   
            cls : 'details-subtitle',
            xtype: 'container',
            tpl: '{conference_name}',
            itemId : 'details_subtitle', 
        //     data : {conference_name : 'asdasdasdasdasdasd'}
                
        },
        {
            cls :[ 'speaker-details-main', 'details-text'],
            xtype: 'container',
            
            tpl: '<p>{about_speaker}</p>',
            styleHtmlContent : true,
        //    data : {about_speaker : 'asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd '},
            itemId : 'details_text', 

        }
       
        ]
    }
}
)