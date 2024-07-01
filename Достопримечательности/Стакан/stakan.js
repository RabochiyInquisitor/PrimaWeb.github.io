function Clicka()
{
    var obj = document.getElementById('arrow1');
    var panel = document.getElementById('panel1');

    if(panel.style.display === "none")
    {
        obj.innerHTML = "Описание &and;";
        panel.style.display = "flex";
        
    }
    else{
        obj.innerHTML = "Описание &or;";
        panel.style.display = "none";
        
    }
}
function History()
{
    var obj = document.getElementById('arrow2');
    var panel = document.getElementById('panel2');

    if(panel.style.display === "none")
    {
        obj.innerHTML = "История &and;";
        panel.style.display = "flex";
        
    }
    else{
        obj.innerHTML = "История &or;";
        panel.style.display = "none";
        
    }
}
function MyMap()
{
    var obj = document.getElementById('arrow3');
    var panel = document.getElementById('panel3');

    if(panel.style.display === "none")
    {
        obj.innerHTML = "Карты &and;";
        panel.style.display = "flex";
        
    }
    else{
        obj.innerHTML = "Карты &or;";
        panel.style.display = "none";
        
    }
}