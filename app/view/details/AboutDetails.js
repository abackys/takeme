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
            xtype: 'container',
            html: '<div class="addthis_toolbox addthis_default_style "></a> <a class="addthis_button_facebook_like" fb:like:layout="button_count"></a> <a class="addthis_button_tweet"></a> <a class="addthis_button_pinterest_pinit"></a><a class="addthis_counter addthis_pill_style"></a></div>',
     
        },
      
        {
            cls :['details-text'],
            xtype: 'container',
            html : '<p>“Take Me” – analogų Lietuvoje neturinti reklamos konferencija, kurios tikslas – dalintis žiniomis apie reklamos pasaulį, skatinti verslumą Lietuvoje bei suteikti galimybę užmegzti naudingas pažintis.  </p>'
        },
        {
            xtype : 'button',
            cls : ['details-about-button'],
            text : 'Daugiau',
            ui: 'confirm',
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
            html : '<p>Pirmoji „Take Me“ konferencija pritraukė net 400 šia sritimi besidominčių žmonių. Renginio temą – „Reklama verslo pradžiai“ pažinti padėjo Tomas Ramanauskas („XX“), Laurynas Pocius („Prieskoniai verslui“), Tomas Kacevičius („kitoks.com“), Algirdas Karalius („Algirdo Karaliaus pardavėjų klubas“), Antonio Bechtle („Milk“). Renginio metu buvo galima ne tik išmokti, kaip atsakingai priimti netikėtus verslo iššūkius, bet ir atsipalaiduoti poilsio zonoje ar sudalyvauti kūrybinėse dirbtuvėse.  </p> </br><p> Šiemet konferencija auga ir joje apsilankyti kviečiami virš 1000 dalyvių. Renginio tema – „Medijų tendencijos, apžvelgs įvairius reklamavimosi būdus skirtingose žiniasklaidos priemonėse, pradedant tradicine reklama spaudoje, radijuje, televizijoje ir baigiant vis labiau populiarėjančiais virusiniais filmukais, socialiniais tinklais ar mobiliosiomis aplikacijomis. Iš viso numatoma 13 pranešimų, kuriuos skaitys savo srities profesionalai iš Lietuvos ir užsienio. Lygiagrečiai su pranešimais vyks kūrybinės dirbtuvės, kurias ves meno, mokslo, verslo sričių atstovai. Taip pat bus rengiama paskaita apie kavą, po kurios lauks degustacija.  </p></br> <p> Šiais metais organizatoriai kviečia registruotis novatoriškus StartUp`us iš visos Lietuvos, kurie bus atrankos būdu pasirinkti demonstruoti savo produktus ar paslaugas konferencijos patalpose. Dalyviai, besidomintys technologijomis, galės susipažinti su progresyvių StartUp‘ų sukurtomis mobiliosiomis aplikacijomis, kompiuterinėmis programomis, žaidimais ir kitomis inovacijomis.  </p></br> <p>Po įspūdžių kupinos dienos vakarėlių organizatoriai „Eventus“ dalyvius pakvies į šaunų afterpartį Kauno klube „Macao“, kuriame publika iki ryto šėls kartu su Mario Basanov, Jazzu, Vidžiu ir mėgausis specialiai paruošta programa.</p>'
        },
        {
            xtype : 'container',
            layout : 'hbox',
            items : [
                { flex : 1},
                { html: '<img src="images/promo/about.png">' },
                 { flex : 1}
            ]
           
        },
       
       
        ]
    }
}
)