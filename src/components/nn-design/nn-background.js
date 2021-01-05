import React from 'react'
import { Link } from "gatsby"
import { TweenLite, Circ } from 'gsap'
import 'gsap/CSSPlugin'

import "./hero-header.css"

class Circle {
  // constructor
  constructor(ctx, pos, rad, color) {
    this.drawCtx = ctx
    this.pos = pos || null;
    this.radius = rad || null;
    this.color = color || null;
  }

  draw = function() {
      if (!this.active) return

      this.drawCtx.beginPath()
      this.drawCtx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false)
      this.drawCtx.fillStyle = 'rgba(31, 43, 49, ' + this.active + ')'
      this.drawCtx.fill()
  }
}

class NNBackground extends React.Component {
  
  componentDidMount() {
    (function() {
      
      const pointSize = 3
      const pointDensity = 20
      const kNeighbors = 6

      // https://codepen.io/MarcoGuglielmelli/pen/lLCxy
      let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
      let mouseControl = false
    
      // Main
      initHeader();
      initAnimation();
      addListeners();
    
      function initHeader() {
          //width = window.innerWidth
          //height = window.innerHeight

          // target = {
          //   x: width/2, 
          //   y: height/2
          // }
    
          largeHeader = document.getElementById('hero-header')
          //largeHeader.style.height = height+'px'

          width = largeHeader.offsetWidth
          height = largeHeader.offsetHeight

          target = {
            x: width * 0.5, 
            y: height * 0.5
          }
    
          canvas = document.getElementById('neural-network-background')
          canvas.width = width
          canvas.height = height
          ctx = canvas.getContext('2d')
    
          // create points
          points = []

          for (let x = 0; x < width; x = x + width / pointDensity) {
              for (let y = 0; y < height; y = y + height / pointDensity) {
                  let px = x + Math.random() * width / pointDensity,
                      py = y + Math.random() * height / pointDensity
                  
                  points.push({
                    x: px, 
                    originX: px, 
                    y: py, 
                    originY: py
                  })
              }
          }
    
          // for each point find the 5 closest points
          for (let i = 0; i < points.length; i++) {
              let closest = []
              let p1 = points[i]

              for (let j = 0; j < points.length; j++) {
                let p2 = points[j]
                
                if (p1 == p2) {
                    continue
                }

                var placed = false

                for (var k = 0; k < kNeighbors; k++) {
                  if (placed) continue

                  if (closest[k] == undefined) {
                    closest[k] = p2
                    placed = true
                  }
                }

                for (var k = 0; k < kNeighbors; k++) {
                  if (placed) continue

                  if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                    closest[k] = p2
                    placed = true
                  }
                }
              }

              p1.closest = closest
          }
    
          // assign a circle to each point
          for (var i in points) {
              points[i].circle = new Circle(ctx, points[i], pointSize + Math.random() * pointSize, 'rgba(255, 255, 255, 0.3)')
          }
      }
    
      // Event handling
      function addListeners() {
          if (!('ontouchstart' in window)) {
            canvas.addEventListener('mousemove', mouseMove);
            canvas.addEventListener('mouseout', mouseOut);
          }

          //window.addEventListener('scroll', scrollCheck);
          window.addEventListener('resize', resize);
      }
    
      function mouseOut(e) {
        mouseControl = false
      }

      function mouseMove(e) {
          let posx = 0, posy = 0

          mouseControl = true

          // if (e.pageX || e.pageY) {
          //   posx = e.pageX
          //   posy = e.pageY
          // } else if (e.clientX || e.clientY) {
          //posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
          //posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
          //}

          let rect = e.target.getBoundingClientRect()

          posx = e.clientX - rect.left; //x position within the element.
          posy = e.clientY - rect.top;  //y position within the element.
          
          target.x = posx
          target.y = posy
      }
    
      function scrollCheck() {
          if (document.body.scrollTop > height) animateHeader = false
          else animateHeader = true
      }
    
      function resize() {
          //width = window.innerWidth
          //height = window.innerHeight
          //largeHeader.style.height = height+'px'
          width = largeHeader.offsetWidth
          height = largeHeader.offsetHeight

          canvas.width = width
          canvas.height = height
      }
    
      // animation
      function initAnimation() {
          animate()

          for (var i in points) {
              shiftPoint(points[i]);
          }
      }
    
      function animate() {
          if (!animateHeader) {
            return  
          }

          ctx.clearRect(0, 0, width, height)

          for (var i in points) {
              // detect points in range
              if (Math.abs(getDistance(target, points[i])) < 4000) {
                  points[i].active = 0.3;
                  points[i].circle.active = 0.5;
              } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                  points[i].active = 0.1;
                  points[i].circle.active = 0.3;
              } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                  points[i].active = 0.02;
                  points[i].circle.active = 0.1;
              } else {
                  points[i].active = 0;
                  points[i].circle.active = 0;
              }

              drawLines(points[i])
              points[i].circle.draw()
          }

          requestAnimationFrame(animate)
      }
    
      function shiftPoint(p) {
        TweenLite.to(
          p,
          1 + 1 * Math.random(), 
          {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100, 
            ease: Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }
          }
        )
      }
    
      // Canvas manipulation
      function drawLines(p) {
          if (!p.active) return

          for (var i in p.closest) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p.closest[i].x, p.closest[i].y)
              ctx.strokeStyle = 'rgba(31, 43, 49, ' + p.active + ')'
              ctx.stroke()
          }
      }
    
      // Util
      function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
      }
      
    })();
  }

  render() {
    return <canvas id="neural-network-background"></canvas>
  }
}

export default NNBackground