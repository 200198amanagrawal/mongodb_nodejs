//events are used to control the html browser page(js page).
//calling multiple events.
const events=require("events");
const event=new events.EventEmitter;
function firstevent(a,b)
{
    console.log(a+b);
    event.emit("click2");//event emited here for sequential purpose.
}
function secondevent()
{
    console.log("Second event");
    event.emit("click3");
}
function thirdevent()
{
    console.log("Third event");
}
event.on("clickadd",firstevent);
event.on("click2",secondevent);
event.on("click3",thirdevent);
event.emit("clickadd",4,5);