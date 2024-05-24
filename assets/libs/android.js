var app = {
    
    Exit:function(){
        prompt("#exitApp","");
    },
    
    Toast:function(text){
        prompt("#Toast",text);
    },
    
    Vibrate:function(time){
        prompt("#vibrate",time);
    },
    
    LightOn:function(i){
        prompt("#light_on",i);
    },
    
    LightOff:function(i){
        prompt("#light_off",i);
    },
    
    SetTheme:function(theme){
        prompt("#set_theme",theme);
    },
    
    SetOrientation:function(orientation){
        prompt("#set_orientation",orientation);
    },
    
    SetBrightness:function(i){
        prompt("#set_brightness",i);
    },
    
    SetTitle:function(text){
        prompt("#set_title",text);
    },
    
    SetSubTitle:function(text){
        prompt("#set_sub_title",text);
    },
    
    SetStatusBarColor:function(color){
        prompt("#set_status_color",color);
    },
    
    SetNavigationBarColor:function(color){
        prompt("#set_navigation_color",color);
    },

    SetTitleBarColor:function(color){
        prompt("#set_title_color",color);
    },
    
    HideNavigationBar:function(){
        prompt("#hide_navigation_bar","");
    },

    ShowNavigationBar:function(){
        prompt("#show_navigation_bar","");
    },
    
    HideTitleBar:function(){
        prompt("#hide_title","");
    },
    
    ShowTitleBar:function(){
        prompt("#show_title","");
    },
    
    FullScreen:function(){
        prompt("#fullscreen","");
    },
    menuItems: [],
    SetMenu:function(items,isAppend){
        if(!isAppend){
            app.ClearMenu();
            app.menuItems = [];
        }
        app.menuItems.push.apply(app.menuItems,items);
        var str = "";
        for(var i = 0;i < items.length;i++){
            str += items[i]+"#";
        }
        prompt("#set_menu",str.substring(0,str.length-1));
    },
    
    ClearMenu:function(){
        prompt("#clear_menu","");
    },
    
    HomeBackEnable:function(bool){
        prompt("#home_back",bool);
    },
    
    EnableConsole:function(){
        prompt("#enable_console","");
    },
    
    DisableConsole:function(){
        prompt("#disable_console","");
    },
    
    Install:function(path){
        prompt("#install",path);
    },
    
    Uninstall:function(pkg){
        prompt("#uninstall",pkg);
    },
    
    Open:function(path,mimeType){
        prompt("#open",path+"#"+mimeType);
    },
    
    OpenCamera:function(){
        return prompt("#open_camera","");
    },
    
    OpenVideoCamera:function(){
        return prompt("#open_video_camera","");
    },
    
    OpenApp:function(pkg){
        prompt("#open_app",pkg);
    },
    
    SetData:function(key,value){
        prompt("#set_data",key+"#"+value);
    },
    
    GetData:function(key,defaultValue){
        return prompt("#get_data",key+"#"+defaultValue);           
    },
    
    GetCopyedText:function(){
        return prompt("#getCopy","");           
    },
    
    SetCopyText:function(text){
        prompt("#setCopy",text);           
    },
    
    RemoveData:function(key){
        prompt("#remove_data",key);           
    },
    
    ClearData:function(){
        prompt("#clear_data","");           
    },
    
    GetApps:function(p1,p2){
        return prompt("#get_apps",p1+"#"+p2);
    },
    
    GetAppsName:function(){
        return prompt("#get_apps_name","");           
    },
    
    GetAppsPackage:function(){
        return prompt("#get_apps_pkg","");           
    },
    
    CreateFolder:function(path){
        prompt("#mk_dir",path);
    },
    
    CreateFile:function(path,data){
        prompt("#mk_file",path+"#"+data);
    },
    
    DeletePath:function(path){
        prompt("#delete_path",path);
    },
    
    MovePath:function(source,dest){
        prompt("#move_path",source+"#"+dest);
    },
    
    CopyPath:function(source,dest){
        prompt("#copy_path",source+"#"+dest);
    },
    
    RenamePath:function(path,name){
        prompt("#rename",path+"#"+name);
    },
    
    IsFile:function(path){
        return prompt("#is_file",path);
    },
    
    IsFolder:function(path){
        return prompt("#is_dir",path);
    },
    
    IsExistPath:function(path){
        return prompt("#is_file_exist",path);
    },
    
    IsHiddenPath:function(path){
        return prompt("#is_file_hidden",path);
    },
    
    IsReadablePath:function(path){
        return prompt("#is_file_readable",path);
    },
    
    IsWriteablePath:function(path){
        return prompt("#is_file_writeable",path);
    },
    
    IsExecuteablePath:function(path){
        return prompt("#is_file_executeable",path);
    },
    
    GetFileIntent:function(mimeType){
        return prompt("#get_file_intent",mimeType);
    },
    
    ReadFile:function(path){
        return prompt("#get_file_data",path);
    },
    
    GetFileSize:function(path){
        return prompt("#get_path_size",path);
    },
    
    GetFileLength:function(path){
        return prompt("#get_path_length",path);
    },
    
    GetFileLastModified:function(path){
        return prompt("#get_file_last_modified",path);
    },
    
    GetFileLastModifiedTime:function(path,format){
        return prompt("#get_file_time",path+"#"+format);
    },
    
    GetPath:function(path){
        return prompt("#get_files",path);
    },
    
    GetFiles:function(path,ext){
        if(typeof ext == "undefined"){
            return prompt("#get__files",path);
        }else{
            return prompt("#get_files_ext",path+"#"+ext);
        }
    },
    
    GetFolders:function(path){
        return prompt("#get__folders",path);
    },
    
    GetMessage:function(){
        return prompt("#get_messages","");
    },
    
    GetCallHistory:function(){
        return prompt("#get_calls","");
    },
    
    GetContract:function(){
        return prompt("#get_contracts","");
    },
    
    CreateContract:function(name,num,extras){
        if(typeof extras == "undefined"){
            prompt("#create_contract",name+"#"+num);
        }else{
            prompt("#create_contract",name+"#"+num+"#"+extras);
        }
    },
    
    CreateZip:function(source,dest){
        prompt("#create_zip",source+"#"+dest);
    },
    
    UnZip:function(source,dest){
        prompt("#unzip",source+"#"+dest);
    },
    
    StartRecording:function(path){
        prompt("#start_record",path);
    },
    
    StopRecording:function(){
        prompt("#stop_record","");
    },
        
    AudioPlay:function(path,volume){
        if(typeof volume == "undefined"){
            prompt("#start_play",path+"#"+10);
        }else{
            prompt("#start_play",path+"#"+volume);
        }
    },
    
    AudioStop:function(){
        prompt("#stop_play","");
    },
    
    DownloadFile:function(url,path){
        prompt("#download",url+"#"+path);
    },
    
    TextToSpeech:function(text){
        prompt("#text_to_speech",text);
    },
    
    SpeechToText:function(){
        return prompt("#speech_to_text","");
    },
    
    ShowDialog:function(id,title,mess,bool,pos,neg,nut){
        prompt("#dialog",id+"#"+title+"#"+mess+"#"+bool+"#"+pos+"#"+neg+"#"+nut);
    },
    
    StartSensor:function(){
        prompt("#startSensor","");
    },
    
    StopSensor:function(){
        prompt("#stopSensor","");
    },
    
    ShowNotification:function(title,text,bool,isIntent,n){
        prompt("#showNotification",title+"#"+text+"#"+bool+"#"+isIntent+"#"+n);
    },
    
    HideNotification:function(i){
        prompt("#hideNotification",i);
    },
    
    ShowPopupWindow:function(width,height,url){
        prompt("#showPopupWindow",width+"#"+height+"#"+url);
    },
    
    UpdatePopupWindow:function(x,y,width,height,alpha){
        prompt("#updatePopupWindow",x+"#"+y+"#"+width+"#"+height+"#"+alpha);
    },
    
    HidePopupWindow:function(){
        prompt("#hidePopupWindow","");
    },
    
    GetMimePath:function(){
        return prompt("#get_mime_path","");
    },
    
    GetStorages:function(){
        return prompt("#get_storages","");
    },
    
    GetReceiveMessage:function(){
        return prompt("#get_intent_message","");
    },
    
    GetReceiveSender:function(){
        return prompt("#get_intent_sender","");
    },
    
    GetReceiveAction:function(){
        return prompt("#get_intent_action","");
    },
    
    GetReceiveData:function(){
        return prompt("#get_intent_data","");
    },
};