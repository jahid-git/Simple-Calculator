app.SetStatusBarColor("#091921");
app.SetNavigationBarColor("#091921");

window.onBackPressed = () => {
    app.Vibrate(150);
    app.ShowDialog(0,"Exit!","Do you want to exit?","true","Yes","No");
}

window.onDialogPositive = posi => {
    if(posi == 0){
        app.Exit();
    }
}