

//fireshell is a trademark of ncloud inc.
//https://www.youtube.com/@nekshav







               
                const settingm = document.querySelector('.setting-opt');
                const settingbtn = document.querySelector('.setting');
                const mediap = document.querySelector('.media-progress');
                const media = document.querySelector('video');
                const video = document.querySelector('.mainbtn');
                const mainplay = document.querySelector('.fireshell-player');
                const fireshelltop = document.querySelector('.fireshell-top');
                const fullscreen = document.querySelector('.fullscr');
                const durt = document.querySelector('.dur-text');
                const vol = document.querySelector('.vol');
                const forward = document.querySelector('.forward');
                const backward = document.querySelector('.backward');
                
                
                
                const vold = document.querySelector('.vol-d');
                const float = document.querySelector('.float-plays');
                
                const show = document.querySelector('.show-more');
                const panel = document.querySelector('.panel');
                const pbs = document.querySelector('.pbs');
                const anno = document.querySelector('.wtmks');
                const panelopt  =  document.querySelector('.panel-object');
                const wtmksopt  =  document.querySelector('.wtmks-o');
                const wtmks  =  document.querySelector('.wtmks');
                const loadwheel = document.querySelector('.fireshell-load');
                const extplay = document.querySelector('.onscr-play');
                const sreset = document.querySelector('.reset-o');
                const filterm  = document.querySelector('.filters'); 
                const allfilter = document.querySelector('.filter-video');
                const pip = document.querySelector('.pip');
                const vtitle = document.querySelector('.media-title');
                const volval = document.querySelector('.sound-lvl');
                vol.addEventListener('mousedown', function(){
                    if(media.volume){
                        avaIcon.style.opacity= '50%';
                        media.volume= 0;
                        vol.style.fill = 'rgb(24,24,24)';
                       
                        
                        
                    }
                    else{
                        avaIcon.style.opacity =''
                        vol.style.fill = 'rgb(240,240,240)';
                        media.volume = 1;
                        
                        
                        
                    }
                  
                    
                })   
                
               
                media.playbackRate = 1;
                pbs.innerHTML= '1x';
               
                document.querySelector('.fireshell-player').addEventListener("mouseover", function(){
                    document.querySelector('.fireshell-top').style.visibility = 'visible';
                    document.querySelector('.dur-text').style.visibility = 'visible';
                    document.querySelector('.dur-text').style.animation = 'none';
                    document.querySelector('.dur-text').style.textAlign = 'center';
                    
                    

                    
                    
                    
                    
                 
                    
                    
                })
               
                
                function discur(){
                    mainplay.style.cursor = 'none';
                }

             function loading(){
                    loadwheel.style.visibility = 'visible';
                    media.style.height = '30rem';
                    video.style.cursor  ='not-allowed';
                    
                    
             }
                media.addEventListener('canplay', function(){
                    loadwheel.style.visibility = 'hidden';
                    vtitle.style.visibility = 'visible';
                    
                    media.style.height = '';
                    
                    video.style.cursor  ='';
                   media.play();
                  
                })
               
                   
               
                if(media.paused){
                    
                        mainplay.style.cursor = 'default';
                  
                }
                    mainplay.addEventListener('mouseover',function(){
                        setTimeout(discur,1000);
                    })
                    mainplay.addEventListener('mousemove', function(){
                        mainplay.style.cursor = '';
                    })
            
               
               
                    document.querySelector('.fireshell-player').addEventListener('mouseout', function(){
                    document.querySelector('.fireshell-top').style.visibility = 'hidden';
                    
                    document.querySelector('.dur-text').style.visibility = 'visible';
                    document.querySelector('.dur-text').style.animation = 'dur-tect 1s 1';
                    
                    
                    float.style.visibility = 'hidden';
                   
                   

                })
               
                                
                media.addEventListener('DOMContentLoaded', function(){
                    durt.innerHTML = Math.trunc( media.duration)+ '/' + Math.trunc (media.currentTime);
                    
                })
                
            
               media.addEventListener('click', function(){
                playm()
               })

               sreset.addEventListener('click', function(){
                media.playbackRate = 1;
            })
                media.addEventListener('ended', function(){
                        video.style.transform = 'scale(.6)';
                        video.style.stroke = 'rgb(240,240,240)';
                        video.style.fill = 'rgb(24,24,24)';
                        media.pause();
                        document.querySelector('.fireshell-player').style.boxShadow = 'inset 0 0 100vh rgba(0, 0, 0, 0.829)';
                        mediap.value = 0;
                })
                panelopt.addEventListener('mousedown', function(){
                   panelopt.style.transform = 'scale(.94)'
                   })   
                   panelopt.addEventListener('mouseup', function(){
                    panelopt.style.transform = 'scale(1)';
                  media.pause();
                        media.playbackRate += .25;
                        pbs.innerHTML=+media.playbackRate+ 'x';
                
                     if(media.playbackRate > 2){
                        media.playbackRate = 1;
                        pbs.innerHTML= ' 1x';
                     }
                     if(media.playbackRate == 1){
                        
                        pbs.innerHTML= ' 1x';
                     }
                    }) 
                    let visi = 1;
                    wtmksopt.addEventListener('mousedown', function(){
                        wtmksopt.style.transform = 'scale(.94)'
                        })   
                        wtmksopt.addEventListener('mouseup', function(){
                         wtmksopt.style.transform = 'scale(1)';
                         document.querySelector('.top-q').style.opacity = '0';
                         visi = 0;
                         wtmks.innerHTML = 'Off';
                         if(visi == 1){
                            document.querySelector('.top-q').style.opacity = '100%';
                            wtmks.innerHTML = 'On';
                         }
                     
                        
                         }) 
                         sreset.addEventListener('mousedown', function(){
                            sreset.style.transform = 'scale(.94)'
                            })   
                           sreset.addEventListener('mouseup', function(){
                             sreset.style.transform = 'scale(1)';
                             

                             
                             
                         
                            
                             }) 
                             media.onwaiting = (event) =>{
                                media.pause();
                              loadwheel.style.visibility = 'visible';  
                             }
                            let fullscreenis;
                fullscreen.addEventListener('click',function(){
                    fullscreenis = 1;
               
                  if(fullscreenis == 1){
                document.querySelector('.fullcls').outerHTML =' <path class= "fullcls" fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"/>'
                  }else if(fullscreenis == 0){
                    document.querySelector('.fullcls').outerHTML ='<path class="fullcls" fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>' ;
                  }
                fullscreen.style.transform = 'rotate(180deg)';
                
                mainplay.requestFullscreen();
                media.style.maxHeight= '90vh';
                media.style.width='99%';
                document.querySelector('.fireshell-bottom-cen').style.maxWidth = '100%';
                
                })    
               settingbtn.addEventListener('click', function(){
                filterm.style.visibility = 'visible';
                filterm.style.animation = 'playbtnhover 500ms 1';
                document.querySelector('.filter-video').style.visibility = 'visible';
                
                
               })
              
               if (
                navigator.userAgent.match(/Android/i) ||
                navigator.userAgent.match(/iPhone/i)
              ) {
                window.close();
                window.open('https://fireshell-m.netlify.app');
              }
            
                show.addEventListener('mousedown', function(){
                    show.style.backgroundColor = 'rgb(240,240,240,.775)';
                    panel.style.animation = 'fromtop-anim 1s 1';
                    
                    panel.style.visibility = 'visible';
                    document.querySelector('.more-kit-p').style.visibility = 'hidden';
                    document.querySelector('.more-kit').style.visibility = 'hidden';
                    float.style.paddingLeft = '1rem';
                    float.style.paddingRight = '1rem';
                    float.style.visibility = 'visible';
                    show.style.visibility = 'hidden';
                    float.style.backgroundColor = 'rgb(240,240,240)';
                    extplay.style.visibility = 'hidden';
                   
                })
                show.addEventListener('mouseup', function(){
                    show.style.backgroundColor = '';
                    show.style.fill ='';
                    
                })
                
                document.querySelector('.close-o').addEventListener('mousedown', function(){
                    show.style.visibility = '';
                
                    
                    
                    panel.style.visibility = 'hidden';
                    document.querySelector('.more-kit-p').style.visibility = '';
                    document.querySelector('.more-kit').style.visibility =   '';
                    panel.style.transition = 'none';
                    float.style.visibility = 'visible';
                    float.style.backgroundColor = '';
                    panelopt.style.transition = 'none';
                    wtmksopt.style.transition = 'none';
                    document.querySelector('.reset-o').style.transition ='none';
                    document.querySelector('.close-o').style.transition = 'none';
                    show.style.backgroundColor = 'rgb(24,24,24)';
                    show.style.fill ='';
                })
                document.querySelector('.close-o').addEventListener('mouseup', function(){
                    
                })
                document.querySelector('.vol-d').addEventListener('click', function(){
                    extv.style.visibility = 'hidden';
                    extv.style.maxWidth = '0';
                    extv.style.position = 'fixed';
                    vol.style.position = 'relative';
                    vol.style.visibility = 'visible';
                    vol.style.transition = '300ms'
                    extv.style.visibility = 'visible';
                    extv.style.maxWidth= '3.5rem';
                    extv.style.position = 'fixed';
                    extv.style.marginBottom  ='4rem';
                    
                })
                
                forward.addEventListener('mousedown',function(){
                    media.currentTime = media.currentTime + 30;
                    video.style.transform = 'scale(.6)';
                        video.style.stroke = 'rgb(240,240,240)';
                        video.style.fill = 'rgb(24,24,24)';
                        media.pause();
                      
                            forward.style.fill = 'rgb(2,97,217)';
                            
                        
                        document.querySelector('.fireshell-player').style.boxShadow = 'inset 0 0 100vh rgba(0, 0, 0, 0.829)';
                }) 
                function forwardgo(){
                    media.currentTime = media.currentTime + 30;
                    video.style.transform = 'scale(.6)';
                        video.style.stroke = 'rgb(240,240,240)';
                        video.style.fill = 'rgb(24,24,24)';
                        media.pause();
                      
                            
                            forward.style.fill = 'rgb(228, 228, 228)';
                        
                        document.querySelector('.fireshell-player').style.boxShadow = 'inset 0 0 100vh rgba(0, 0, 0, 0.829)';
                } 
                function forwardgoup(){
                    forward.style.fill = 'rgb(2,97,217)';
                }
                function backwardgo(){
                    media.currentTime = media.currentTime - 10;
                    video.style.transform = 'scale(.6)';
                        video.style.stroke = 'rgb(240,240,240)';
                        video.style.fill = 'rgb(24,24,24)';
                        media.pause();
                      
                           
                        backward.style.fill = 'rgb(228, 228, 228)';
                        
                        document.querySelector('.fireshell-player').style.boxShadow = 'inset 0 0 100vh rgba(0, 0, 0, 0.829)';
                 
                }
                function backwardgoup(){
                   
                    backward.style.fill = 'rgb(2,97,217)';
                }
                forward.addEventListener('mouseup', function(){
                    forward.style.fill = 'rgb(228, 228, 228)';
                })
                backward.addEventListener('mousedown',function(){
                    media.currentTime = media.currentTime - 10;
                    video.style.transform = 'scale(.6)';
                        video.style.stroke = 'rgb(240,240,240)';
                        video.style.fill = 'rgb(24,24,24)';
                        media.pause();
                      
                           backward.style.fill = 'rgb(2,97,217)';
                       
                        
                        document.querySelector('.fireshell-player').style.boxShadow = 'inset 0 0 100vh rgba(0, 0, 0, 0.829)';
                })  
               
                backward.addEventListener('mouseup', function(){
                    backward.style.fill = 'rgb(228, 228, 228)';
                })
                const cineMode = document.querySelector('.cinev');
                const dramMode = document.querySelector('.dramv');
                const underMode = document.querySelector('.underv');
                cineMode.addEventListener('click', function(){
                    filterm.style.visibility = 'hidden';
                    allfilter.style.visibility = 'visible';
                    allfilter.style.backgroundImage = ' linear-gradient(65deg,rgba(190, 94, 4, 0.158),rgba(180, 143, 21, 0.144))';
                    allfilter.style.animation = 'playbtnhover 500ms 1';
                    allfilter.style.backdropFilter = ' saturate(200%)';
                })
                underMode.addEventListener('click', function(){
                    filterm.style.visibility = 'hidden';
                    allfilter.style.visibility = 'visible';
                    allfilter.style.backgroundImage = ' linear-gradient(65deg,rgba(4, 117, 161, 0.158),rgba(5, 134, 167, 0.144))';
                    allfilter.style.animation = 'playbtnhover 500ms 1';
                    allfilter.style.backdropFilter = ' saturate(200%)';
                })
                dramMode.addEventListener('click', function(){
                    filterm.style.visibility = 'hidden';
                    allfilter.style.visibility = 'visible';
                    allfilter.style.backgroundImage = 'linear-gradient(65deg,rgba(7, 158, 70, 0.320)50%,rgba(68, 6, 6, 0.308))';
                    allfilter.style.animation = 'playbtnhover 500ms 1';
                    allfilter.style.backdropFilter = ' saturate(200%)';
                })
                pip.addEventListener('click', function(){
                    media.requestPictureInPicture();
                    media.pause();
                })
                media.addEventListener('dblclick', function(){
                    media.currentTime = media.currentTime + 30;
                    video.style.transform = 'scale(.6)';
                        video.style.stroke = 'rgb(240,240,240)';
                        video.style.fill = 'rgb(24,24,24)';
                        media.pause();
                      
                            forward.style.animation = 'time-anim 500ms 1';
                       
                            document.querySelector('.fireshell-player').style.animation = 'fireshell-for 1s 1';
                        document.querySelector('.fireshell-player').style.boxShadow = 'inset 0 0 100vh rgba(0, 0, 0, 0.829)';
                 })
                        
                 media.addEventListener('focusin', function(){
                    media.currentTime = media.currentTime - 10;
                    video.style.transform = 'scale(.6)';
                        video.style.stroke = 'rgb(240,240,240)';
                        video.style.fill = 'rgb(24,24,24)';
                        media.pause();
                      
                           backward.style.animation = 'time-anim 500ms 1';
                       
                        
                        document.querySelector('.fireshell-player').style.boxShadow = 'inset 0 0 100vh rgba(0, 0, 0, 0.829)';
                 })
                mediap.addEventListener('mousedown', function(event) {
                        
                        video.style.transform = 'scale(.6)';
                        video.style.stroke = 'rgb(240,240,240)';
                        video.style.fill = 'rgb(24,24,24)';
                        media.pause();
                        document.querySelector('.fireshell-player').style.boxShadow = 'inset 0 0 100vh rgba(0, 0, 0, 0.829)';
                }); 
              
                media.addEventListener('ended', function(){
                media.currentTime = 0;
                
                media.play();
                    video.style.transform = 'scale(.7)';
                    video.style.stroke = 'rgb(24,24,24)';
                    video.style.fill = 'rgb(240,240,240)';
                    document.querySelector('.fireshell-player').style.boxShadow = 'none';
                })
               
                media.addEventListener('volumechange', function(){
                    document.querySelector('.fireshell-top').style.visibility = 'visible';
                })
                media.addEventListener('playing', function(){
                    document.title = 'Fireshell • Playing';
                    media.play();
                    
                    extplay.style.animation = 'extplay-o 500ms 1';
                    extplay.style.visibility = 'hidden'
                    avaIcon.style.visibility = 'visible';
                    video.style.transform = 'scale(.7)';
                    video.style.stroke = 'rgb(24,24,24)';
                    video.style.fill = 'rgb(240,240,240)';
                    document.querySelector('.fireshell-player').style.boxShadow = 'none';
              

                })
                media.addEventListener('pause', function(){
                    extplay.style.visibility = 'visible';
                    extplay.style.animation = 'extplay-c 200ms 1';
                    document.title = 'Fireshell';
                    avaIcon.style.visibility = 'hidden';
                    video.style.transform = 'scale(.6)';
                    video.style.stroke = 'rgb(240,240,240)';
                    video.style.fill = 'rgb(24,24,24)';
                    media.pause();
                  
                    document.querySelector('.fireshell-player').style.boxShadow = 'inset 0 0 100vh rgba(0, 0, 0, 0.829)';
                })
              
                function javascriptvoid1(){
                    document.querySelector('.setting-pop').style.visibility = 'hidden';
                   
                }
                
                 media.addEventListener('timeupdate', function(){
                    mediap.value =100 /   media.duration * media.currentTime ;
                    
                    
                   
                    durt.innerHTML = Math.trunc(Math.round( media.duration )/60)+ '/ ' + Math.trunc( Math.round(media.currentTime));
                    localStorage.setItem('lastdur', media.currentTime);

                    
                    
                 })
                 mainplay.addEventListener('fullscreenchange', function(){
                    media.style.maxHeight = '26rem';
                    fullscreen.style.transform = '';
                    fullscreenis = 0;
                    
                 })
                
                
               
                  
                function playm(){
                    if(media.paused){
                        media.play();
                        video.style.transform = 'scale(.7)';
                        video.style.stroke = 'rgb(24,24,24)';
                        video.style.fill = 'rgb(240,240,240)';
                        document.querySelector('.fireshell-player').style.boxShadow = 'none';
                        
                        
                    }
                    else{
                        video.style.transform = 'scale(.6)';
                        video.style.stroke = 'rgb(240,240,240)';
                        video.style.fill = 'rgb(24,24,24)';
                        media.pause();
                        document.querySelector('.fireshell-player').style.boxShadow = 'inset 0 0 100vh rgba(0, 0, 0, 0.829)';
                    }
                
                    
                }
                media.addEventListener('enterpictureinpicture', function(){
                    document.querySelector('body').requestFullscreen()
                })
                video.addEventListener('mouseout', function(){
                    video.style.transform = 'scale(.6)';
                })
             
                
            //referances
            //<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16"><path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/></svg>
            //<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-off-fill" viewBox="0 0 16 16"><path d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg>                