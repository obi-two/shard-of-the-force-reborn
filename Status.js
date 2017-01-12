<!--
//(C) 2008 Shards of the Force http://www.shardsoftheforce.co.cc
//Server Status Java Script
//WARNING THIS IS LICENSED SOFTWARE
//Define Variables
var sURL = unescape(window.location.pathname);
var LastUpdateTime = 1484220134893;
var ClusterName = new Array();
var ClusterStatus = new Array();
var ClusterPlayerCount = new Array();
var SS = "Off Line";
var date = new Date();
var maxupdatetime = (((1000) * 60) * 5);
var comptime = 0;
var cDT
var PageText = "";
//Init Variables
ClusterName[0] = "Shards of the Force SWG Galaxy";
ClusterStatus[0] = 2;
ClusterPlayerCount[0] = 0;
var ClusterGalaxyCount = ClusterName.length;
//init Complete
//define Functions
function refresh()
{
     window.location.href = sURL;
}

function runStatus(){

             document.writeln("<style type=\"text/css\">");
             document.writeln(".style1 {");
             document.writeln("text-align: left;");
             document.writeln("}");
             document.writeln(".style2 {");
             document.writeln("text-align: center;");
             document.writeln("font-family: Freshbot;");
             document.writeln("font-size: large;");
             document.writeln("}");
             document.writeln(".style3 {");
             document.writeln("text-align: center;");
             document.writeln("}");
             document.writeln("</style>");
             document.writeln("<table style=\"width: 300px; float: center\">");
             document.writeln("<tr>");
             document.writeln("<td class=\"style1\">");
             document.writeln("<table style=\"width: 100%\">");
             document.writeln("<tr>");
             document.writeln("<td>");
             document.writeln("<table style=\"width: 100%\">");
             document.writeln("<tr>");
             document.writeln("<td style=\"width: 193px\" class=\"style3\">Galaxy Name</td>");
             document.writeln("<td class=\"style3\">Status</td>");
             document.writeln("</tr>");
         for(i = 0; i < ClusterGalaxyCount; i++ )
         {
             
             comptime = maxupdatetime + LastUpdateTime;
             if(comptime < date.getTime()){
                 ClusterStatus[i] = 0; 
                 
             }
             switch(ClusterStatus[i])
             {
                 case 0:
                 {
                     SS = "Off Line";
                     break;
                 }
                 case 1:
                 {
                     SS = "Loading";
                     break;
                 }
                 case 2:
                 {
                     SS = "On Line(" + ClusterPlayerCount[i] + ")"; 
                     break;
                 }
                 default:
                 {
                     SS = "Unknown"; 
                 }
             }
             document.writeln("<tr> <td style=\"width: 193px\" class=\"style3\">");
             document.writeln(ClusterName[i]);
             document.writeln("</td><td class=\"style3\">");
             switch(ClusterStatus[i])
             {
                 case 0:
                 {
                     document.writeln("<font color=\"Red\">");
                     break;
                 }
                 case 1:
                 {
                     document.writeln("<font color=\"Blue\">");
                     break;
                 }
                 case 2:
                 {
                     document.writeln("<font color=\"Green\">");
                     break;
                 }
                 default:
                 {
                     document.writeln("<font color=\"Orange\">");
                 }
             }
             document.writeln(SS);
             document.writeln("</font>");
             document.writeln("</td></tr>");
             
         }
             document.writeln("</table>");
             document.writeln("</td>");
             document.writeln("</tr>");
             document.writeln("</table>");
             document.writeln("</td>");
             document.writeln("</tr>");
             document.writeln("</table>");
             cDT = setTimeout("refresh()", 60*1000);
}
//-->
