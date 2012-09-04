 Ext.define('GK.view.Share', {
    extend: 'Ext.Container',
    xtype: 'share', 
    config: {
        layout: 'hbox',
        items: [     
                {
             html : '<iframe allowtransparency="true" frameborder="0" scrolling="no" src="https://platform.twitter.com/widgets/tweet_button.html" style="width:90px; height:20px;"></iframe>'   
             },  
                {
             html : '<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.takeme.lt&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;appId=146954858779093" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe>'  
              },
             
        ]
    }


    });