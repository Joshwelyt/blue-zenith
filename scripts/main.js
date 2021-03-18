let blueZenith = loadMusic("xi");

UnitTypes.zenith.localizedName = "Blue Zenith";

Events.on(WaveEvent, () => {
    for(let t of Team.baseTeams){
        let units = Units.closest(
            t,
            Vars.player.x,
            Vars.player.y,
            e => {
                return e.type === UnitTypes.zenith;
            }
        );
        if(units !== null){
            let zero = new java.lang.Integer(0);
            Core.settings.put("musicvol", zero);
            Core.settings.put("sfxvol", zero);
            Core.settings.put("ambientvol", zero);
            
            if(!blueZenith.isPlaying()){
                blueZenith.setVolume(1);
                blueZenith.play();
            }
            
            break;
        }
    }
});
