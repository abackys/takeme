Ext.define('GK.view.news.NewsList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'newslist',
      requires: [
        'GK.view.news.NewsListItem'
    ],
 
    config : {
        
 //   itemTpl: '<img src="{url}"/><div style = "display: inline;"><span>{text}</span><br>Bujkalakka</div> ',
        data: [
        { newstext: 'Menu Item aa1', newstexta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { newstext: 'Menu Item 2', newstexta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { newstext: 'Menu Item 3', newstexta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { newstext: 'Menu Item 4', newstexta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { newstext: 'Menu Iaaatem 1', newstexta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { newstext: 'Menu Itqqqem 2', newstexta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { newstext: 'Menu Item lorem 3', newstexta: 'Menu Item aa1', url : 'images/news_thumb.jpg' },
        { newstext: 'Menu Item Burem 4', texta: 'Menu Item aa1', url : 'images/news_thumb.jpg' }
    ],
     
     // store : Ext.getStore('NewsStore'),
    //  disclosure: true,
    //  baseCls      : 'x-list',
  //  scrollable : false,
        useComponents: true,
        defaultType: 'newslistitem',

            //set the function when a user taps on a disclsoure icon
          //  onItemDisclosure: function(record, item, index, e) {
                //show a messagebox alert which shows the persons firstnewstext
           //     e.stopEvent();
          //      Ext.Msg.alert('Disclose', 'Disclose more info for ' + record.get('firstnewstext'));
          //  }
    }
  
}
)
        

