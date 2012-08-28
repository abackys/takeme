Ext.define('GK.view.news.NewsList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'newslist',
      requires: [
        'GK.view.news.NewsListItem'
    ],
 
    config : {
        
 //   itemTpl: '<img src="{url}"/><div style = "display: inline;"><span>{text}</span><br>Bujkalakka</div> ',
        data: [
        { name: 'Menu Item aa1', namea: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { name: 'Menu Item 2', namea: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { name: 'Menu Item 3', namea: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { name: 'Menu Item 4', namea: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { name: 'Menu Iaaatem 1', namea: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { name: 'Menu Itqqqem 2', namea: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { name: 'Menu Item lorem 3', namea: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { name: 'Menu Item Burem 4', texta: 'Menu Item aa1', url : 'images/news_thumb.jpg' }
    ],
     
     // store : Ext.getStore('NewsStore'),
      disclosure: true,
    //  baseCls      : 'x-list',
        useComponents: true,
        defaultType: 'newslistitem',

            //set the function when a user taps on a disclsoure icon
            onItemDisclosure: function(record, item, index, e) {
                //show a messagebox alert which shows the persons firstName
                e.stopEvent();
          //      Ext.Msg.alert('Disclose', 'Disclose more info for ' + record.get('firstName'));
            }
    }
  
}
)
        

