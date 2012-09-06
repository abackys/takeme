
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
    stores: ['Speakers', 'News', 'Workshops'],
    controllers : ['StartPageController', 'SpeakersController', 'RoutingController', 'NewsController', 'ScheduleController'],
    views : ['Viewport' ,  'StartPageView', 'HeaderView',  'FooterView' , 'NewsView' , 'SponsorsView', 'WorkshopsView', 'SpeakersView', 'ScheduleView', 'DetailsView', 'PartyView', 'AboutView'],
  
  launch: function() {
     GK.listTextWidth = window.innerWidth / 15.5 // Magic constant font/screen Width 
     
  GK.Viewport = Ext.create('GK.view.Viewport')
//  
  // Ext.create('Ext.Button', { text : 'aaaaa'})
 // console.log(Ext.getStore('News'))
 // GK.Viewport.setActiveItem(9)
  
    }
});


