
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
<<<<<<< HEAD
    models: ['SpeakerModel'],
    stores: ['NewsStore', 'SpeakerStore'],
    views : ['Viewport' , 'StartPageView', 'SpeakerPageView', 'HeaderView', 'startpage.HeaderStartPageView', 'news.NewsListItem', 'startpage.ContentListView',  'speakerpage.SpeakerDetails',  'speakerpage.SpeakerHeaderView', 'FooterView' , 'news.NewsList', 'NewsView' ,],
    controllers : ['HeaderController', 'NewsController'],
=======
    models: [],
 //   stores: ['NewsStore'],
    views : ['Viewport' ,  'SpeakersView', 'StartPageView', 'HeaderView',  'FooterView' , 'NewsView' , 'SponsorsView'],
    controllers : ['StartPageController', 'RoutingController', 'HeaderController', 'NewsController'],
>>>>>>> origin/Algis
  
  launch: function() {
      
  GK.Viewport = Ext.create('GK.view.Viewport')
<<<<<<< HEAD
 
  
=======
>>>>>>> origin/Algis
  
    }
});


