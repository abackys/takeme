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
            tpl: '{title}',
            itemId : 'details_title',
       //     data : {title : 'asdasdas dasda sdasd'}
                       
        },
        {
            cls :['details-text'],
            xtype: 'container',
            styleHtmlContent : true,
            
            tpl: '{main_text}',
            itemId : 'details_text'
        //    data : {main_text : 'asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd '},
           

        }
       
        ]
    }
}
)