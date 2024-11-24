(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"minHeight":20,"definitions": [{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_540F8A1D_5E97_CF07_41D2_99C16D1B1B3B","id":"panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29_camera"},{"hfov":360,"vfov":180,"hfovMin":"150%","thumbnailUrl":"media/panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB_t.jpg","partial":false,"frames":[{"cube":{"class":"ImageResource","levels":[{"width":9216,"rowCount":3,"url":"media/panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB_t.jpg"}],"overlays":["this.overlay_5312C00B_5E99_DB0C_41C8_E8B98B275780"],"label":trans('panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB.label'),"id":"panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB","hfovMax":130,"data":{"label":"03"},"pitch":0,"adjacentPanoramas":[{"distance":4.69,"yaw":-103.67,"select":"this.overlay_5312C00B_5E99_DB0C_41C8_E8B98B275780.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29","data":{"overlayID":"overlay_5312C00B_5E99_DB0C_41C8_E8B98B275780"},"class":"AdjacentPanorama","backwardYaw":27.12}],"class":"Panorama"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_54022A1D_5E97_CF07_41CB_56497D14D6B6","id":"panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8_camera"},{"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","borderRadius":0,"playbackBarBackgroundColor":["#FFFFFF"],"minWidth":100,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadOpacity":1,"playbackBarBorderSize":0,"toolTipBorderRadius":3,"subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"id":"MainViewer","playbackBarHeight":10,"toolTipShadowSpread":0,"playbackBarProgressBorderColor":"#000000","toolTipShadowOpacity":1,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","playbackBarHeadShadowHorizontalLength":0,"subtitlesVerticalAlign":"bottom","progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","toolTipBackgroundColor":"#F6F6F6","subtitlesFontColor":"#FFFFFF","toolTipShadowVerticalLength":0,"toolTipFontSize":"1.11vmin","toolTipTextShadowColor":"#000000","progressOpacity":1,"progressRight":0,"toolTipBorderColor":"#767676","playbackBarHeadShadowVerticalLength":0,"toolTipHorizontalAlign":"center","progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"height":"100%","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesPaddingLeft":5,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#000000","progressBackgroundOpacity":1,"subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"class":"ViewerArea","toolTipFontWeight":"normal","progressBarBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadHeight":15,"borderSize":0,"playbackBarHeadBorderRadius":0,"progressBottom":0,"subtitlesBorderColor":"#FFFFFF","progressBarOpacity":1,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"progressHeight":10,"subtitlesBorderSize":0,"toolTipPaddingRight":6,"progressBorderSize":0,"playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial","shadow":false,"subtitlesOpacity":1,"subtitlesTextDecoration":"none","toolTipShadowHorizontalLength":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":0,"transitionDuration":500,"progressBorderRadius":0,"subtitlesFontWeight":"normal","vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"paddingLeft":0,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarProgressOpacity":1,"surfaceReticleColor":"#FFFFFF","paddingRight":0,"surfaceReticleOpacity":0.6,"toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":1,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"playbackBarRight":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"minHeight":50,"data":{"name":"Main Viewer"}},{"displayPlaybackBar":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"class":"PlayList","items":[{"camera":"this.panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8_camera","media":"this.panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29_camera","media":"this.panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB_camera","media":"this.panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"hfov":360,"vfov":180,"hfovMin":"150%","thumbnailUrl":"media/panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8_t.jpg","partial":false,"frames":[{"cube":{"class":"ImageResource","levels":[{"width":9216,"rowCount":3,"url":"media/panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8_t.jpg"}],"overlays":["this.overlay_51FD8FCC_5E9B_4505_41C7_D0211D86E76E"],"label":trans('panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8.label'),"id":"panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8","hfovMax":130,"data":{"label":"01"},"pitch":0,"adjacentPanoramas":[{"distance":9.11,"yaw":3.2,"select":"this.overlay_51FD8FCC_5E9B_4505_41C7_D0211D86E76E.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29","data":{"overlayID":"overlay_51FD8FCC_5E9B_4505_41C7_D0211D86E76E"},"class":"AdjacentPanorama","backwardYaw":-148.85}],"class":"Panorama"},{"hfov":360,"vfov":180,"hfovMin":"150%","thumbnailUrl":"media/panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29_t.jpg","partial":false,"frames":[{"cube":{"class":"ImageResource","levels":[{"width":9216,"rowCount":3,"url":"media/panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29_t.jpg"}],"overlays":["this.overlay_5184C663_5E99_4703_41BB_7CC2EC69EB12","this.overlay_5150BF75_5E9B_C507_41D0_9D8A532EAD1B"],"label":trans('panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29.label'),"id":"panorama_541722F4_5E97_3F05_41BC_0166C9AFDF29","hfovMax":130,"data":{"label":"02"},"pitch":0,"adjacentPanoramas":[{"distance":3.47,"yaw":27.12,"select":"this.overlay_5184C663_5E99_4703_41BB_7CC2EC69EB12.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB","data":{"overlayID":"overlay_5184C663_5E99_4703_41BB_7CC2EC69EB12"},"class":"AdjacentPanorama","backwardYaw":-103.67},{"distance":24.59,"yaw":-148.85,"select":"this.overlay_5150BF75_5E9B_C507_41D0_9D8A532EAD1B.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_554E7EB6_5E97_4705_41D5_6C584A9481A8","data":{"overlayID":"overlay_5150BF75_5E9B_C507_41D0_9D8A532EAD1B"},"class":"AdjacentPanorama","backwardYaw":3.2}],"class":"Panorama"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_540FAA1D_5E97_CF07_41C9_E49AE235650B","id":"panorama_54EA668B_5E97_C703_41C0_9DC69BEF62DB_camera"},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_540F8A1D_5E97_CF07_41D2_99C16D1B1B3B"},{"areas":["this.HotspotPanoramaOverlayArea_5370D040_5E99_DB7D_4174_49F5CC2FC428"],"maps":[],"data":{"hasPanoramaAction":true,"label":"Image"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":-103.67,"hfov":8.38,"vfov":3.99,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","data":{"label":"Image"},"roll":-4.01,"verticalAlign":"middle","image":"this.AnimatedImageResource_4EA66B03_5E99_4D03_41D7_5AC67EEFBEB4","pitch":-19.91,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_5312C00B_5E99_DB0C_41C8_E8B98B275780"},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_54022A1D_5E97_CF07_41CB_56497D14D6B6"},{"areas":["this.HotspotPanoramaOverlayArea_51F1EFCE_5E9B_4505_41D6_BF0D6CFE2F72"],"maps":[],"data":{"hasPanoramaAction":true,"label":"Image"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":3.2,"hfov":3.27,"vfov":2.98,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","data":{"label":"Image"},"verticalAlign":"middle","image":"this.AnimatedImageResource_4EA5DB03_5E99_4D03_41D2_7FD1298EA9AE","pitch":-10.57,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_51FD8FCC_5E9B_4505_41C7_D0211D86E76E"},{"areas":["this.HotspotPanoramaOverlayArea_51877663_5E99_4703_41AB_A99B73A9CF7D"],"maps":[],"data":{"hasPanoramaAction":true,"label":"Image"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":27.12,"hfov":5.04,"vfov":4.64,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","data":{"label":"Image"},"roll":-88.46,"verticalAlign":"middle","image":"this.AnimatedImageResource_4EA60B03_5E99_4D03_41B6_D5A7E9DD2834","pitch":-26.06,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_5184C663_5E99_4703_41BB_7CC2EC69EB12"},{"areas":["this.HotspotPanoramaOverlayArea_51526F84_5E9B_C505_41C3_F6AFEE045BCE"],"maps":[],"data":{"hasPanoramaAction":true,"label":"Image"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"yaw":-148.85,"hfov":3.78,"vfov":2.78,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","data":{"label":"Image"},"verticalAlign":"middle","image":"this.AnimatedImageResource_4EA63B03_5E99_4D03_41D4_72CAF9E3AE8F","pitch":-3.94,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_5150BF75_5E9B_C507_41D0_9D8A532EAD1B"},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_540FAA1D_5E97_CF07_41C9_E49AE235650B"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_5370D040_5E99_DB7D_4174_49F5CC2FC428"},{"rowCount":3,"frameDuration":41,"frameCount":9,"class":"AnimatedImageResource","colCount":3,"levels":[{"height":219,"width":219,"class":"ImageResourceLevel","url":"media/res_51050394_5E99_FD05_41C5_3AC70C57061E_0.png"}],"id":"AnimatedImageResource_4EA66B03_5E99_4D03_41D7_5AC67EEFBEB4"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_51F1EFCE_5E9B_4505_41D6_BF0D6CFE2F72"},{"rowCount":3,"frameDuration":41,"frameCount":9,"class":"AnimatedImageResource","colCount":3,"levels":[{"height":219,"width":219,"class":"ImageResourceLevel","url":"media/res_51050394_5E99_FD05_41C5_3AC70C57061E_0.png"}],"id":"AnimatedImageResource_4EA5DB03_5E99_4D03_41D2_7FD1298EA9AE"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_51877663_5E99_4703_41AB_A99B73A9CF7D"},{"rowCount":3,"frameDuration":41,"frameCount":9,"class":"AnimatedImageResource","colCount":3,"levels":[{"height":219,"width":219,"class":"ImageResourceLevel","url":"media/res_51050394_5E99_FD05_41C5_3AC70C57061E_0.png"}],"id":"AnimatedImageResource_4EA60B03_5E99_4D03_41B6_D5A7E9DD2834"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_51526F84_5E9B_C505_41C3_F6AFEE045BCE"},{"rowCount":3,"frameDuration":41,"frameCount":9,"class":"AnimatedImageResource","colCount":3,"levels":[{"height":219,"width":219,"class":"ImageResourceLevel","url":"media/res_51050394_5E99_FD05_41C5_3AC70C57061E_0.png"}],"id":"AnimatedImageResource_4EA63B03_5E99_4D03_41D4_72CAF9E3AE8F"}],"borderRadius":0,"backgroundColorDirection":"vertical","gap":10,"minWidth":20,"shadow":false,"width":"100%","mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"id":"rootPlayer","backgroundOpacity":1,"scrollBarMargin":2,"defaultVRPointer":"laser","paddingBottom":0,"mouseWheelEnabled":true,"scripts":{"historyGoForward":TDV.Tour.Script.historyGoForward,"translate":TDV.Tour.Script.translate,"resumePlayers":TDV.Tour.Script.resumePlayers,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"shareSocial":TDV.Tour.Script.shareSocial,"getKey":TDV.Tour.Script.getKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"clone":TDV.Tour.Script.clone,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"openLink":TDV.Tour.Script.openLink,"init":TDV.Tour.Script.init,"showWindow":TDV.Tour.Script.showWindow,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setValue":TDV.Tour.Script.setValue,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizFinish":TDV.Tour.Script.quizFinish,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"existsKey":TDV.Tour.Script.existsKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"registerKey":TDV.Tour.Script.registerKey,"mixObject":TDV.Tour.Script.mixObject,"historyGoBack":TDV.Tour.Script.historyGoBack,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"initAnalytics":TDV.Tour.Script.initAnalytics,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPixels":TDV.Tour.Script.getPixels,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMapLocation":TDV.Tour.Script.setMapLocation,"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupImage":TDV.Tour.Script.showPopupImage,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"getOverlays":TDV.Tour.Script.getOverlays,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot},"children":["this.MainViewer"],"paddingLeft":0,"horizontalAlign":"left","desktopMipmappingEnabled":false,"contentOpaque":false,"scrollBarOpacity":0.5,"paddingRight":0,"toolTipHorizontalAlign":"center","height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"vrPolyfillScale":1,"scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","layout":"absolute","class":"Player","backgroundPreloadEnabled":true,"start":"this.init()","borderSize":0,"data":{"defaultLocale":"en","name":"Player610","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1}},"backgroundColorRatios":[0],"downloadEnabled":false};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Sun Nov 24 2024