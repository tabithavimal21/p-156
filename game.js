AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin1" },      
    },
    
    update: function() {
      this.isCollided(this.data.elementId);
      const element=document.querySelector("#count")
      var target=element.getAttribute("text").value()
      let currentTargets=parseInt(target)
      currentTargets-=1
      element.setAttribute("text",{
        value:currentTargets
      })
    },
  
    updateScore: function () {
      const element=document.querySelector("#score")
      var count = element.getAttribute("text").value()
      let currentScore=parseInt(count)
      currentScore+=50
      element.setAttribute("text",{
        value:currentScore
      })
    },
  
    gameOver: function (){
      const plane=document.querySelector("#plane_model")
      const element=document.querySelector("#gameOver")
      element.setAttribute("visible",true)
      plane.setAttribute("dynamic-body",{
        mass:1
      })
    },
  
    startTimer: function (duration, timerEl) {
      var minutes;
      var seconds;
  
      var timer = setInterval(countDown, 1000);
  
      function countDown() {
        if (duration >= 0) {
          minutes = parseInt(duration / 60);
          seconds = parseInt(duration % 60);
  
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
  
          timerEl.setAttribute("text", {
            value: minutes + ":" + seconds,
          });
  
          duration -= 1;
        } 
        else {
          this.gameOver()      
        }
      }
    },

    isCollided: function(elementId) {
      const element = document.querySelector(elementId);
      element.addEventListener("collide", e => {
        if (elementId.includes("#coin")) {          
          console.log("coin collision");
          
        }
        else if(elementId.includes("#fish")){
          console.log("fish collision");
        }         
      });
    }
    
  });
  