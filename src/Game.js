var Game = {
    Init : function () {
        // Start Game
        const canvas = document.getElementById('canvas');
        // const ctx = canvas.getContext('2d')
        const gl = canvas.getContext('webgl');

        if(!gl){
            Utils.Log(ELogChannels.ERROR, 'Failed to load context :(');
        }
        
        Utils.Log(ELogChannels.DISPLAY, 'Context successfully retrieved');

        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        Utils.LoadShaders();

        for(const s in LoadedShaders){
            Utils.Log(ELogChannels.DISPLAY, s);
        }
        
    },
    
    Update : function () {
        
    },

    Render : function() {

    }
}