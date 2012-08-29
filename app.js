
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
    models: ['SpeakerModel'],
    stores: ['NewsStore', 'SpeakerStore'],
    views : ['Viewport' , 'StartPageView', 'SpeakerPageView', 'HeaderView', 'startpage.HeaderStartPageView', 'news.NewsListItem', 'startpage.ContentListView',  'speakerpage.SpeakerDetails',  'speakerpage.SpeakerHeaderView', 'FooterView' , 'news.NewsList', 'NewsView' ,],
    controllers : ['HeaderController', 'NewsController'],
  
  launch: function() {
      
  GK.Viewport = Ext.create('GK.view.Viewport')
 
  
  
    }
});


