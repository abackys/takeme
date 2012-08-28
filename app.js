
Ext.Loader.setConfig(
    {
        disableCaching : true,
        enabled:true
       
    }
    );
Ext.application({
    name: 'GK',
    viewport: {autoMaximize: true},
  //  util :[ 'Date' ],
    models: [],
    stores: ['NewsStore'],
    views : ['Viewport' , 'StartPageView', 'SpeakerView', 'HeaderView', 'startpage.HeaderStartPageView', 'news.NewsListItem', 'startpage.ContentListView', 'FooterView' , 'news.NewsList', 'NewsView' ,],
    controllers : ['HeaderController', 'NewsController'],
  
  launch: function() {
      
  GK.Viewport = Ext.create('GK.view.Viewport')
  
  
    }
});


