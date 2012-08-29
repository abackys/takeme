Ext.define('GK.view.speakers.SpeakersListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype  : 'speakerslistitem',
    requires: ['Ext.Img'],

  

    config: {
    
        cls: [Ext.baseCSSPrefix + 'list-item', 'my-list-item', ],
      //  cls : ,
        height : 81,
        dataMap: {
            getAvatar: {
                setSrc: 'speaker_img'
                
            },
            getName: {
                setHtml: 'name'
            }
        },
        avatar: {
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
    
     applyAvatar: function(config) {
        return Ext.factory(config, Ext.Img, this.getAvatar());
    },

    updateAvatar: function(newAvatar, oldAvatar) {
        if (newAvatar) {
            this.add(newAvatar);
        }

        if (oldAvatar) {
            this.remove(oldAvatar);
        }
    },

  
    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
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
        

