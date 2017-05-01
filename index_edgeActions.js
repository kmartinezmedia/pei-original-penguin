
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3135,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var stylesheet=$("<link rel='stylesheet' type='text/css' href='css/style.css'>");$(stylesheet).appendTo("#Stage");var meta1="<meta content=\"minimum-scale=1, width=device-width, maximum-scale=1\, user-scalable=no\" name=\"viewport\" />";$(meta1).appendTo("body");var meta2=$("<meta name='apple-mobile-web-app-capable' content='yes'>");$(meta2).appendTo("#Stage");var meta3=$("<meta name='apple-mobile-web-app-status-bar-style' content='translucent'>");$(meta3).appendTo("#Stage");yepnope({nope:['edge_includes/hammer.js'],complete:init});function init(){var element=sym.$("LANDING_PAGE_GROUP");var logo=sym.$("logo");var hammer=Hammer(element);var hammer=Hammer(logo);hammer.on("swipeleft",function(event){sym.play();});hammer.on("swiperight",function(event){sym.playReverse();});}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LANDING_PAGE_GROUP}","swipeleft",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","touchmove",function(sym,e){e.preventDefault();return false;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","touchstart",function(sym,e){e.stopPreventDefault();e.stopPropagation();return false;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_POLO_PANEL2}","touchend",function(sym,e){var shirtGuide=sym.createChildSymbol("poloGuide","Stage");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SHIRT_PANEL}","touchend",function(sym,e){var shirtGuide=sym.createChildSymbol("shirtGuide","Stage");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var chinoPanel=sym.$("CHINO_PANEL");chinoPanel.bind('touchend',function(event,ui){var chinoGuide=sym.createChildSymbol("chinoGuide","Stage");var chinoGuideSymbol=chinoGuide.getSymbolElement();});chinoPanel.bind('click',function(event,ui){var chinoGuide=sym.createChildSymbol("chinoGuide","Stage");var chinoGuideSymbol=chinoGuide.getSymbolElement();});sym.setVariable("current","");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_POLO_PANEL2}","click",function(sym,e){var shirtGuide=sym.createChildSymbol("poloGuide","Stage");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_SHIRT_PANEL}","click",function(sym,e){var shirtGuide=sym.createChildSymbol("shirtGuide","Stage");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'gif'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",450,function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play(0);});
//Edge binding end
})("gif");
//Edge symbol end:'gif'

//=========================================================

//Edge symbol: 'poloGuide'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_CLASSIC_PANEL}","touchend",function(sym,e){sym.$("CLASSIC_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CLASSIC_PANEL_back}","touchend",function(sym,e){sym.$("CLASSIC_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HERITAGE_PANEL}","touchend",function(sym,e){sym.$("HERITAGE_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HERITAGE_PANEL_back}","touchend",function(sym,e){sym.$("HERITAGE_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ROGUE_PANEL}","touchend",function(sym,e){sym.$("ROGUE_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ROGUE_PANEL_back}","touchend",function(sym,e){sym.$("ROGUE_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle4}","touchend",function(sym,e){sym.deleteSymbol();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CLASSIC_PANEL_back}","click",function(sym,e){sym.$("CLASSIC_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HERITAGE_PANEL_back}","click",function(sym,e){sym.$("HERITAGE_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ROGUE_PANEL_back}","click",function(sym,e){sym.$("ROGUE_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ROGUE_PANEL}","click",function(sym,e){sym.$("ROGUE_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HERITAGE_PANEL}","click",function(sym,e){sym.$("HERITAGE_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CLASSIC_PANEL}","click",function(sym,e){sym.$("CLASSIC_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle4}","click",function(sym,e){sym.deleteSymbol();});
//Edge binding end
})("poloGuide");
//Edge symbol end:'poloGuide'

//=========================================================

//=========================================================

//Edge symbol: 'poloGuide'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_CLASSIC_PANEL}","touchend",function(sym,e){sym.$("CLASSIC_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CLASSIC_PANEL_back}","touchend",function(sym,e){sym.$("CLASSIC_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HERITAGE_PANEL}","touchend",function(sym,e){sym.$("HERITAGE_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HERITAGE_PANEL_back}","touchend",function(sym,e){sym.$("HERITAGE_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ROGUE_PANEL}","touchend",function(sym,e){sym.$("ROGUE_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ROGUE_PANEL_back}","touchend",function(sym,e){sym.$("ROGUE_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle7}","touchend",function(sym,e){sym.deleteSymbol();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CLASSIC_PANEL_back}","click",function(sym,e){sym.$("CLASSIC_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HERITAGE_PANEL_back}","click",function(sym,e){sym.$("HERITAGE_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ROGUE_PANEL_back}","click",function(sym,e){sym.$("ROGUE_PANEL_back").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HERITAGE_PANEL}","click",function(sym,e){sym.$("HERITAGE_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CLASSIC_PANEL}","click",function(sym,e){sym.$("CLASSIC_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ROGUE_PANEL}","click",function(sym,e){sym.$("ROGUE_PANEL_back").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle7}","click",function(sym,e){sym.deleteSymbol();});
//Edge binding end
})("shirtGuide");
//Edge symbol end:'shirtGuide'

//=========================================================

//=========================================================

//Edge symbol: 'poloGuide'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_chino_home_straightButton}","touchend",function(sym,e){sym.createChildSymbol("chinoGuide_straight",'Stage');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_home_slimButton}","touchend",function(sym,e){var slim=sym.createChildSymbol("chinoGuide_slim","Stage");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle5}","touchend",function(sym,e){sym.deleteSymbol();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_home_straightButton}","click",function(sym,e){sym.createChildSymbol("chinoGuide_straight",'Stage');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_home_slimButton}","click",function(sym,e){var slim=sym.createChildSymbol("chinoGuide_slim","Stage");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle5}","click",function(sym,e){sym.deleteSymbol();});
//Edge binding end
})("chinoGuide");
//Edge symbol end:'chinoGuide'

//=========================================================

//=========================================================

//Edge symbol: 'poloGuide'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe1}","swipeleft",function(sym,e){sym.$("chino_straight_swipe1").hide();sym.$("chino_straight_swipe2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe2}","swipeleft",function(sym,e){sym.$("chino_straight_swipe2").hide();sym.$("chino_straight_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe2}","swiperight",function(sym,e){sym.$("chino_straight_swipe2").hide();sym.$("chino_straight_swipe1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe1}","swiperight",function(sym,e){sym.$("chino_straight_swipe1").hide();sym.$("chino_straight_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe3}","swipeleft",function(sym,e){sym.$("chino_straight_swipe3").hide();sym.$("chino_straight_swipe1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe3}","swiperight",function(sym,e){sym.$("chino_straight_swipe3").hide();sym.$("chino_straight_swipe2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail1}","touchend",function(sym,e){sym.$("chino_straight_swipe2").hide();sym.$("chino_straight_swipe3").hide();sym.$("chino_straight_swipe1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail2}","touchend",function(sym,e){sym.$("chino_straight_swipe1").hide();sym.$("chino_straight_swipe3").hide();sym.$("chino_straight_swipe2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail3}","touchend",function(sym,e){sym.$("chino_straight_swipe1").hide();sym.$("chino_straight_swipe2").hide();sym.$("chino_straight_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_backHotspot}","touchend",function(sym,e){var parent=sym.getParentSymbol();parent.deleteSymbol();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_text}","touchend",function(sym,e){var mySymbolObject=sym.createChildSymbol("chinoGuide_slim","Stage");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_text}","click",function(sym,e){var mySymbolObject=sym.createChildSymbol("chinoGuide_slim","Stage");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_backHotspot}","click",function(sym,e){var parent=sym.getParentSymbol();parent.deleteSymbol();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail3}","click",function(sym,e){sym.$("chino_straight_swipe1").hide();sym.$("chino_straight_swipe2").hide();sym.$("chino_straight_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail2}","click",function(sym,e){sym.$("chino_straight_swipe1").hide();sym.$("chino_straight_swipe3").hide();sym.$("chino_straight_swipe2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail1}","click",function(sym,e){sym.$("chino_straight_swipe2").hide();sym.$("chino_straight_swipe3").hide();sym.$("chino_straight_swipe1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe1}","mousedown",function(sym,e){sym.$("chino_straight_swipe1").hide();sym.$("chino_straight_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe2}","mousedown",function(sym,e){sym.$("chino_straight_swipe2").hide();sym.$("chino_straight_swipe1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe3}","mousedown",function(sym,e){sym.$("chino_straight_swipe3").hide();sym.$("chino_straight_swipe2").show();});
//Edge binding end
})("chinoGuide_straight");
//Edge symbol end:'chinoGuide_straight'

//=========================================================

//=========================================================

//=========================================================

//Edge symbol: 'poloGuide'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe1}","swipeleft",function(sym,e){sym.$("chino_straight_swipe1").hide();sym.$("chino_straight_swipe2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe1}","swiperight",function(sym,e){sym.$("chino_straight_swipe1").hide();sym.$("chino_straight_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail1}","touchend",function(sym,e){sym.$("chino_slim_swipe2").hide();sym.$("chino_slim_swipe3").hide();sym.$("chino_slim_swipe1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail2}","touchend",function(sym,e){sym.$("chino_slim_swipe1").hide();sym.$("chino_slim_swipe3").hide();sym.$("chino_slim_swipe2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail3}","touchend",function(sym,e){sym.$("chino_slim_swipe1").hide();sym.$("chino_slim_swipe2").hide();sym.$("chino_slim_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_swipe1}","swipeleft",function(sym,e){sym.$("chino_slim_swipe1").hide();sym.$("chino_slim_swipe2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_swipe1}","swiperight",function(sym,e){sym.$("chino_slim_swipe1").hide();sym.$("chino_slim_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_swipe2}","swipeleft",function(sym,e){sym.$("chino_slim_swipe2").hide();sym.$("chino_slim_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_swipe2}","swiperight",function(sym,e){sym.$("chino_slim_swipe2").hide();sym.$("chino_slim_swipe1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_swipe3}","swipeleft",function(sym,e){sym.$("chino_slim_swipe3").hide();sym.$("chino_slim_swipe1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_swipe3}","swiperight",function(sym,e){sym.$("chino_slim_swipe3").hide();sym.$("chino_slim_swipe2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_text}","touchend",function(sym,e){var mySymbolObject=sym.createChildSymbol("chinoGuide_straight","Stage");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_backHotspot}","touchend",function(sym,e){var parent=sym.getParentSymbol();parent.deleteSymbol();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_backHotspot}","click",function(sym,e){var parent=sym.getParentSymbol();parent.deleteSymbol();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_text}","click",function(sym,e){var mySymbolObject=sym.createChildSymbol("chinoGuide_straight","Stage");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail3}","click",function(sym,e){sym.$("chino_slim_swipe1").hide();sym.$("chino_slim_swipe2").hide();sym.$("chino_slim_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail2}","click",function(sym,e){sym.$("chino_slim_swipe1").hide();sym.$("chino_slim_swipe3").hide();sym.$("chino_slim_swipe2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_thumbnail1}","click",function(sym,e){sym.$("chino_slim_swipe2").hide();sym.$("chino_slim_swipe3").hide();sym.$("chino_slim_swipe1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_straight_swipe1}","mousemove",function(sym,e){sym.$("chino_straight_swipe1").hide();sym.$("chino_straight_swipe3").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_swipe3}","mousedown",function(sym,e){sym.$("chino_slim_swipe3").hide();sym.$("chino_slim_swipe2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_swipe2}","mousedown",function(sym,e){sym.$("chino_slim_swipe2").hide();sym.$("chino_slim_swipe1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chino_slim_swipe1}","mousedown",function(sym,e){sym.$("chino_slim_swipe1").hide();sym.$("chino_slim_swipe3").show();});
//Edge binding end
})("chinoGuide_slim");
//Edge symbol end:'chinoGuide_slim'

//=========================================================

//Edge symbol: 'hand1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
})("hand1");
//Edge symbol end:'hand1'
})(jQuery,AdobeEdge,"opg");