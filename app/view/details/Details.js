Ext.define('GK.view.details.Details', {
    extend: 'Ext.Container',
    xtype  : 'details',
    
    config : {    
        layout : 'vbox',
        pack : 'center',
        align : 'middle',
         scrollable : true,
        items : [
        {  
            xtype : 'panel',
            layout : 'hbox',
            items : [
            {
                flex : 1
            } ,
{
                tpl: '<img src="{promo_img}">',
                cls : 'image-max-width',
                data : {    promo_img : 'images/speaker.jpg'   },
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
            tpl: '{title}',
            data : {title : 'asdasdas dasda sdasd'}
                       
        },
        {
            cls :['details-text'],
            xtype: 'container',
            
            tpl: '{main_text}',
            data : {main_text : 'asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd '},
           

        }
       
        ]
    }
}
)