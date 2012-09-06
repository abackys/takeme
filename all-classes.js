/*
Copyright(c) 2011 Company Name
*/
Ext.define('GK.view.HeaderView', {
    extend: 'Ext.Toolbar',
    xtype  : 'header',
    config : {
        layout: {
            type: 'hbox'

        },
        docked : 'top',
        items : [ 
        {
            xtype : 'image',
            src : './images/back_ico.jpg',
            width : 50,
            docked : 'left',
            cls : 'header-back-img',
            action : 'back'
        },
       
        {
            html: '<img src="./images/header_logo.png">',
      //  cls : 'startpage-header-image',
            xtype : 'panel',
            cls : ['image-max-height'],
         //   src : './images/header_logo.jpg',
        //    width : 88,
         //   height : 51,
      //   style : 'max-height: 100%;',
            docked : 'right',
            flex : 1,
        }
        ]

    }
}
)
        

Ext.define('GK.view.FooterView', {
    extend: 'Ext.Container',
    xtype  : 'footer',
    config : {
      
        docked : 'bottom',
        padding : 5,
        items : [ 
        {
            xtype : 'container',
            html : 'Mobile Web Solution made by <a href="http://www.crazyimp.com"><b>Crazyimp.com</b></a>',
            cls : 'footer-text'
        },
       
        ]

    }
}
)
        


Ext.define('GK.view.WorkshopsView', {
    extend: 'Ext.Container',
    xtype  : 'workshops',
  
    config : {
        scrollable : false,

        layout : 'vbox',
        items : [ 
        {
            xtype : 'header',
            title : 'Dirbtuvės',
        },
        {
            xtype : 'newslist',
            store : 'Workshops',
            itemId : 'workshops',
            flex : 1
        },
        {
            xtype : 'footer',
        },
           
        
        
        ]

    }
  
}
)
        


Ext.define('GK.controller.StartPageController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
        },
     
        control : {
         
            
            'startpagelist' : {
                itemtap : 'menuTap'
            }
        }
    },
    menuTap : function(comp, index, target, record){
     window.scrollTo(0, 1);
        if(record.data.menuItem == 'schedule')
            alert("Informacija ruošiama")
        else if(record.data.menuItem == 'tickets')
             window.location = "http://www.bilietupasaulis.lt/lit/bilietai/visi/?concert=110509";
        else if(record.data.menuItem == 'facebook')
             window.location = "http://www.facebook.com/takeme.lt";
        
        
        else  
            this.redirectTo(record.data.menuItem + '/')
         
    }
    
     
   

})


Ext.define('GK.controller.RoutingController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
            resultPage : 'results toolbar',
            textField : 'textfield[name=startno]'
        },
        routes : {     
            
            '' : 'showStartPage',
            'sponsors/' : 'showSponsors',
            'speakers/' : 'showSpeakers',
            'news/' : 'showNews',
           // 'tickets/' : 'redirectToTickets',
            'party/' : 'showParty',
            'about/': 'showAbout',
            'workshops/': 'showWorkshops',
            'schedule/' : 'showSchedule'
        }, 
        control : {
         
            '[action=back]' : {
                tap : function(){
                    history.back()
                    window.scrollTo(0, 1);
                }
            }
       
        }
    
    },
    showStartPage : function(){
        GK.Viewport.setActiveItem(0)
    },
    showSponsors : function(){
        GK.Viewport.setActiveItem(1)
    },
    showNews : function(){
        GK.Viewport.setActiveItem(2)
    },    
    showSpeakers : function(){
        GK.Viewport.setActiveItem(3)
    },
   
    showParty : function(){
        GK.Viewport.setActiveItem(6)
    },
    showAbout : function(){
        GK.Viewport.setActiveItem(7)
    },
     showWorkshops : function(){
        
        GK.Viewport.setActiveItem(8)
    },
      showSchedule : function(){
        GK.Viewport.setActiveItem(9)
    },
    
    
    init : function(){
    // this.id = null;
        
    }
   
    
 
    
   

})


Ext.define('GK.controller.NewsController', {
    extend : 'Ext.app.Controller',
    config : {
        refs : {
            details : 'details',
            detailspage : 'detailspage'
        },
      
        control : {
            'newslist' : {
                itemtap : 'newsItemTap'
            },
             'scheduleworkshopslist' : {
                itemtap : 'newsItemTap'
            }
            
            


        },
        routes : {     
            'news/:id' : 'showNewsDetails',
            'workshops/:id' : 'showNewsDetails'
        }
    },
    init : function(){
     
        // Using for ItemTap CSS
        this.oldSelectedItem = null;

    },
    newsItemTap : function(list, index, comp, record){
        
       console.log(list._itemId)
        this.ItemTapCSS(comp, this.oldSelectedItem )
        this.oldSelectedItem = comp; 
        this.redirectTo(list._itemId +'/'+ record.data.xindex)
    },
  
        
    // Using for ItemTap CSS'ing'
    ItemTapCSS : function(newComp, oldComp){
        
        if(oldComp){
            oldComp.removeCls('my-list-item-selected')
           
        }
        newComp.addCls('my-list-item-selected')
       
        
    },
 
    showNewsDetails : function(id){
        var url = window.location.href;
        var storeName = url.substring(url.indexOf('#') + 1, url.indexOf('/', url.indexOf('#')))
        storeName = storeName.replace(storeName.charAt(0),storeName.charAt(0).toUpperCase())
        var store = Ext.getStore(storeName)  
        if(store.getAt(id-1))
        {
            this.updateNewsData(store.getAt(id-1).data)
        }
        else   {
            Ext.getStore(storeName).load({
                callback: function(records, operation, success) {
                    this.updateNewsData(records[id-1].data)
                },
                scope: this
            });
        }
  
         
    },
    updateNewsData : function(record){
        var comp = this.getDetails();
        // NEeed to see how to change the title
        
        this.getDetailspage().down('header').setTitle(record.newsTitle)
        var img = comp.down('#promo_img')
        var title = comp.down('#details_title')
        var text = comp.down('#details_text') 
        title.setData({
            title : record.newsTitle
            })
        text.setData({
            main_text : record.newsText
            })
        img.setHtml('<img src="'+record.promo_img+'">')
        GK.Viewport.setActiveItem(5)

    }
    
   
    
   

})


Ext.define('GK.store.Speakers', {
          extend : 'Ext.data.Store',
          config : {
          fields : ['name', 'about_speaker',  'conference_name', 'promo_thumb', 'promo_img', 'event_time' , 'event_time_img'],
          autoLoad : true,
          proxy : {
            type: 'ajax',
            url : './json/speakers.json',
            reader: {
                type: 'json',
                rootProperty: 'speakers'
            }  
        }
    }
      })
Ext.define('GK.store.News', {
    extend : 'Ext.data.Store',
    config : {
        fields : ['newsTitle', 'newsText', 'promo_thumb', 'promo_img',  ],
        autoLoad : true,
        proxy : {
            type: 'ajax',
            url : './json/news.json',
            reader: {
                type: 'json',
                rootProperty: 'news'
            }  
        }
    }
}) 
Ext.define('GK.store.Workshops', {
    extend : 'Ext.data.Store',
    config : {
        // Using news data model / views
        fields : ['newsTitle', 'newsText', 'promo_thumb', 'promo_img', 'event_time' ,'event_time_img' ],
        autoLoad : true,
        proxy : {
            type: 'ajax',
            url : './json/workshop.json',
            reader: {

                type: 'json',
                rootProperty: 'workshop'
            }  

        }
    }
})

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

Ext.define('GK.view.startpage.StartPageList', {
    extend: 'Ext.List',
    xtype  : 'startpagelist',
    
    config : {
    cls : 'startpage-list',    
    itemTpl: '<span>{menuItemText}<span>',
    data: [
        { menuItemText: 'BILIETAI', menuItem : 'tickets' },
        { menuItemText: 'APIE', menuItem : 'about' },
        { menuItemText: 'PRANEŠĖJAI', menuItem : 'speakers' },
        { menuItemText: 'PROGRAMA', menuItem : 'schedule' },
        { menuItemText: 'NAUJIENOS', menuItem : 'news' },
        { menuItemText: 'DIRBTUVĖS', menuItem : 'workshops' },
        { menuItemText: 'VAKARĖLIS', menuItem : 'party' },
        { menuItemText: 'REMĖJAI', menuItem : 'sponsors' },
        { menuItemText: 'FACEBOOK', menuItem : 'facebook' }
     
    ], 
    scrollable : false,
    style : 'margin-top: -5px;',
      disclosure: true,


            //set the function when a user taps on a disclsoure icon
            onItemDisclosure: function(record, item, index, e) {
            
            }
      

    }
}
)
        


Ext.define('GK.view.startpage.StartPageHeader', {
    extend: 'Ext.Panel',
    xtype  : 'startpageheader',
    config : {
        layout : 'hbox',
        items : [
        {
            flex : 1
        },
        {
            html: '<img src="./images/startpage_header.png">',
            cls : 'image-max-width'
        },
        {
            flex : 1
        }
        ],
      
    }
}
)
        


Ext.define('GK.view.sponsors.Sponsors', {
    extend: 'Ext.Panel',
    xtype  : 'sponsorsgrid',
    config : {
        layout : 'hbox',
        scrollable : true,
        items : [
        {
            flex : 1
        },

        {
                
            html: '<img src="./images/promo/sponsors.jpg">',
            // tpl :  '<img src="./images/sponsors/{[Ext.Viewport.getOrientation() === "landscape" ? "sponsors_land.png" : "sponsors.png"]}">',
            cls : ['image-max-width', 'sponsors-image']
        },
        {
            flex : 1
        }
        ]    

    }
}
)
        


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
Ext.define('GK.view.details.PartyDetails', {
    extend: 'GK.view.details.Details',
    xtype  : 'partydetails',
    
    config : {    
             
        items : [
        {  
            xtype : 'panel',
            layout : 'hbox',
            items : [
            {
                flex : 1
            } ,
{
                html: '<img src=images/promo/party.jpg>',
                cls : 'image-max-width',
            } ,
{
                flex : 1
            }  
            ]
           
        },
        {
            cls : 'details-title',
            xtype: 'container',
            html : '<p><b>Take Me Deep</b></p><p>Mario / Vidiz / Jazzu / Speciali Programa</p>'
                       
        },
        {
            cls :['details-text'],
            xtype: 'container',
             styleHtmlContent : true,
            html : '„Take Me DEEP“ kviečia visus kauniečius ir miesto svečius pasinerti į KITOKĮ vakarėlį, kupiną kokybiškos muzikos ir pagardinto ypatinga programa. </p><p> Į laikinąją sostinę grįš gilesnės elektroninės muzikos kūrėjai Mario Bassanov, Vidis bei tylos balsas - Jazzu. Atlikėjai, kurių muzika džiugina ne tik Lietuvos, bet ir išrankiausius Europos klausytojus, pristatys naujus, specialiai rudenėjančiam Kaunui skirtus garsus.  </p><p> Vakaro muzikai akomponuos netradicinė EVENTUS programa su šokių projekto „Girls only“ pasirodymais, svečių fotosesijomis, Jagermeister promo shot‘ais bei įvairiausiomis kitomis atrakcijomis. Išskirtinio dėmesio sulauks dailiosios lyties atstovės , kurioms organizatoriai prižada nemažai būčinių ir dovanų.'
           

        }
       
        ]
    }
}
)
Ext.define('GK.view.details.AboutDetails', {
    extend: 'GK.view.details.Details',
    xtype  : 'aboutdetails',
    
    config : {    
             
        items : [
        {  
            xtype : 'panel',
            layout : 'hbox',
            items : [
            {
                flex : 1
            } ,
{
                  html: '<img src="images/startpage_header.png">',
                cls : 'image-max-width',
            } ,
{
                flex : 1
            }  
            ]
           
        },
          
        {
            cls :['details-text'],
            xtype: 'container',
            styleHtmlContent : true,
            html : '“Take Me” – analogų Lietuvoje neturinti reklamos konferencija, kurios tikslas – dalintis žiniomis apie reklamos pasaulį, skatinti verslumą Lietuvoje bei suteikti galimybę užmegzti naudingas pažintis.'
        },
        {
            xtype : 'button',
            
            cls : ['details-about-button'],
            text : 'Daugiau',
           // ui: 'confirm',
            width : '40%',
            handler: function() {
                this.getParent().innerItems[4].setHidden(false)
                this.setHidden(true)
            }
            
        },
         {
            cls :['details-text'],
            xtype: 'container',
            hidden : true,
            styleHtmlContent : true,
            html : '<p>Pirmoji „Take Me“ konferencija pritraukė net 400 šia sritimi besidominčių žmonių. Renginio temą – „Reklama verslo pradžiai“ pažinti padėjo Tomas Ramanauskas („XX“), Laurynas Pocius („Prieskoniai verslui“), Tomas Kacevičius („kitoks.com“), Algirdas Karalius („Algirdo Karaliaus pardavėjų klubas“), Antonio Bechtle („Milk“). Renginio metu buvo galima ne tik išmokti, kaip atsakingai priimti netikėtus verslo iššūkius, bet ir atsipalaiduoti poilsio zonoje ar sudalyvauti kūrybinėse dirbtuvėse.  </p> </br><p> Šiemet konferencija auga ir joje apsilankyti kviečiami virš 1000 dalyvių. Renginio tema – „Medijų tendencijos, apžvelgs įvairius reklamavimosi būdus skirtingose žiniasklaidos priemonėse, pradedant tradicine reklama spaudoje, radijuje, televizijoje ir baigiant vis labiau populiarėjančiais virusiniais filmukais, socialiniais tinklais ar mobiliosiomis aplikacijomis. Iš viso numatoma 13 pranešimų, kuriuos skaitys savo srities profesionalai iš Lietuvos ir užsienio. Lygiagrečiai su pranešimais vyks kūrybinės dirbtuvės, kurias ves meno, mokslo, verslo sričių atstovai. Taip pat bus rengiama paskaita apie kavą, po kurios lauks degustacija.  </p></br> <p> Šiais metais organizatoriai kviečia registruotis novatoriškus StartUp`us iš visos Lietuvos, kurie bus atrankos būdu pasirinkti demonstruoti savo produktus ar paslaugas konferencijos patalpose. Dalyviai, besidomintys technologijomis, galės susipažinti su progresyvių StartUp‘ų sukurtomis mobiliosiomis aplikacijomis, kompiuterinėmis programomis, žaidimais ir kitomis inovacijomis.  </p></br> <p>Po įspūdžių kupinos dienos vakarėlių organizatoriai „Eventus“ dalyvius pakvies į šaunų afterpartį Kauno klube „Macao“, kuriame publika iki ryto šėls kartu su Mario Basanov, Jazzu, Vidžiu ir mėgausis specialiai paruošta programa.</p>'
        },
        {
            xtype : 'container',
            layout : 'hbox',
            items : [
                { flex : 1},
                { html: '<img src="images/promo/contacts.jpg">',
                    cls : 'image-max-width',
                },
                 { flex : 1}
            ]
           
        },
       
       
        ]
    }
}
)
Ext.define('GK.view.SpeakerPageView', {
    extend: 'Ext.Container',
    xtype  : 'speakerpage',
   
    config : {
        layout : 'vbox',

        items : [ 
        {
            xtype : 'header',
            title : 'Pranešėjas',
        },
       
        {
            xtype : 'speakerdetails',
              scrollable : true,
              flex : 1
        },
        
           {
            xtype : 'footer',
        }
        ]

    }
}
)
Ext.define('GK.view.news.NewsListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype  : 'newslistitem',
    requires: ['Ext.Img'],

  

    config: {
        /**
         * A custom cls for each item
         */
    
        cls: [Ext.baseCSSPrefix + 'list-item', 'my-list-item'],
        //  cls : ,
        height : 81,
        /**
         * setup the dataMap. each property is a method in 'this' class, and then
         * inside that config, it will call the method you pass with the value you
         * want, form the record
         */
        dataMap: {
            //this will call: this.getImage()
            getImage: {
                //and then this will call: this.getImage().setSrc() with the
                //'image' field value form the record
                setSrc: 'promo_thumb'
                
            },

            getNewstext: {
                setHtml: 'newsTitle'
            }

         
        },

        image: {
            height : 80,
            width :80,
            cls : 'image-max-height',
        },

        newstext: {
            cls: 'my-list-item-text',
            flex: 1,
        },
        
        disclosure : {
        
            cls :[ 'disclosure-green', 'disclosure-white', 'disclosure']
        },

        layout: {
            type: 'hbox',
            align: 'center'
        }
    },

    applyDisclosure: function(config) {
        return Ext.factory(config, Ext.Container, this.getDisclosure());
    },

    updateDisclosure: function(newDisclosure, oldDisclosure) {
        if (newDisclosure) {
            this.add(newDisclosure);
        }

        if (oldDisclosure) {
            this.remove(oldDisclosure);
        }
    },
    
    applyImage: function(config) {
        return Ext.factory(config, Ext.Img, this.getImage());
    },

    updateImage: function(newImage, oldImage) {
        if (newImage) {
            this.add(newImage);
        }

        if (oldImage) {
            this.remove(oldImage);
        }
    },


    applyNewstext: function(config) {
        return Ext.factory(config, Ext.Component, this.getNewstext());
    },

    updateNewstext: function(newnewstext, oldnewstext) {
        if (newnewstext) {
            this.add(newnewstext);
        }

        if (oldnewstext) {
            this.remove(oldnewstext);
        }
    }

    
}
)
        


Ext.define('GK.view.speakers.SpeakersListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype  : 'speakerslistitem',
    requires: ['Ext.Img'],

  

    config: {
    
        cls: [Ext.baseCSSPrefix + 'list-item', 'my-list-item', ],
      //  cls : ,
        height : 81,
        dataMap: {
            getImage: {
                setSrc: 'promo_thumb'
                
            },
            getName: {
                setData: 'xindex'
            }
        },
        image: {
            height : 80,
            width :80,
            docked : 'left',
            cls : 'image-max-height'
            
        },

        name: {
            cls: ['my-list-item-text'],
            flex: 1
          
        },
        
         disclosure : {
            cls :[ 'disclosure-white', 'disclosure-pink', 'disclosure']
            
        },

        layout: {
            type: 'hbox',
            align: 'center'
        }
    },

    applyDisclosure: function(config) {
        return Ext.factory(config, Ext.Container, this.getDisclosure());
    },


    updateDisclosure: function(newDisclosure, oldDisclosure) {
        if (newDisclosure) {
            this.add(newDisclosure);
        }

        if (oldDisclosure) {
            this.remove(oldDisclosure);
        }
    },
    
     applyImage: function(config) {
        return Ext.factory(config, Ext.Img, this.getImage());
    },

    updateImage: function(newImage, oldImage) {
        if (newImage) {
            this.add(newImage);
        }

        if (oldImage) {
            this.remove(oldImage);
        }
    },

  
    applyName: function(config) {
        return Ext.factory(config, 'GK.view.speakers.Speaker', this.getName());
    },

    updateName: function(newName, oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    }
    
     
}
)
        


Ext.define('GK.view.speakers.Speaker', {
    extend: 'Ext.Container',
    xtype  : 'speakertitle',

    config : {
        layout : 'vbox',
        items : [
        {
            xtype : 'container',
            itemId : 'speaker_name',
            cls : 'speakers-conference-name'
            

            
           
        },
        {
            xtype : 'container',
            itemId : 'conference_title',
            cls : 'speakers-conference-title',
        }
        
        ],
        listeners : {
            updatedata : function(dataItem, newData){
                
                var conference_title = dataItem.down('container[itemId=conference_title]')
                var speaker_name = dataItem.down('container[itemId=speaker_name]')
                var data = Ext.getStore('Speakers').getAt(newData - 1).data
                
                conference_title.setHtml(Ext.String.ellipsis(data.conference_name, GK.listTextWidth*2))
                speaker_name.setHtml(Ext.String.ellipsis(data.name, GK.listTextWidth))
              //  console.log(newData)
            }
        }
    }
    
}
)
        
Ext.define('GK.view.schedule.ScheduleListItem', {
    extend: 'GK.view.speakers.SpeakersListItem',
    xtype  : 'schedulelistitem',

    config: {
        dataMap: {
            getImage: {
                setSrc: 'event_time_img'
            }
        },
        
        image : {
            cls : [ 'schedule-image-pink' ]
        }
    }

    
    
     
}
)
        


Ext.define('GK.view.schedule.ScheduleWorkshopsListItem', {
    extend: 'GK.view.news.NewsListItem',
    xtype  : 'schedulelistworkshopsitem',

    config: {
        dataMap: {
            getImage: {
                setSrc: 'event_time_img'
            }
        },
        
        image : {
             cls : [ 'schedule-image-green' ]
        }
    }

    
    
     
}
)
        


Ext.define('GK.view.Viewport', {
    extend: 'Ext.Container',
     requires: [
    'GK.view.details.Details'
    ],
    config : {
        fullscreen : true,
        layout : {
            type : 'card'  ,
            animation : {
                type : 'slide'
            }
        },
        items : [
        {
            xtype : 'startpage'
        },
        {
            xtype : 'sponsors'
        },
        {
            xtype : 'news'
        },
        {
            xtype : 'speakers'
        },
        {
            xtype : 'speakerpage'
        },
        {
            xtype : 'detailspage'
        },
        {
            xtype : 'partypage'
        },
        {
            xtype : 'aboutpage'
        },
        { 
            xtype : 'workshops'
        },
        { 
            xtype : 'schedule'
        },
        ]

    }
}
)
        


Ext.define('GK.view.StartPageView', {
    extend: 'Ext.Container',
    xtype  : 'startpage',
     requires: [
    'GK.view.startpage.StartPageList',
    'GK.view.startpage.StartPageHeader'
    ],
    config : {
      scrollable: {
    direction: 'vertical',
},
        layout : 'vbox',
        items : [ 
        {
            xtype : 'container',
              
            items : [
                {
            xtype : 'startpageheader',
        },
        {
            xtype : 'startpagelist',
           // styleHtmlContent: true,
            flex : 1,
           
        },
            ]
        },
           {
            xtype : 'footer',

        }
        ]

    }
}
)
        


Ext.define('GK.view.SponsorsView', {
    extend: 'Ext.Container',
    xtype  : 'sponsors',
    requires: [
    'GK.view.sponsors.Sponsors'
    ],
    config : {
        scrollable : false,

        layout : 'vbox',
        items : [ 
        {
            xtype : 'header',
            title : 'Remėjai',
        },
        {
            xtype : 'sponsorsgrid',
            flex : 1
        },
        {
            xtype : 'footer',
        },
           
        
        
        ]

    }
  
}
)
        


Ext.define('GK.view.DetailsView', {
    extend: 'Ext.Container',
    xtype  : 'detailspage',
     requires: [
    'GK.view.details.Details'
    ],
    config : {
        layout : 'vbox',

        items : [ 
        {
            xtype : 'header',
        },
       
        {
              xtype : 'details',
              scrollable : true,
              flex : 1
        },
        
           {
            xtype : 'footer',
        }
        ]

    }
}
)
Ext.define('GK.view.PartyView', {
    extend: 'Ext.Container',
    xtype  : 'partypage',
    requires: [
    'GK.view.details.PartyDetails'
    ],
    config : {
        layout : 'vbox',

        items : [ 
        {
            xtype : 'header',
            title : 'Vakarėlis',
        },
       
        {
            xtype : 'partydetails',

              flex : 1
        },
        
           {
            xtype : 'footer',
        }
        ]

    }
}
)
Ext.define('GK.view.AboutView', {
    extend: 'Ext.Container',
    xtype  : 'aboutpage',
    requires: [
    'GK.view.details.AboutDetails'
    ],
    config : {
        layout : 'vbox',

        items : [ 
        {
            xtype : 'header',
            title : 'Apie',
        },
       
        {
            xtype : 'aboutdetails',

              flex : 1
        },
        
           {
            xtype : 'footer',
        }
        ]

    }
}
)
Ext.define('GK.controller.SpeakersController', {
    extend : 'Ext.app.Controller',
    requires : ['GK.view.details.SpeakerDetails' , 'GK.view.SpeakerPageView'],
    config : {
        refs : {
            speakerdetails: 'speakerdetails',
            speakerpage  : 'speakerpage'
        },   
        control : {
         
            'speakerslist' : {
                itemtap : 'speakerTapped'
            },
            'schedulelist' : {
                itemtap : 'speakerTapped'
            }
       
        },
        routes : {     
            'speakers/:id' : 'showSpeakerDetails'
        }
    
    },
    speakerTapped : function(comp, index, target, record){
        setTimeout(function(){comp.deselect(record);},500); 
        this.getApplication().getController('NewsController').ItemTapCSS(target, this.oldSelectedItem)
        this.oldSelectedItem = target; 
        this.redirectTo('speakers/'+ record.data.id)
    },
     
    showSpeakerDetails : function(id){
        
        
        var store = Ext.getStore('Speakers')  
        if(store.findRecord('id', id))
            this.updateSpeakerData(store.findRecord('id', id).data)
        else   {
            Ext.getStore('Speakers').load({
                callback: function(records, operation, success) {
                    this.updateSpeakerData(records[id-1].data)
                },
                scope: this
            });
        }
        
        
     //   var record = Ext.getStore('Speakers').findRecord('id', id)
     
      
         
    },
    
     updateSpeakerData : function(record){
         var comp = this.getSpeakerdetails();
         this.getSpeakerpage().down('header').setTitle(record.name)
        var img = comp.down('#promo_img')
        var title = comp.down('#details_title')
        var subtitle = comp.down('#details_subtitle') 
        var text = comp.down('#details_text') 

        title.setData({name : record.name})
        subtitle.setData( { conference_name : record.conference_name})
        text.setData({ about_speaker : record.about_speaker})
     //   console.log(img)
        img.setHtml('<img src="'+record.promo_img+'">')
        GK.Viewport.setActiveItem(4)
         
     }
    
    
   
   
    
 
    
   

})


Ext.define('GK.view.news.NewsList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'newslist',
    requires: [
    'GK.view.news.NewsListItem'
    ],
    config : {
        store : 'News' , 
        useComponents: true,
        defaultType: 'newslistitem'
    }
}
)
        


Ext.define('GK.view.NewsView', {
    extend: 'Ext.Container',
    xtype  : 'news',
    requires: [
    'GK.view.news.NewsList'
    ],
    config : {
        scrollable : false,

        layout : 'vbox',
        items : [ 
        {
            xtype : 'header',
            title : 'Naujienos'
        },
        {
            xtype : 'newslist',
            itemId : 'news',
            flex : 1
        },
        {
            xtype : 'footer'
        },
           
        
        
        ]

    }
  
}
)
        


Ext.define('GK.view.speakers.SpeakersList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'speakerslist',
    requires: [
    'GK.view.speakers.SpeakersListItem',
    'GK.view.speakers.Speaker'
    ],
    config : {
        store :   'Speakers',
        useComponents: true,
        defaultType: 'speakerslistitem'
      
    }
}
)
        


Ext.define('GK.view.SpeakersView', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'speakers',
    requires: [
    'GK.view.speakers.SpeakersList',
    'GK.view.details.SpeakerDetails'
    ],
    config : {
        scrollable : false,

        layout : 'vbox',
        items : [  
        {
            xtype : 'header',
            title : 'Pranešėjai'
        },
        {
            xtype : 'speakerslist',
            flex : 1
        },
        {
            xtype : 'footer',
        },
           
        
        
        ]

    }
  
}
)
        


Ext.define('GK.view.schedule.ScheduleList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'schedulelist',
    requires: [
    'GK.view.schedule.ScheduleListItem',
    ],
    config : {
        store :   'Speakers',
        useComponents: true,
        defaultType: 'schedulelistitem'
      
    }
}
)
        


Ext.define('GK.view.schedule.ScheduleWorkshopsList', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'scheduleworkshopslist',
    requires: [
    'GK.view.schedule.ScheduleWorkshopsListItem',
    ],
    config : {
        store :   'Workshops',
        useComponents: true,
        defaultType: 'schedulelistworkshopsitem',
        itemId : 'news'
      
    }
}
)
        


Ext.define('GK.view.schedule.ScheduleTabBar', {
    extend: 'Ext.TabPanel',
    xtype : 'scheduletabbar',
    requires: [
    'GK.view.schedule.ScheduleList',
    'GK.view.schedule.ScheduleListItem',
    'GK.view.schedule.ScheduleWorkshopsList',
    'GK.view.schedule.ScheduleWorkshopsListItem'
    ],

    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
     //   ui : 'light',
        items: [
            { 
              xtype : 'schedulelist',
              title : 'Pranešėjai' ,
              iconCls: 'user'
            },
              { 
                  
              
              xtype : 'scheduleworkshopslist',
              title : 'Dirbtuvės' ,
              iconCls: 'settings',
              itemId : 'workshops'
            },
       
        ],
        flex : 1
    }
});
Ext.define('GK.view.ScheduleView', {
    extend: 'Ext.dataview.DataView',
    xtype  : 'schedule',
    requires: [
    'GK.view.schedule.ScheduleTabBar',

    ],
    config : {
        scrollable : false,

        layout : 'vbox',
        items : [  
        {
            xtype : 'header',
            title : 'Programa'
        },
        {
            xtype : 'scheduletabbar',
           
        },
        
        {
            xtype : 'footer',
        },
           
        
        
        ]

    }
  
}
)
        


Ext.define('GK.controller.ScheduleController', {
    extend : 'Ext.app.Controller',
    requires : ['GK.view.ScheduleView', 'GK.view.schedule.ScheduleList'],
    config : {
        refs : {
//            speakerdetails: 'speakerdetails',
//            speakerpage  : 'speakerpage'
        },   
        control : {
         
//            'schedulelist' : {
//                itemtap : 'speakerTapped'
//            }
       
        },
        routes : {     
            'speakers/:id' : 'showSpeakerDetails'
        }
    
    },
    launch : function(){
     // alert(444)  
    },
    speakerTapped : function(comp, index, target, record){
        setTimeout(function(){comp.deselect(record);},500); 
        this.getApplication().getController('NewsController').ItemTapCSS(target, this.oldSelectedItem)
        this.oldSelectedItem = target; 
        this.redirectTo('speakers/'+ record.data.id)
    },
     
    showSpeakerDetails : function(id){
        
        
        var store = Ext.getStore('Speakers')  
        if(store.findRecord('id', id))
            this.updateSpeakerData(store.findRecord('id', id).data)
        else   {
            Ext.getStore('Speakers').load({
                callback: function(records, operation, success) {
                   
                    console.log(records[id-1]);
                    this.updateSpeakerData(records[id-1].data)
                },
                scope: this
            });
        }
        
        
     //   var record = Ext.getStore('Speakers').findRecord('id', id)
     
      
         
    },
    
     updateSpeakerData : function(record){
         var comp = this.getSpeakerdetails();
         this.getSpeakerpage().down('header').setTitle(record.name)
        var img = comp.down('#promo_img')
        var title = comp.down('#details_title')
        var subtitle = comp.down('#details_subtitle') 
        var text = comp.down('#details_text') 

        title.setData({name : record.name})
        subtitle.setData( { conference_name : record.conference_name})
        text.setData({ about_speaker : record.about_speaker})
     //   console.log(img)
        img.setHtml('<img src="'+record.promo_img+'">')
        GK.Viewport.setActiveItem(4)
         
     }
    
    
   
   
    
 
    
   

})



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



